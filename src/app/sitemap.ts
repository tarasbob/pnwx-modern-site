import type { MetadataRoute } from "next";
import { accessoriesCategories } from "@/data/accessories";
import { equipmentCategories } from "@/data/equipment";
import { partsCategories } from "@/data/parts";
import { mriCategory } from "@/data/mri";
import { veterinaryCategory } from "@/data/veterinary";
import { ultrasoundCategory } from "@/data/ultrasound";
import { suppliesCategory } from "@/data/supplies";
import { pedigoCategory } from "@/data/pedigo";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/accessories`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/equipment`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/parts`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/mri`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/veterinary`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/ultrasound`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/supplies`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/pedigo`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/order`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const accessoryPages: MetadataRoute.Sitemap = accessoriesCategories.flatMap((cat) => [
    { url: `${SITE_URL}/accessories/${cat.slug}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    ...(cat.subcategories?.map((sub) => ({
      url: `${SITE_URL}/accessories/${cat.slug}/${sub.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })) ?? []),
  ]);

  const equipmentPages: MetadataRoute.Sitemap = equipmentCategories.flatMap((cat) => [
    { url: `${SITE_URL}/equipment/${cat.slug}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    ...(cat.subcategories?.map((sub) => ({
      url: `${SITE_URL}/equipment/${cat.slug}/${sub.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })) ?? []),
  ]);

  const partsPages: MetadataRoute.Sitemap = partsCategories.map((cat) => ({
    url: `${SITE_URL}/parts/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const mriPages: MetadataRoute.Sitemap = (mriCategory.subcategories ?? []).map((sub) => ({
    url: `${SITE_URL}/mri/${sub.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const vetPages: MetadataRoute.Sitemap = (veterinaryCategory.subcategories ?? []).map((sub) => ({
    url: `${SITE_URL}/veterinary/${sub.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const usPages: MetadataRoute.Sitemap = (ultrasoundCategory.subcategories ?? []).map((sub) => ({
    url: `${SITE_URL}/ultrasound/${sub.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const supplyPages: MetadataRoute.Sitemap = (suppliesCategory.subcategories ?? []).map((sub) => ({
    url: `${SITE_URL}/supplies/${sub.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const pedigoPages: MetadataRoute.Sitemap = (pedigoCategory.subcategories ?? []).map((sub) => ({
    url: `${SITE_URL}/pedigo/${sub.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...accessoryPages,
    ...equipmentPages,
    ...partsPages,
    ...mriPages,
    ...vetPages,
    ...usPages,
    ...supplyPages,
    ...pedigoPages,
  ];
}
