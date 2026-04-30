/* Supabase PostgreSQL schema generated from blueprint */

-- Table: product_categories
CREATE TABLE IF NOT EXISTS product_categories (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    slug text UNIQUE NOT NULL,
    description text,
    image_url text,
    sort_order int DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamptz DEFAULT now()
);

-- Table: products
CREATE TABLE IF NOT EXISTS products (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id uuid REFERENCES product_categories(id) ON DELETE SET NULL,
    name text NOT NULL,
    slug text UNIQUE NOT NULL,
    short_description text,
    description text,
    hero_image_url text,
    starting_price numeric,
    moq int,
    lead_time text,
    material_summary text,
    printing_options text,
    finishing_options text,
    size_options text,
    sustainability_badges text[],
    meta_title text,
    meta_description text,
    is_featured boolean DEFAULT false,
    is_active boolean DEFAULT true,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Table: product_images
CREATE TABLE IF NOT EXISTS product_images (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id uuid REFERENCES products(id) ON DELETE CASCADE,
    image_url text NOT NULL,
    alt_text text,
    sort_order int DEFAULT 0,
    created_at timestamptz DEFAULT now()
);

-- Table: product_materials
CREATE TABLE IF NOT EXISTS product_materials (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id uuid REFERENCES products(id) ON DELETE CASCADE,
    name text NOT NULL,
    description text,
    image_url text,
    sort_order int DEFAULT 0
);

-- Table: product_finishes
CREATE TABLE IF NOT EXISTS product_finishes (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id uuid REFERENCES products(id) ON DELETE CASCADE,
    name text NOT NULL,
    description text,
    image_url text,
    sort_order int DEFAULT 0
);

-- Table: product_faqs
CREATE TABLE IF NOT EXISTS product_faqs (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id uuid REFERENCES products(id) ON DELETE CASCADE,
    question text NOT NULL,
    answer text NOT NULL,
    sort_order int DEFAULT 0
);

-- Table: industries
CREATE TABLE IF NOT EXISTS industries (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    slug text UNIQUE NOT NULL,
    short_description text,
    description text,
    hero_image_url text,
    icon_url text,
    meta_title text,
    meta_description text,
    is_featured boolean DEFAULT false,
    is_active boolean DEFAULT true,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Table: industry_products
CREATE TABLE IF NOT EXISTS industry_products (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    industry_id uuid REFERENCES industries(id) ON DELETE CASCADE,
    product_id uuid REFERENCES products(id) ON DELETE CASCADE,
    sort_order int DEFAULT 0,
    UNIQUE(industry_id, product_id)
);

-- Table: blog_categories
CREATE TABLE IF NOT EXISTS blog_categories (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    slug text UNIQUE NOT NULL,
    description text,
    created_at timestamptz DEFAULT now()
);

-- Table: blogs
CREATE TABLE IF NOT EXISTS blogs (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id uuid REFERENCES blog_categories(id) ON DELETE SET NULL,
    title text NOT NULL,
    slug text UNIQUE NOT NULL,
    excerpt text,
    content text,
    featured_image_url text,
    author_name text,
    published_at timestamptz,
    meta_title text,
    meta_description text,
    is_published boolean DEFAULT false,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Table: testimonials
CREATE TABLE IF NOT EXISTS testimonials (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    customer_name text NOT NULL,
    company_name text,
    quote text NOT NULL,
    rating int,
    image_url text,
    is_active boolean DEFAULT true,
    created_at timestamptz DEFAULT now()
);

-- Table: quote_requests
CREATE TABLE IF NOT EXISTS quote_requests (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name text NOT NULL,
    email text NOT NULL,
    phone text,
    company_name text,
    product_id uuid REFERENCES products(id) ON DELETE SET NULL,
    industry_id uuid REFERENCES industries(id) ON DELETE SET NULL,
    product_name text,
    quantity int,
    size text,
    material text,
    printing text,
    finishing text,
    message text,
    artwork_url text,
    status text DEFAULT 'new',
    created_at timestamptz DEFAULT now()
);

-- Table: sample_kit_requests
CREATE TABLE IF NOT EXISTS sample_kit_requests (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name text NOT NULL,
    email text NOT NULL,
    phone text,
    company_name text,
    address text,
    city text,
    state text,
    country text,
    postal_code text,
    message text,
    status text DEFAULT 'new',
    created_at timestamptz DEFAULT now()
);

-- Table: newsletter_subscribers
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email text UNIQUE NOT NULL,
    source text,
    created_at timestamptz DEFAULT now()
);

-- Table: site_settings
CREATE TABLE IF NOT EXISTS site_settings (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    key text UNIQUE NOT NULL,
    value jsonb,
    updated_at timestamptz DEFAULT now()
);

-- Table: navigation_items
CREATE TABLE IF NOT EXISTS navigation_items (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    label text NOT NULL,
    href text,
    parent_id uuid REFERENCES navigation_items(id) ON DELETE CASCADE,
    sort_order int DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamptz DEFAULT now()
);

/* Storage Buckets (to be created via Supabase UI or CLI): */
-- product-images
-- industry-images
-- blog-images
-- testimonial-images
-- artwork-uploads
-- site-assets
