export const policies = {
  orderMethods: [
    {
      method: "Phone",
      description: "Call us directly to place your order.",
      details: "800-827-9729 (Toll-Free US) or 503-667-3000",
      hours: "8am - 5pm Monday-Friday, Pacific Time",
    },
    {
      method: "Email",
      description: "Send your order via email.",
      details: "SalesD@pnwx.com",
    },
    {
      method: "Fax",
      description: "Download our order form and fax it 24/7.",
      details: "503-666-8855",
      note: "Download order form at pnwx.com/PNWX-OrderForm.pdf",
    },
    {
      method: "Mail",
      description: "Send your order by mail.",
      details: "ATTN: Order Processing, Pacific Northwest X-Ray Inc., P.O. Box 625, Gresham, OR 97030 USA",
      note: "Call first for freight charges.",
    },
  ],
  paymentMethods: [
    {
      method: "Credit Card",
      description: "We accept major credit cards for convenient payment.",
      note: "$30.00 product minimum applies. International orders over $5,000 USD require wire transfer.",
    },
    {
      method: "Purchase Order",
      description: "Fax PO to 503-666-8855 (24/7) or email. US-based customers only.",
      note: "Minimum $500 opening order for new open charge accounts. We do not accept MS Word, Excel, or similar attachments — only graphics files or PDF.",
    },
    {
      method: "Money Order",
      description: "Mail payment to P.O. Box 625, Gresham, OR 97030.",
      note: "Call 800-827-9729 to determine total including shipping before sending.",
    },
    {
      method: "Check",
      description: "Personal or business checks accepted with 10-day hold for clearing.",
      note: "$25 fee for returned checks.",
    },
    {
      method: "Wire Transfer",
      description: "Required for international orders. Contact sales for bank routing information.",
      note: "$70 bank processing fee applies.",
    },
  ],
  warranties:
    "Pacific Northwest X-Ray Inc. manufactures very little of what we sell. Warranties are between the purchaser and the product manufacturer. We will assist with all warranty claims including repair and replacement, but the process is determined by the manufacturer. We do NOT provide warranty assistance for merchandise sold or taken outside of the United States. All freight charges from returns, exchanges, or service are the sole responsibility of the purchaser.",
  cancellations:
    "Changes or cancellations can only be accepted the day the order is placed and may require written notice. Rush or same-day shipping orders cannot be changed or cancelled. Authorized returns are subject to a 20-50% restocking fee depending on manufacturer policies. Customer is responsible for all freight charges in both directions. Returned products must be in new condition with original packaging and a return authorization number. Special order and custom items (lead markers, lead aprons, etc.) are NOT returnable. No authorized returns accepted after 30 days from shipment date.",
  refusal:
    "If a buyer refuses delivery, return shipping and restocking fees will be withheld from any credit. Customized items (monogrammed markers, custom lead garments) receive no refund. International customers should contact a customs broker before ordering to determine duties and taxes, as these are the buyer's responsibility.",
  delivery:
    "Pacific Northwest X-Ray Inc. is a retailer that ships products via various methods. Large items normally require a freight dock or forklift — inside delivery can be arranged but must be discussed at time of order. Buyers must note any shipping container damage before signing for delivery. Many products require no special setup, but items like film processors require assembly and technical expertise. X-ray generators require government licenses — usage on live humans without proper credentials is a serious crime. By purchasing, you represent that you have or will acquire all legal requirements for use in your jurisdiction.",
};
