export interface ProductItem {
  name: string;
  chemicalFormula?: string;
  description: string;
  specifications?: string[];
  casNumber?: string;
}

export interface ProductGroup {
  id: string;
  name: string;
  icon: string;
  description: string;
  items: ProductItem[];
}

export interface IndustryApplication {
  id: string;
  name: string;
  icon: string;
  description: string;
  details: string;
  keyProducts: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "water-treatment" | "industrial-filtration" | "oil-gas" | "logistics-procurement" | "technical-facilities";
  description: string;
  url: string;
}

export interface QuoteRequest {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  productRequired: string;
  chemicalGroup: string;
  industrialApplication: string;
  estimatedQuantity: string;
  deliveryLocation: string;
  requiredTimeline: string;
  technicalSpecs?: string;
  status: "Evaluation Pending" | "Technical Matching" | "Commercial Quoting" | "Processed";
  createdAt: string;
}
