-- Dummy Data Seed Script for Packaging Website

-- Insert Categories
INSERT INTO product_categories (id, name, slug, description, sort_order)
VALUES 
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Boxes', 'boxes', 'All types of custom boxes', 1),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a22', 'Pouches', 'pouches', 'Flexible packaging pouches', 2);

-- Insert Products
INSERT INTO products (id, category_id, name, slug, short_description, description, starting_price, moq, lead_time, is_featured, is_active)
VALUES 
('b0eebc99-9c0b-4ef8-bb6d-6bb9bd380b11', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Mailer Box', 'mailer-box', 'Eco-friendly corrugated mailer boxes for e-commerce.', 'Our custom mailer boxes are designed to provide the ultimate unboxing experience while ensuring maximum protection during transit. Made from durable, eco-friendly corrugated cardboard.', 1.50, 100, '10-15 days', true, true),
('b0eebc99-9c0b-4ef8-bb6d-6bb9bd380b22', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Tuck Box', 'tuck-box', 'Classic tuck boxes for retail products.', 'Perfect for cosmetics, supplements, and small retail goods. Lightweight and fully customizable with vibrant printing.', 0.80, 250, '8-12 days', true, true),
('b0eebc99-9c0b-4ef8-bb6d-6bb9bd380b33', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a22', 'Stand Up Pouch', 'stand-up-pouch', 'Resealable mylar stand up pouches.', 'Ideal for coffee, snacks, and powders. Features a tear notch and a resealable zipper for prolonged freshness.', 0.45, 500, '12-18 days', true, true);

-- Insert Industries
INSERT INTO industries (id, name, slug, short_description, description, is_featured, is_active)
VALUES 
('c0eebc99-9c0b-4ef8-bb6d-6bb9bd380c11', 'E-commerce', 'e-commerce', 'Durable shipping solutions.', 'Packaging that survives the mail system and wows your customers upon unboxing.', true, true),
('c0eebc99-9c0b-4ef8-bb6d-6bb9bd380c22', 'Food & Beverage', 'food-beverage', 'Food-safe barrier packaging.', 'FDA-compliant packaging to keep your food products fresh and looking delicious.', true, true);

-- Link Products to Industries
INSERT INTO industry_products (industry_id, product_id)
VALUES 
('c0eebc99-9c0b-4ef8-bb6d-6bb9bd380c11', 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380b11'), -- E-commerce -> Mailer Box
('c0eebc99-9c0b-4ef8-bb6d-6bb9bd380c22', 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380b33'); -- Food -> Stand Up Pouch

-- Insert Blog Category
INSERT INTO blog_categories (id, name, slug)
VALUES 
('d0eebc99-9c0b-4ef8-bb6d-6bb9bd380d11', 'Design Tips', 'design-tips');

-- Insert Blogs
INSERT INTO blogs (id, category_id, title, slug, excerpt, content, author_name, is_published, published_at)
VALUES 
('e0eebc99-9c0b-4ef8-bb6d-6bb9bd380e11', 'd0eebc99-9c0b-4ef8-bb6d-6bb9bd380d11', 'How to Design an Unboxing Experience', 'how-to-design-unboxing-experience', 'Learn the secrets to creating memorable unboxing moments.', '<p>The unboxing experience is the new storefront. When customers receive your package, you have a 10-second window to make a lasting impression...</p>', 'Sarah Jenkins', true, now());
