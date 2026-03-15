import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContactStrip from "@/components/ui/ContactStrip";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { policies } from "@/data/policies";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Order",
  description:
    "Learn how to order from Pacific Northwest X-Ray Inc. — by phone, email, fax, or mail. View our payment methods, warranty information, return policies, and delivery details.",
};

export default function OrderPage() {
  const breadcrumbs = [{ label: "How to Order", href: "/order" }];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="pb-16">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            How to Order
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            We make ordering easy. Choose the method that works best for you,
            and our team will take care of the rest. Questions? Call us at{" "}
            <span className="font-medium text-gray-700">
              {COMPANY.tollFree}
            </span>
            .
          </p>

          {/* Order Methods */}
          <section id="order-methods" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">Order Methods</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {policies.orderMethods.map((om) => (
                <div
                  key={om.method}
                  className="rounded-xl border border-gray-200 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {om.method}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {om.description}
                  </p>
                  <p className="mt-3 text-sm font-medium text-medical-700">
                    {om.details}
                  </p>
                  {om.hours && (
                    <p className="mt-1 text-xs text-gray-400">{om.hours}</p>
                  )}
                  {om.note && (
                    <p className="mt-2 text-xs text-gray-500 italic">
                      {om.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Payment Methods */}
          <section id="payment" className="mt-14">
            <h2 className="text-2xl font-bold text-gray-900">
              Payment Methods
            </h2>
            <div className="mt-6 space-y-4">
              {policies.paymentMethods.map((pm) => (
                <div
                  key={pm.method}
                  className="rounded-xl border border-gray-200 bg-white p-5"
                >
                  <h3 className="font-semibold text-gray-900">{pm.method}</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {pm.description}
                  </p>
                  {pm.note && (
                    <p className="mt-2 text-xs text-gray-500">{pm.note}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Warranties */}
          <section id="warranties" className="mt-14">
            <h2 className="text-2xl font-bold text-gray-900">Warranties</h2>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6">
              <p className="text-sm leading-relaxed text-gray-600">
                {policies.warranties}
              </p>
            </div>
          </section>

          {/* Returns & Cancellations */}
          <section id="returns" className="mt-14">
            <h2 className="text-2xl font-bold text-gray-900">
              Returns &amp; Cancellations
            </h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-gray-900">
                  Cancellations &amp; Returns
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {policies.cancellations}
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-gray-900">
                  Refused Deliveries
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {policies.refusal}
                </p>
              </div>
            </div>
          </section>

          {/* Delivery */}
          <section id="delivery" className="mt-14">
            <h2 className="text-2xl font-bold text-gray-900">
              Delivery &amp; Shipping
            </h2>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6">
              <p className="text-sm leading-relaxed text-gray-600">
                {policies.delivery}
              </p>
            </div>
          </section>
        </div>
      </div>
      <ContactStrip />
    </>
  );
}
