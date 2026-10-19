export interface ProductItem {
  name: string;
  chemicalFormula?: string;
  description: string;
  specifications?: string[];
  casNumber?: string;
  typicalApplications?: string[];
}

export interface ProductGroup {
  id: string;
  name: string;
  icon: string;
  description: string;
  items: ProductItem[];
}

export interface CapabilityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
  image?: string;
}

export interface InfrastructureItem {
  id: string;
  title: string;
  category: "warehousing" | "handling" | "logistics" | "laboratory" | "port";
  location: string;
  capacity?: string;
  description: string;
  highlights: string[];
  image: string;
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
  location?: string;
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
  casNumber?: string;
  technicalSpecs?: string;
  status: "Evaluation Pending" | "Technical Matching" | "Commercial Quoting" | "Processed";
  createdAt: string;
}

