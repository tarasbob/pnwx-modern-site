import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContactStrip from "@/components/ui/ContactStrip";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { mriCategory } from "@/data/mri";
import { COMPANY } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  return (mriCategory.subcategories ?? []).map((sub) => ({
    slug: [sub.slug],
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sub = mriCategory.subcategories?.find((s) => s.slug === slug[0]);
  if (!sub) return {};
  return { title: sub.seoTitle, description: sub.seoDescription };
}

export default async function MriSlugPage({ params }: Props) {
  const { slug } = await params;

  const sub = mriCategory.subcategories?.find((s) => s.slug === slug[0]);
  if (!sub) notFound();

  const name = slug.length > 1
    ? slug[slug.length - 1].replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : sub.name;

  const breadcrumbs = [
    { label: "MRI Safe Products", href: "/mri" },
    { label: sub.name, href: `/mri/${sub.slug}` },
    ...(slug.length > 1 ? [{ label: name, href: `/mri/${slug.join("/")}` }] : []),
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="pb-16">
          <h1 className="font-[family-name:var(--font-jakarta)] text-3xl font-bold text-gray-900 sm:text-4xl">
            {name}
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            {sub.description}
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
        </div>
      </div>
      <ContactStrip />
    </>
  );
}
