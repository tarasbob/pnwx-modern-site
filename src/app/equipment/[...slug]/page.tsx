import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductGrid from "@/components/product/ProductGrid";
import ProductDetailView from "@/components/product/ProductDetailView";
import ContactStrip from "@/components/ui/ContactStrip";
import { BreadcrumbJsonLd, ProductJsonLd } from "@/components/seo/JsonLd";
import { equipmentCategories } from "@/data/equipment";
import { getProductByPath } from "@/data/products";
import { COMPANY } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const params: { slug: string[] }[] = [];
  for (const cat of equipmentCategories) {
    params.push({ slug: [cat.slug] });
    for (const sub of cat.subcategories ?? []) {
      params.push({ slug: [cat.slug, sub.slug] });
    }
  }
  return params;
}

function findCategory(slug: string) {
  return equipmentCategories.find((c) => c.slug === slug);
}

function findSubcategory(catSlug: string, subSlug: string) {
  return findCategory(catSlug)?.subcategories?.find((s) => s.slug === subSlug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductByPath("equipment", ...slug);
  if (product) return { title: product.seoTitle, description: product.seoDescription };
  if (slug.length >= 2) {
    const sub = findSubcategory(slug[0], slug[1]);
    if (sub) return { title: sub.seoTitle, description: sub.seoDescription };
  }
  const cat = findCategory(slug[0]);
  if (!cat) return {};
  return { title: cat.seoTitle, description: cat.seoDescription };
}

export default async function EquipmentSlugPage({ params }: Props) {
  const { slug } = await params;

  const category = findCategory(slug[0]);
  if (!category) notFound();

  // Single slug: show subcategory grid
  if (slug.length === 1) {
    // Check if this category itself has product data (e.g. /equipment/digital-portable)
    const product = getProductByPath("equipment", slug[0]);

    const breadcrumbs = [
      { label: "Equipment", href: "/equipment" },
      { label: category.name, href: `/equipment/${category.slug}` },
    ];

    const items = (category.subcategories ?? []).map((sub) => ({
      name: sub.name,
      description: sub.description,
      href: `/equipment/${category.slug}/${sub.slug}`,
      itemCount: sub.itemCount,
      image: sub.image,
    }));

    return (
      <>
        <BreadcrumbJsonLd items={breadcrumbs} />
        {product && (
          <ProductJsonLd
            name={product.name}
            description={product.description}
            url={`/equipment/${slug[0]}`}
            image={product.images[0]}
          />
        )}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <div className="pb-16">
            <h1 className="font-[family-name:var(--font-jakarta)] text-3xl font-bold text-gray-900 sm:text-4xl">
              {product?.name ?? category.name}
            </h1>

            {product ? (
              <div className="mt-8">
                <ProductDetailView product={product} />
              </div>
            ) : (
              <>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                  {category.description}
                </p>
                {items.length > 0 && (
                  <div className="mt-10">
                    <ProductGrid items={items} />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <ContactStrip />
      </>
    );
  }

  // Deeper slugs: check product registry
  const product = getProductByPath("equipment", ...slug);
  const sub = findSubcategory(slug[0], slug[1]);
  const name = product?.name ?? sub?.name ?? slug[slug.length - 1].replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const breadcrumbs = [
    { label: "Equipment", href: "/equipment" },
    { label: category.name, href: `/equipment/${category.slug}` },
    { label: name, href: `/equipment/${slug.join("/")}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      {product && (
        <ProductJsonLd
          name={product.name}
          description={product.description}
          url={`/equipment/${slug.join("/")}`}
          image={product.images[0]}
        />
      )}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="pb-16">
          <h1 className="font-[family-name:var(--font-jakarta)] text-3xl font-bold text-gray-900 sm:text-4xl">
            {name}
          </h1>

          {product ? (
            <div className="mt-8">
              <ProductDetailView product={product} />
            </div>
          ) : (
            <>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                {sub?.description ?? category.description}
              </p>
              <div className="mt-10 rounded-xl border border-stone-200 bg-white p-8 text-center">
                <p className="text-gray-600">
                  Contact us for detailed product information and pricing.
                </p>
                <p className="mt-3 text-lg font-semibold text-accent-600">
                  {COMPANY.tollFree}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  or email{" "}
                  <a href={`mailto:${COMPANY.email}`} className="text-medical-600 hover:text-medical-700 underline">
                    {COMPANY.email}
                  </a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <ContactStrip />
    </>
  );
}
