/*
# Create trial_signups table

## Purpose
Store trial signup requests from the "Start 1-Week Paid Trial" form on the Get Started page.

## Tables

### trial_signups
Stores all trial signup form submissions with contact information and service preferences.

**Columns:**
- `id` (uuid, primary key) - Unique identifier for each signup
- `full_name` (text, not null) - Customer's full name
- `email` (text, not null) - Customer's email address
- `phone` (text, not null) - Customer's phone number
- `company` (text, nullable) - Optional company name
- `service_interest` (text, not null) - Service they're interested in (content, shootings, ideations, packaging, distribution, full-service)
- `message` (text, nullable) - Optional project description/message
- `status` (text, default: 'pending') - Signup status (pending, contacted, converted, declined)
- `created_at` (timestamptz, default: now()) - Timestamp of signup submission

## Security
- **No RLS enabled** - This is a public form submission table
- All users can insert their trial signup data
- Admin panel will have full access to view and manage signups

## Notes
- Email and phone are required for contact purposes
- Service interest helps route to appropriate team
- Status field allows tracking of lead conversion
- No authentication required for form submission
*/

-- Create trial_signups table
CREATE TABLE IF NOT EXISTS trial_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  service_interest text NOT NULL,
  message text,
  status text DEFAULT 'pending' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX idx_trial_signups_email ON trial_signups(email);

-- Create index on created_at for sorting
CREATE INDEX idx_trial_signups_created_at ON trial_signups(created_at DESC);

-- Create index on status for filtering
CREATE INDEX idx_trial_signups_status ON trial_signups(status);