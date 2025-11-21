import { supabase } from "./supabase";
import type {
  PortfolioItem,
  Testimonial,
  PricingPlan,
  FAQ,
  ContactSubmission,
  SiteStat,
  ContactFormData,
  PortfolioItemInput,
  TestimonialInput,
  PricingPlanInput,
  FAQInput,
  SiteStatInput
} from "@/types/types";

// Portfolio Items
export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const { data, error } = await supabase
    .from("portfolio_items")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching portfolio items:", error);
    return [];
  }

  return Array.isArray(data) ? data : [];
}

export async function createPortfolioItem(item: PortfolioItemInput): Promise<PortfolioItem | null> {
  const { data, error } = await supabase
    .from("portfolio_items")
    .insert([item])
    .select()
    .maybeSingle();

  if (error) {
    console.error("Error creating portfolio item:", error);
    return null;
  }

  return data;
}

export async function updatePortfolioItem(id: string, updates: Partial<PortfolioItemInput>): Promise<boolean> {
  const { error } = await supabase
    .from("portfolio_items")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) {
    console.error("Error updating portfolio item:", error);
    return false;
  }

  return true;
}

export async function deletePortfolioItem(id: string): Promise<boolean> {
  const { error } = await supabase
    .from("portfolio_items")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting portfolio item:", error);
    return false;
  }

  return true;
}

// Testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }

  return Array.isArray(data) ? data : [];
}

export async function createTestimonial(testimonial: TestimonialInput): Promise<Testimonial | null> {
  const { data, error } = await supabase
    .from("testimonials")
    .insert([testimonial])
    .select()
    .maybeSingle();

  if (error) {
    console.error("Error creating testimonial:", error);
    return null;
  }

  return data;
}

export async function updateTestimonial(id: string, updates: Partial<TestimonialInput>): Promise<boolean> {
  const { error } = await supabase
    .from("testimonials")
    .update(updates)
    .eq("id", id);

  if (error) {
    console.error("Error updating testimonial:", error);
    return false;
  }

  return true;
}

export async function deleteTestimonial(id: string): Promise<boolean> {
  const { error } = await supabase
    .from("testimonials")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting testimonial:", error);
    return false;
  }

  return true;
}

// Pricing Plans
export async function getPricingPlans(): Promise<PricingPlan[]> {
  const { data, error } = await supabase
    .from("pricing_plans")
    .select("*")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching pricing plans:", error);
    return [];
  }

  return Array.isArray(data) ? data : [];
}

export async function createPricingPlan(plan: PricingPlanInput): Promise<PricingPlan | null> {
  const { data, error } = await supabase
    .from("pricing_plans")
    .insert([plan])
    .select()
    .maybeSingle();

  if (error) {
    console.error("Error creating pricing plan:", error);
    return null;
  }

  return data;
}

export async function updatePricingPlan(id: string, updates: Partial<PricingPlanInput>): Promise<boolean> {
  const { error } = await supabase
    .from("pricing_plans")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) {
    console.error("Error updating pricing plan:", error);
    return false;
  }

  return true;
}

export async function deletePricingPlan(id: string): Promise<boolean> {
  const { error } = await supabase
    .from("pricing_plans")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting pricing plan:", error);
    return false;
  }

  return true;
}

// FAQs
export async function getFAQs(): Promise<FAQ[]> {
  const { data, error } = await supabase
    .from("faqs")
    .select("*")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }

  return Array.isArray(data) ? data : [];
}

export async function createFAQ(faq: FAQInput): Promise<FAQ | null> {
  const { data, error } = await supabase
    .from("faqs")
    .insert([faq])
    .select()
    .maybeSingle();

  if (error) {
    console.error("Error creating FAQ:", error);
    return null;
  }

  return data;
}

export async function updateFAQ(id: string, updates: Partial<FAQInput>): Promise<boolean> {
  const { error } = await supabase
    .from("faqs")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) {
    console.error("Error updating FAQ:", error);
    return false;
  }

  return true;
}

export async function deleteFAQ(id: string): Promise<boolean> {
  const { error } = await supabase
    .from("faqs")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting FAQ:", error);
    return false;
  }

  return true;
}

// Contact Submissions
export async function createContactSubmission(formData: ContactFormData): Promise<ContactSubmission | null> {
  const { data, error } = await supabase
    .from("contact_submissions")
    .insert([formData])
    .select()
    .maybeSingle();

  if (error) {
    console.error("Error creating contact submission:", error);
    return null;
  }

  return data;
}

export async function getContactSubmissions(): Promise<ContactSubmission[]> {
  const { data, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching contact submissions:", error);
    return [];
  }

  return Array.isArray(data) ? data : [];
}

export async function updateContactSubmissionStatus(id: string, status: string): Promise<boolean> {
  const { error } = await supabase
    .from("contact_submissions")
    .update({ status })
    .eq("id", id);

  if (error) {
    console.error("Error updating contact submission status:", error);
    return false;
  }

  return true;
}

// Site Stats
export async function getSiteStats(): Promise<SiteStat[]> {
  const { data, error } = await supabase
    .from("site_stats")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching site stats:", error);
    return [];
  }

  return Array.isArray(data) ? data : [];
}

export async function updateSiteStat(stat_key: string, stat_value: string): Promise<boolean> {
  const { error } = await supabase
    .from("site_stats")
    .update({ stat_value, updated_at: new Date().toISOString() })
    .eq("stat_key", stat_key);

  if (error) {
    console.error("Error updating site stat:", error);
    return false;
  }

  return true;
}

export async function createSiteStat(stat: SiteStatInput): Promise<SiteStat | null> {
  const { data, error } = await supabase
    .from("site_stats")
    .insert([stat])
    .select()
    .maybeSingle();

  if (error) {
    console.error("Error creating site stat:", error);
    return null;
  }

  return data;
}
