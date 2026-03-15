#!/usr/bin/env node
/**
 * Crawls pnwx.com pages and downloads all images to /public/images/
 */
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "..", "public", "images");
const BASE = "https://www.pnwx.com";

const PAGES = [
  "/",
  "/Accessories/",
  "/Accessories/LeadProducts/",
  "/Accessories/LeadProducts/Aprons/",
  "/Accessories/LeadProducts/Aprons/Infab/LightningFast/",
  "/Accessories/LeadProducts/Aprons/Infab/Revolution/",
  "/Accessories/LeadProducts/Gloves/Proguard/",
  "/Accessories/LeadProducts/Windows/",
  "/Accessories/LeadProducts/MobileBarriers/Infab/",
  "/Accessories/LeadProducts/Caps/",
  "/Accessories/LeadProducts/Eyewear/Glasses/",
  "/Accessories/Phantoms/",
  "/Accessories/Phantoms/Test/Fluoroscopy/",
  "/Accessories/Phantoms/Test/LinePair/",
  "/Accessories/Phantoms/MRI/Pro-Project/ACR-Medium/",
  "/Accessories/PosAides/Pet-Sitioner/",
  "/Accessories/PatAsst/MerchantBoards/",
  "/Accessories/PatAsst/TablePads/X-Ray/",
  "/Accessories/ExamRoom/",
  "/Accessories/Seating/",
  "/Accessories/Darkroom/",
  "/Accessories/Darkroom/Safelights/",
  "/Accessories/Signs/",
  "/Accessories/Markers/",
  "/Accessories/Cassettes/",
  "/Equipment/",
  "/Equipment/MedXray/",
  "/Equipment/MedXray/Source-Ray/Digital/",
  "/Equipment/VetXray/Ultra/",
  "/Equipment/ViewEquip/Wolf/",
  "/Equipment/FilmProc/Protec/",
  "/Parts/",
  "/Parts/Grids/",
  "/Parts/Collimators/Ralco/",
  "/Parts/Lamps/",
  "/Parts/HT_Cables/",
  "/MRI/",
  "/Veterinary/",
  "/Ultrasound/",
  "/Supplies/",
  "/Pedigo/",
  "/Buy/",
];

const seen = new Set();
const manifest = {};

function resolveUrl(src, pageUrl) {
  try {
    if (src.startsWith("//")) return `https:${src}`;
    if (src.startsWith("http")) return src;
    return new URL(src, pageUrl).href;
  } catch {
    return null;
  }
}

function urlToLocalPath(url) {
  try {
    const u = new URL(url);
    let p = u.pathname;
    if (p === "/") return null;
    if (u.pathname.includes("/ImageServer/")) {
      const stock = u.searchParams.get("StockNumber") || "unknown";
      const img = u.searchParams.get("Image") || "img";
      return `ImageServer/${stock.replace(/[^a-zA-Z0-9_-]/g, "_")}_${img}.jpg`;
    }
    if (p.startsWith("/")) p = p.slice(1);
    return p;
  } catch {
    return null;
  }
}

async function downloadImage(url, localPath) {
  const dest = join(PUBLIC_DIR, localPath);
  if (existsSync(dest)) return true;
  const dir = dirname(dest);
  await mkdir(dir, { recursive: true });
  try {
    const res = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(15000) });
    if (!res.ok) {
      console.error(`  SKIP ${res.status}: ${url}`);
      return false;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 50) return false;
    await writeFile(dest, buf);
    return true;
  } catch (e) {
    console.error(`  ERR: ${url} - ${e.message}`);
    return false;
  }
}

async function crawlPage(path) {
  const url = `${BASE}${path}`;
  console.log(`\nCrawling: ${url}`);
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
    if (!res.ok) { console.error(`  Page ${res.status}`); return []; }
    const html = await res.text();
    const imgSrcs = [];
    const regex = /<img[^>]+src=["']([^"']+)["']/gi;
    let m;
    while ((m = regex.exec(html)) !== null) {
      const resolved = resolveUrl(m[1], url);
      if (resolved && resolved.startsWith(BASE)) imgSrcs.push(resolved);
    }
    // Also grab video sources
    const vidRegex = /<source[^>]+src=["']([^"']+)["']/gi;
    while ((m = vidRegex.exec(html)) !== null) {
      const resolved = resolveUrl(m[1], url);
      if (resolved && resolved.startsWith(BASE) && /\.(mp4|webm)$/i.test(resolved)) {
        imgSrcs.push(resolved);
      }
    }
    return imgSrcs;
  } catch (e) {
    console.error(`  ERR crawling: ${e.message}`);
    return [];
  }
}

async function main() {
  console.log("Starting image download from pnwx.com...");
  await mkdir(PUBLIC_DIR, { recursive: true });

  const allUrls = new Set();
  for (const page of PAGES) {
    const imgs = await crawlPage(page);
    for (const img of imgs) allUrls.add(img);
  }

  console.log(`\nFound ${allUrls.size} unique image URLs. Downloading...`);

  let downloaded = 0;
  let skipped = 0;
  for (const url of allUrls) {
    const localPath = urlToLocalPath(url);
    if (!localPath) { skipped++; continue; }
    if (seen.has(localPath)) continue;
    seen.add(localPath);
    const ok = await downloadImage(url, localPath);
    if (ok) {
      downloaded++;
      manifest[url] = `/images/${localPath}`;
      process.stdout.write(`  [${downloaded}] ${localPath}\n`);
    } else {
      skipped++;
    }
  }

  await writeFile(
    join(PUBLIC_DIR, "manifest.json"),
    JSON.stringify(manifest, null, 2)
  );

  console.log(`\nDone! Downloaded: ${downloaded}, Skipped: ${skipped}`);
  console.log(`Manifest written to public/images/manifest.json`);
}

main().catch(console.error);
