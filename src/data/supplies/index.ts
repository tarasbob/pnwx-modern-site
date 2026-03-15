import type { Category } from "../types";

export const suppliesCategory: Category = {
  slug: "supplies",
  name: "X-Ray & Radiology Supplies",
  description:
    "Consumable supplies for radiology departments including sanitizers, CT gantry covers, CR plate cleaners, CD/DVD media, exam gowns, labels, envelopes, MRI supplies, decontamination products, and ultrasound supplies.",
  seoTitle: "Radiology Supplies & Consumables | Pacific Northwest X-Ray",
  seoDescription:
    "Radiology consumable supplies: sanitizers, CT gantry covers, CR plate cleaners, exam gowns, labels, MRI supplies, and decontamination products.",
  image: "/images/Supplies/Cleaners/Sanitizer/HS-4x_but.jpg",
  subcategories: [
    { slug: "sanitizer", name: "Hand Sanitizer", description: "Alcohol-based sanitizer formulated per WHO and FDA recommendations for healthcare facilities.", seoTitle: "Medical Hand Sanitizer | PNWX", seoDescription: "WHO and FDA formula hand sanitizer for healthcare facilities.", parentSlug: "supplies" },
    { slug: "ct-gantry-covers", name: "CT Gantry Covers", description: "Protective covers for CT gantries against blood, contrast, and bodily fluids.", seoTitle: "CT Gantry Covers | PNWX", seoDescription: "CT gantry protection covers for blood, contrast, and fluid containment.", parentSlug: "supplies" },
    { slug: "cr-plate-cleaners", name: "CR Plate Cleaning System", description: "Complete CR plate cleaning solution kit that cleans over 500 CR imaging plates.", seoTitle: "CR Plate Cleaners | PNWX", seoDescription: "CR plate cleaning kits for over 500 imaging plates.", parentSlug: "supplies" },
    { slug: "cd-dvd", name: "CD/DVD Storage Media", description: "Medical grade CD/DVD media and custom printed packaging for healthcare imaging distribution.", seoTitle: "Medical CD/DVD Media | PNWX", seoDescription: "Medical grade CD/DVD media and custom packaging for imaging distribution.", parentSlug: "supplies" },
    { slug: "exam-gowns", name: "Exam Gowns & Capes", description: "Single-use patient exam capes and gowns for imaging procedures.", seoTitle: "Disposable Exam Gowns | PNWX", seoDescription: "Single-use disposable exam capes and gowns for medical imaging.", parentSlug: "supplies" },
    { slug: "labels", name: "Labels & Dispensers", description: "X-ray jacket marking labels and dispensers for film organization.", seoTitle: "X-Ray Labels & Dispensers | PNWX", seoDescription: "X-ray jacket marking labels and dispenser systems.", parentSlug: "supplies" },
    { slug: "envelopes", name: "Mailing & Filing Envelopes", description: "Mailing envelopes, film jackets, mammography jackets, loan jackets, report folders, and category inserts.", seoTitle: "Medical Film Envelopes & Jackets | PNWX", seoDescription: "Film jackets, mailing envelopes, mammography jackets, and report folders.", parentSlug: "supplies" },
    { slug: "mri-breast-coil-covers", name: "MRI Breast Coil Covers", description: "Disposable breast coil drapes for specific MR systems.", seoTitle: "MRI Breast Coil Covers | PNWX", seoDescription: "Disposable MRI breast coil drapes and covers.", parentSlug: "supplies" },
    { slug: "mri-earplugs", name: "MRI Safe Earplugs", description: "MR-safe foam earplugs with no known hazards for hearing protection during MRI procedures.", seoTitle: "MRI Safe Earplugs | PNWX", seoDescription: "MRI-safe foam earplugs for patient hearing protection.", parentSlug: "supplies" },
    { slug: "decontamination", name: "Radioactive Decontamination", description: "Bind-It radioactive iodine decontamination cleaner for surfaces and skin.", seoTitle: "Radioactive Decontamination Products | PNWX", seoDescription: "Bind-It radioactive iodine decontamination cleaner for surfaces and skin.", parentSlug: "supplies" },
    { slug: "screen-cleaners", name: "Screen & Surface Cleaners", description: "Screen cleaners and spray cleaners for radiology department equipment maintenance.", seoTitle: "Screen Cleaners for Radiology | PNWX", seoDescription: "Screen cleaners and surface cleaners for radiology equipment.", parentSlug: "supplies" },
    { slug: "ultrasound-gel", name: "Ultrasound Gel", description: "Wide array of ultrasound gels available in bottles and larger jugs.", seoTitle: "Ultrasound Gel | PNWX", seoDescription: "Ultrasound gel in bottles and jugs for clinical imaging.", parentSlug: "supplies" },
    { slug: "probe-covers", name: "Ultrasound Probe Covers", description: "Disposable covers for ultrasound probes to maintain hygiene.", seoTitle: "Ultrasound Probe Covers | PNWX", seoDescription: "Disposable ultrasound probe covers for hygiene and safety.", parentSlug: "supplies" },
    { slug: "wipes", name: "Sanitizing Wipes", description: "Sanitizing wipes for medical and radiology facilities in multiple formulations.", seoTitle: "Medical Sanitizing Wipes | PNWX", seoDescription: "Sanitizing wipes for medical and radiology equipment and surfaces.", parentSlug: "supplies" },
  ],
};
