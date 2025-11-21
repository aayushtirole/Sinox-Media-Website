// Database types matching the Supabase schema

export interface PortfolioItem {
  id: string;
  image_url: string;
  views: string;
  type: string;
  title: string | null;
  description: string | null;
  display_order: number;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  client_role: string | null;
  client_company: string | null;
  testimonial_text: string;
  rating: number | null;
  instagram_handle: string | null;
  display_order: number;
  is_featured: boolean;
  created_at: string;
}

export interface PricingPlan {
  id: string;
  plan_name: string;
  plan_description: string | null;
  price_inr: number;
  price_usd: number;
  billing_period: string;
  features: string[];
  is_popular: boolean;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string | null;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  status: string;
  created_at: string;
}

export interface SiteStat {
  id: string;
  stat_key: string;
  stat_value: string;
  stat_label: string;
  display_order: number;
  updated_at: string;
}

export interface TrialSignup {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  company: string | null;
  service_interest: string;
  message: string | null;
  status: string;
  created_at: string;
}

// Form types for creating/updating records
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface PortfolioItemInput {
  image_url: string;
  views: string;
  type: string;
  title?: string;
  description?: string;
  display_order?: number;
  is_featured?: boolean;
}

export interface TestimonialInput {
  client_name: string;
  client_role?: string;
  client_company?: string;
  testimonial_text: string;
  rating?: number;
  instagram_handle?: string;
  display_order?: number;
  is_featured?: boolean;
}

export interface PricingPlanInput {
  plan_name: string;
  plan_description?: string;
  price_inr: number;
  price_usd: number;
  billing_period?: string;
  features: string[];
  is_popular?: boolean;
  display_order?: number;
  is_active?: boolean;
}

export interface FAQInput {
  question: string;
  answer: string;
  category?: string;
  display_order?: number;
  is_active?: boolean;
}

export interface SiteStatInput {
  stat_key: string;
  stat_value: string;
  stat_label: string;
  display_order?: number;
}

export interface TrialSignupInput {
  full_name: string;
  email: string;
  phone: string;
  company?: string;
  service_interest: string;
  message?: string;
}
