export interface Category {
  slug: string;
  name: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  image?: string;
  itemCount?: number;
  subcategories?: SubCategory[];
  products?: Product[];
}

export interface SubCategory {
  slug: string;
  name: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  image?: string;
  itemCount?: number;
  parentSlug: string;
  subcategories?: SubCategory[];
  products?: Product[];
}

export interface Product {
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  seoTitle: string;
  seoDescription: string;
  images: string[];
  variants?: ProductVariant[];
  features?: string[];
  notes?: string[];
  relatedLinks?: RelatedLink[];
  category: string;
  subcategory?: string;
}

export interface ProductVariant {
  stockNumber: string;
  description?: string;
  specs?: Record<string, string>;
  price: string;
}

export interface RelatedLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface CompanyInfo {
  name: string;
  phone: string;
  tollFree: string;
  fax: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  hours: string;
  foundedYear: number;
}
