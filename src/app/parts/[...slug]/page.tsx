import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductDetailView from "@/components/product/ProductDetailView";
import ContactStrip from "@/components/ui/ContactStrip";
import { BreadcrumbJsonLd, ProductJsonLd } from "@/components/seo/JsonLd";
import { partsCategories } from "@/data/parts";
import { getProductByPath } from "@/data/products";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  return partsCategories.map((cat) => ({ slug: [cat.slug] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductByPath("parts", ...slug);
  if (product) return { title: product.seoTitle, description: product.seoDescription };
  const category = partsCategories.find((c) => c.slug === slug[0]);
  if (!category) return {};
  return { title: category.seoTitle, description: category.seoDescription };
}

export default async function PartsSlugPage({ params }: Props) {
  const { slug } = await params;
  if (slug.length !== 1) notFound();

  const product = getProductByPath("parts", ...slug);
  const category = partsCategories.find((c) => c.slug === slug[0]);
  if (!product && !category) notFound();

  const name = product?.name ?? category!.name;

  const breadcrumbs = [
    { label: "Parts", href: "/parts" },
    { label: name, href: `/parts/${slug[0]}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      {product && (
        <ProductJsonLd
          name={product.name}
          description={product.description}
          url={`/parts/${slug[0]}`}
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
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              {category!.description}
            </p>
          )}
        </div>
      </div>
      <ContactStrip />
    </>
  );
}
