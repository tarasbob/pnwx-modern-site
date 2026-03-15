import type { Product } from "./types";

import { apronsProduct } from "./accessories/lead-products/aprons";
import { glovesProduct } from "./accessories/lead-products/gloves";
import { windowsProduct } from "./accessories/lead-products/windows";
import { mobileBarriersProduct } from "./accessories/lead-products/mobile-barriers";
import { capsProduct } from "./accessories/lead-products/caps";
import { curtainsProduct } from "./accessories/lead-products/curtains";
import { drywallProduct } from "./accessories/lead-products/drywall";
import { fluoroscopyProduct } from "./accessories/phantoms/fluoroscopy";
import { linePairProduct } from "./accessories/phantoms/line-pair";
import { mriAcrProduct } from "./accessories/phantoms/mri-acr";
import { petSitionerProduct } from "./accessories/patient-care/pet-sitioner";
import { merchantBoardsProduct } from "./accessories/patient-care/merchant-boards";
import { tablePadsProduct } from "./accessories/patient-care/table-pads";
import { safelightsProduct } from "./accessories/darkroom/safelights";
import { thermometersProduct } from "./accessories/darkroom/thermometers";
import { signsProduct } from "./accessories/signs";
import { filmProcessorProduct } from "./equipment/darkroom/film-processor";
import { chemicalMixersProduct } from "./equipment/darkroom/chemical-mixers";
import { duplicatorsProduct } from "./equipment/darkroom/duplicators";
import { digitalPortableProduct } from "./equipment/digital-portable";
import { wipeCountersProduct } from "./equipment/test/wipe-counters";
import { gridsProduct } from "./parts/grids";
import { collimatorsProduct } from "./parts/collimators";
import { lampsProduct } from "./parts/lamps";
import { cablesProduct } from "./parts/cables";

/**
 * Registry mapping route slug paths to Product objects.
 * Key format: "section/slug1/slug2" e.g. "accessories/lead-products/aprons"
 */
const productRegistry: Record<string, Product> = {
  // Accessories > Lead Products
  "accessories/lead-products/aprons": apronsProduct,
  "accessories/lead-products/gloves": glovesProduct,
  "accessories/lead-products/windows": windowsProduct,
  "accessories/lead-products/mobile-barriers": mobileBarriersProduct,
  "accessories/lead-products/caps": capsProduct,
  "accessories/lead-products/curtains": curtainsProduct,
  "accessories/lead-products/drywall": drywallProduct,

  // Accessories > Phantoms
  "accessories/phantoms/test": fluoroscopyProduct,
  "accessories/phantoms/fluoroscopy": fluoroscopyProduct,
  "accessories/phantoms/line-pair": linePairProduct,
  "accessories/phantoms/mri": mriAcrProduct,

  // Accessories > Patient Care
  "accessories/patient-care/pet-sitioner": petSitionerProduct,
  "accessories/patient-care/merchant-boards": merchantBoardsProduct,
  "accessories/patient-care/table-pads": tablePadsProduct,

  // Accessories > Darkroom
  "accessories/darkroom/safelights": safelightsProduct,
  "accessories/darkroom/thermometers": thermometersProduct,

  // Accessories > Signs (lives at accessories/darkroom/signs too)
  "accessories/darkroom/signs": signsProduct,
  "accessories/tech-aides/signs": signsProduct,

  // Equipment > Darkroom
  "equipment/darkroom/film-processor": filmProcessorProduct,
  "equipment/darkroom/chemical-mixers": chemicalMixersProduct,
  "equipment/darkroom/duplicators": duplicatorsProduct,
  "equipment/darkroom/silver-recovery": {
    ...filmProcessorProduct,
    slug: "silver-recovery",
    name: "Silver Recovery Systems",
    description: "Rotex silver recovery systems including electrolytic units, steel wool canisters, and combo models for removing silver from fixer solutions.",
    seoTitle: "Silver Recovery Systems | PNWX",
    seoDescription: "Rotex silver recovery: steel wool canisters, electrolytic units, combo models, and automated systems.",
    images: ["/images/Equipment/DarkEquip/Rotex/05510707_but.jpg"],
    variants: [],
    features: ["Reloadable steel wool canisters", "Electrolytic Ultra series", "Combo models with tailing canister", "Automatic batch systems"],
  },

  // Equipment > Digital Portable
  "equipment/digital-portable": digitalPortableProduct,

  // Equipment > Test
  "equipment/test/wipe-counters": wipeCountersProduct,

  // Parts (already have pages but register for completeness)
  "parts/grids": gridsProduct,
  "parts/collimators": collimatorsProduct,
  "parts/lamps": lampsProduct,
  "parts/cables": cablesProduct,
};

export function getProductByPath(section: string, ...slugs: string[]): Product | undefined {
  const key = [section, ...slugs].join("/");
  return productRegistry[key];
}

export function getAllProductPaths(): string[] {
  return Object.keys(productRegistry);
}
