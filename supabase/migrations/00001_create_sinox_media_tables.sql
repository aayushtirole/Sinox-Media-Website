/*
# Sinox Media Database Schema

## Overview
This migration creates the database structure for the Sinox Media content production studio website.
It includes tables for portfolio items, testimonials, pricing plans, FAQs, contact submissions, and site statistics.

## Tables

### 1. portfolio_items
Stores video reels and portfolio pieces displayed on the website.
- `id` (uuid, primary key): Unique identifier
- `image_url` (text, not null): URL of the portfolio image/thumbnail
- `views` (text, not null): Display text for view count (e.g., "300K+")
- `type` (text, not null): Type of content (e.g., "30s Reels", "60s Shorts")
- `title` (text): Optional title for the portfolio item
- `description` (text): Optional description
- `display_order` (integer, default: 0): Order for displaying items
- `is_featured` (boolean, default: false): Whether to feature this item
- `created_at` (timestamptz, default: now())
- `updated_at` (timestamptz, default: now())

### 2. testimonials
Stores client testimonials and reviews.
- `id` (uuid, primary key): Unique identifier
- `client_name` (text, not null): Name of the client
- `client_role` (text): Client's role/position
- `client_company` (text): Client's company name
- `testimonial_text` (text, not null): The testimonial content
- `rating` (integer): Rating out of 5
- `instagram_handle` (text): Client's Instagram handle
- `display_order` (integer, default: 0): Order for displaying testimonials
- `is_featured` (boolean, default: false): Whether to feature this testimonial
- `created_at` (timestamptz, default: now())

### 3. pricing_plans
Stores pricing tiers and their features.
- `id` (uuid, primary key): Unique identifier
- `plan_name` (text, not null): Name of the pricing plan
- `plan_description` (text): Short description of the plan
- `price_inr` (integer, not null): Price in Indian Rupees
- `price_usd` (integer, not null): Price in US Dollars
- `billing_period` (text, default: 'monthly'): Billing period
- `features` (jsonb, not null): Array of features included in the plan
- `is_popular` (boolean, default: false): Whether this is the most popular plan
- `display_order` (integer, default: 0): Order for displaying plans
- `is_active` (boolean, default: true): Whether the plan is currently available
- `created_at` (timestamptz, default: now())
- `updated_at` (timestamptz, default: now())

### 4. faqs
Stores frequently asked questions and answers.
- `id` (uuid, primary key): Unique identifier
- `question` (text, not null): The FAQ question
- `answer` (text, not null): The FAQ answer
- `category` (text): Category for grouping FAQs
- `display_order` (integer, default: 0): Order for displaying FAQs
- `is_active` (boolean, default: true): Whether to display this FAQ
- `created_at` (timestamptz, default: now())
- `updated_at` (timestamptz, default: now())

### 5. contact_submissions
Stores contact form submissions from potential clients.
- `id` (uuid, primary key): Unique identifier
- `name` (text, not null): Submitter's name
- `email` (text, not null): Submitter's email
- `phone` (text): Submitter's phone number
- `message` (text, not null): The message content
- `status` (text, default: 'new'): Status of the submission (new, contacted, closed)
- `created_at` (timestamptz, default: now())

### 6. site_stats
Stores dynamic statistics displayed on the website.
- `id` (uuid, primary key): Unique identifier
- `stat_key` (text, unique, not null): Unique key for the statistic
- `stat_value` (text, not null): Display value (e.g., "10,000+")
- `stat_label` (text, not null): Label for the statistic
- `display_order` (integer, default: 0): Order for displaying stats
- `updated_at` (timestamptz, default: now())

## Security
- All tables are public (no RLS enabled) as this is a showcase website
- Contact submissions table stores user inquiries for admin review
- All data is readable by everyone for display purposes

## Initial Data
- Populated with current website content for immediate functionality
- All data can be managed through admin interface
*/

-- Create portfolio_items table
CREATE TABLE IF NOT EXISTS portfolio_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  views text NOT NULL,
  type text NOT NULL,
  title text,
  description text,
  display_order integer DEFAULT 0,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_role text,
  client_company text,
  testimonial_text text NOT NULL,
  rating integer CHECK (rating >= 1 AND rating <= 5),
  instagram_handle text,
  display_order integer DEFAULT 0,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create pricing_plans table
CREATE TABLE IF NOT EXISTS pricing_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_name text NOT NULL,
  plan_description text,
  price_inr integer NOT NULL,
  price_usd integer NOT NULL,
  billing_period text DEFAULT 'monthly',
  features jsonb NOT NULL,
  is_popular boolean DEFAULT false,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create faqs table
CREATE TABLE IF NOT EXISTS faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL,
  answer text NOT NULL,
  category text,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Create site_stats table
CREATE TABLE IF NOT EXISTS site_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stat_key text UNIQUE NOT NULL,
  stat_value text NOT NULL,
  stat_label text NOT NULL,
  display_order integer DEFAULT 0,
  updated_at timestamptz DEFAULT now()
);

-- Insert initial portfolio items
INSERT INTO portfolio_items (image_url, views, type, display_order) VALUES
('https://miaoda-site-img.s3cdn.medo.dev/images/70eff5cb-49bc-4192-81cb-5e7fd9e2e7e0.jpg', '300K+', '30s Reels', 1),
('https://miaoda-site-img.s3cdn.medo.dev/images/fa3f4d5a-62c8-49ca-a969-bc87f9a88ec3.jpg', '450K+', '60s Shorts', 2),
('https://miaoda-site-img.s3cdn.medo.dev/images/39eec0a7-4401-4bd1-85bc-f241994eb8ca.jpg', '520K+', '45s Reels', 3),
('https://miaoda-site-img.s3cdn.medo.dev/images/4e54de14-9800-42ac-8f1a-f7e6b40f481c.jpg', '380K+', '30s Reels', 4),
('https://miaoda-site-img.s3cdn.medo.dev/images/aeb943e8-48d2-4c23-bf29-5e2acb36d745.jpg', '410K+', '60s Shorts', 5);

-- Insert initial testimonials
INSERT INTO testimonials (client_name, client_role, client_company, testimonial_text, rating, display_order) VALUES
('Sarah Johnson', 'Marketing Director', 'TechFlow Inc', 'Sinox Media transformed our brand presence with stunning content. Their attention to detail and creative vision exceeded our expectations.', 5, 1),
('Michael Chen', 'CEO', 'StartupHub', 'Working with Sinox Media was a game-changer for our content strategy. Professional, creative, and always on time.', 5, 2),
('Emily Rodriguez', 'Brand Manager', 'Fashion Forward', 'The quality of content produced by Sinox Media is unmatched. They truly understand how to tell a brand story.', 5, 3);

-- Insert initial pricing plans
INSERT INTO pricing_plans (plan_name, plan_description, price_inr, price_usd, features, is_popular, display_order) VALUES
('Starter', 'Perfect for small businesses and startups', 29999, 399, 
'["4 videos per month", "Basic editing", "1080p quality", "2 revisions per video", "Email support", "7-day delivery"]'::jsonb, 
false, 1),
('Professional', 'Ideal for growing brands', 59999, 799, 
'["8 videos per month", "Advanced editing", "4K quality", "Unlimited revisions", "Priority support", "3-day delivery", "Social media optimization", "Content strategy consultation"]'::jsonb, 
true, 2),
('Enterprise', 'For established businesses', 99999, 1299, 
'["16 videos per month", "Premium editing", "4K quality", "Unlimited revisions", "24/7 dedicated support", "Same-day delivery", "Full content strategy", "Brand consultation", "Analytics & reporting", "Custom thumbnails"]'::jsonb, 
false, 3);

-- Insert initial FAQs
INSERT INTO faqs (question, answer, category, display_order) VALUES
('What types of content do you produce?', 'We specialize in short-form content including Instagram Reels, YouTube Shorts, TikTok videos, and promotional content. We also produce long-form videos, documentaries, and brand stories.', 'Services', 1),
('How long does it take to produce a video?', 'Turnaround time depends on your plan. Starter plan: 7 days, Professional: 3 days, Enterprise: same-day delivery for urgent projects.', 'Process', 2),
('Do you offer revisions?', 'Yes! Starter plan includes 2 revisions per video, while Professional and Enterprise plans include unlimited revisions until you are satisfied.', 'Process', 3),
('Can I cancel my subscription anytime?', 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.', 'Billing', 4),
('Do you provide content strategy consultation?', 'Professional and Enterprise plans include content strategy consultation to help you maximize engagement and reach your target audience.', 'Services', 5),
('What is your refund policy?', 'We offer a 14-day money-back guarantee if you are not satisfied with our service. No questions asked.', 'Billing', 6);

-- Insert initial site stats
INSERT INTO site_stats (stat_key, stat_value, stat_label, display_order) VALUES
('community_members', '10,000+', 'Community Members', 1),
('cohort_graduates', '50+', 'Cohort Graduates', 2),
('videos_produced', '4,000+', 'Videos Produced', 3),
('client_satisfaction', '98%', 'Client Satisfaction', 4),
('total_views', '50M+', 'Total Views', 5),
('years_experience', '5+', 'Years of Experience', 6);

-- Create indexes for better query performance
CREATE INDEX idx_portfolio_display_order ON portfolio_items(display_order);
CREATE INDEX idx_portfolio_featured ON portfolio_items(is_featured);
CREATE INDEX idx_testimonials_display_order ON testimonials(display_order);
CREATE INDEX idx_pricing_display_order ON pricing_plans(display_order);
CREATE INDEX idx_pricing_active ON pricing_plans(is_active);
CREATE INDEX idx_faqs_display_order ON faqs(display_order);
CREATE INDEX idx_faqs_active ON faqs(is_active);
CREATE INDEX idx_contact_status ON contact_submissions(status);
CREATE INDEX idx_contact_created ON contact_submissions(created_at DESC);
CREATE INDEX idx_stats_display_order ON site_stats(display_order);