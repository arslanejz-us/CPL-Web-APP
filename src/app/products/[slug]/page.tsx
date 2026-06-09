import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/queries/products';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductDetailClient from '@/components/ProductDetailClient';
import ProductImageGallery from '@/components/ProductImageGallery';
import ProductQuoteForm from '@/components/ProductQuoteForm';
import BrandLogoSlider from '@/components/BrandLogoSlider';
import ProductMaterials from '@/components/ProductMaterials';
import NewsletterCTA from '@/components/NewsletterCTA';

export const revalidate = 60;

type ProductRecord = {
  id?: string;
  slug?: string;
  name: string;
  description?: string | null;
  short_description?: string | null;
  hero_image_url?: string | null;
  moq?: string | number | null;
  lead_time?: string | null;
  material_summary?: string | null;
  sizes?: string | null;
  printing_options?: string | null;
  is_eco?: boolean | null;
  product_categories?: { name: string; slug: string } | null;
  product_materials?: Array<{ name?: string; label?: string }> | null;
  product_finishes?: Array<{ name?: string; label?: string }> | null;
  features?: string[] | null;
};

// Mock products fallback for featured products
const MOCK_PRODUCTS: Record<string, ProductRecord> = {
  'premium-rigid-boxes': {
    id: '1',
    slug: 'premium-rigid-boxes',
    name: 'Premium Rigid Boxes',
    short_description: 'Luxury rigid boxes perfect for premium brand packaging and unboxing experiences',
    description: 'Our premium rigid boxes offer the ultimate luxury packaging experience. Perfect for high-end products, jewelry, cosmetics, and luxury items.',
    hero_image_url: '/images/Rigid-Boxes.webp',
    moq: 500,
    lead_time: '14 days',
    material_summary: 'Premium Cardboard',
    sizes: 'Custom sizes available',
    printing_options: 'Full color digital & offset',
    is_eco: true,
    product_categories: { name: 'Rigid Boxes', slug: 'rigid-boxes' },
    features: ['Custom sizes', 'Full color printing', 'Eco-friendly materials', 'Premium finish', 'Fast turnaround'],
  },
  'custom-mailer-boxes': {
    id: '2',
    slug: 'custom-mailer-boxes',
    name: 'Custom Mailer Boxes',
    short_description: 'Durable shipping boxes designed to protect products during transit',
    description: 'Robust and reliable mailer boxes that protect your products during shipping while maintaining brand visibility.',
    hero_image_url: '/images/Mailer-box.webp',
    moq: 1000,
    lead_time: '7-10 days',
    material_summary: 'Corrugated Cardboard',
    sizes: 'Multiple standard sizes',
    printing_options: 'Digital printing available',
    is_eco: true,
    product_categories: { name: 'Mailer Boxes', slug: 'mailer-boxes' },
    features: ['Corrugated strength', 'Custom branding', 'Cost-effective', 'Multiple sizes'],
  },
  'eco-friendly-boxes': {
    id: '3',
    slug: 'eco-friendly-boxes',
    name: 'Eco-Friendly Boxes',
    short_description: 'Sustainable packaging solutions for environmentally conscious brands',
    description: 'Made from 100% recyclable materials, our eco-friendly boxes help you reduce your environmental footprint without compromising quality.',
    hero_image_url: '/images/eco-friendly-boxes.webp',
    moq: 500,
    lead_time: '10-12 days',
    material_summary: 'Recycled Cardboard',
    sizes: 'Custom sizes available',
    printing_options: 'Eco-friendly ink printing',
    is_eco: true,
    product_categories: { name: 'Eco Boxes', slug: 'eco-boxes' },
    features: ['100% recyclable', 'Biodegradable', 'Custom printing', 'Sustainable sourcing'],
  },
  'branded-labels': {
    id: '4',
    slug: 'branded-labels',
    name: 'Branded Labels',
    short_description: 'High-quality labels for branding, compliance, and product identification',
    description: 'Custom branded labels that make your products stand out on shelves. Perfect for food, beverages, cosmetics, and more.',
    hero_image_url: '/images/Branded-label.webp',
    moq: 1000,
    lead_time: '5-7 days',
    material_summary: 'Premium Label Stock',
    sizes: 'Any custom size',
    printing_options: 'Full color printing',
    is_eco: false,
    product_categories: { name: 'Labels', slug: 'labels' },
    features: ['Various sizes', 'Multiple materials', 'Fast turnaround', 'High quality'],
  },
  'shipping-containers': {
    id: '5',
    slug: 'shipping-containers',
    name: 'Shipping Containers',
    short_description: 'Industrial-grade containers for safe and secure product shipment',
    description: 'Heavy-duty shipping containers designed to protect your valuable products throughout the supply chain.',
    hero_image_url: '/images/shipping-containers.webp',
    moq: 500,
    lead_time: '10-14 days',
    material_summary: 'Industrial Corrugated',
    sizes: 'Custom dimensions',
    printing_options: 'Screen printing available',
    is_eco: true,
    product_categories: { name: 'Containers', slug: 'containers' },
    features: ['Heavy-duty', 'Stackable design', 'Cost-effective', 'Durable construction'],
  },
  'window-boxes': {
    id: '6',
    slug: 'window-boxes',
    name: 'Window Boxes',
    short_description: 'Display boxes with product visibility for retail shelf appeal',
    description: 'Showcase your products with our elegant window boxes. Perfect for retail environments where product visibility is key.',
    hero_image_url: '/images/window-boxes.webp',
    moq: 500,
    lead_time: '12-14 days',
    material_summary: 'Cardboard with Clear PET Window',
    sizes: 'Custom sizes available',
    printing_options: 'Full color printing',
    is_eco: false,
    product_categories: { name: 'Window Boxes', slug: 'window-boxes' },
    features: ['Clear window', 'Brand visibility', 'Custom shapes', 'Premium finish'],
  },
  'kraft-jewelry-boxes': {
    id: '7',
    slug: 'kraft-jewelry-boxes',
    name: 'Kraft Jewelry Boxes',
    short_description: 'Natural kraft paper boxes perfect for jewelry and small items',
    description: 'Elegant kraft boxes ideal for jewelry, small gifts, and premium small items. The natural texture adds a touch of class.',
    hero_image_url: '/images/Kraft-Jewelry-Boxes.webp',
    moq: 500,
    lead_time: '7-10 days',
    material_summary: 'Kraft Paper',
    sizes: 'Standard jewelry sizes',
    printing_options: 'Custom printing available',
    is_eco: true,
    product_categories: { name: 'Kraft Boxes', slug: 'kraft-boxes' },
    features: ['Biodegradable', 'Natural texture', 'Premium finish', 'Eco-friendly'],
  },
  'cosmetics-boxes': {
    id: '8',
    slug: 'cosmetics-boxes',
    name: 'Cosmetics Boxes',
    short_description: 'Specialized packaging for beauty, skincare, and cosmetic products',
    description: 'Beautiful packaging designed specifically for cosmetics and beauty products. Protect your products while showcasing their elegance.',
    hero_image_url: '/images/Cosmetics-Boxes.webp',
    moq: 500,
    lead_time: '10-12 days',
    material_summary: 'Premium Cardboard',
    sizes: 'Custom sizes available',
    printing_options: 'Full color printing with special finishes',
    is_eco: true,
    product_categories: { name: 'Cosmetics', slug: 'cosmetics' },
    features: ['UV protection', 'Tamper evident', 'Premium materials', 'Luxury finish'],
  },
  'corrugated-mailer-boxes': {
    id: '9',
    slug: 'corrugated-mailer-boxes',
    name: 'Corrugated Mailer Boxes',
    short_description: 'Versatile corrugated solutions with superior protection for shipping',
    description: 'Our corrugated mailer boxes combine strength with affordability, providing excellent protection for your products in transit.',
    hero_image_url: '/images/Carrogated-Mailer-Boxes.webp',
    moq: 1000,
    lead_time: '7-10 days',
    material_summary: 'Corrugated Cardboard',
    sizes: 'Multiple sizes available',
    printing_options: 'Flexo and digital printing',
    is_eco: true,
    product_categories: { name: 'Corrugated', slug: 'corrugated' },
    features: ['Flexible sizing', 'Reusable', 'Cost-effective', 'Superior protection'],
  },
};

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Try to get from database first
  let product: ProductRecord | null = null;

  try {
    product = (await getProductBySlug(slug)) as ProductRecord | null;
  } catch (error) {
    // If database query fails, product stays null and we'll use mock
    console.log('Database query failed, using mock product');
  }

  // Fallback to mock products if not in database
  if (!product && MOCK_PRODUCTS[slug]) {
    product = MOCK_PRODUCTS[slug];
  }

  if (!product) {
    notFound();
  }

  const specs = [
    product.sizes && { label: 'Available Sizes', value: product.sizes },
    typeof product.is_eco === 'boolean' && {
      label: 'Eco-Friendly',
      value: product.is_eco ? '✓ Yes' : 'Standard',
    },
    product.printing_options && {
      label: 'Printing Options',
      value: product.printing_options,
    },
  ].filter(Boolean) as Array<{ label: string; value: string }>;

  const features = (product.features ?? []).map((f) => ({ label: f }));

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-2">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      {/* Hero Section - Full Bleed Background */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Product Image Gallery */}
            <div>
              <ProductImageGallery mainImage={product.hero_image_url || '/images/hero-bg.png'} productName={product.name} />
            </div>

            {/* Right: Product Info + Quote Form */}
            <div className="flex flex-col justify-start">
              {/* Category Badge - Left border accent style */}
              {product.product_categories && (
                <span className="inline-block border-l-2 border-brand-primary pl-2 text-xs font-semibold text-brand-primary uppercase tracking-wider w-fit mb-2">
                  {product.product_categories.name}
                </span>
              )}

              {/* Title */}
              <h1 className="text-2xl lg:text-[1.75rem] font-bold text-brand-charcoal mb-1 leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-amber-400">★</span>
                  ))}
                </div>
                <span className="text-xs text-slate-600">4.9 · 127 reviews</span>
              </div>

              {/* Description */}
              {(product.short_description || product.description) && (
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                  {product.short_description || product.description}
                </p>
              )}

              {/* Quote Form - Compact, integrated in same column */}
              <ProductQuoteForm productName={product.name} productId={product.id} />
            </div>
          </div>
        </div>
      </section>

      {/* Specs & Trust Pills Section */}
      <section className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Specification Chips */}
            {specs.length > 0 && (
              <div>
                <h2 className="text-lg font-bold text-brand-charcoal mb-6">Product Specifications</h2>
                <div className="space-y-3">
                  {specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <span className="text-sm font-medium text-slate-700">{spec.label}</span>
                      <span className="text-sm font-semibold text-brand-primary">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Right: Trust Pills */}
            <div>
              <h2 className="text-lg font-bold text-brand-charcoal mb-6">Why Customers Choose Us</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="text-lg text-brand-primary font-bold">✓</span>
                  <span className="text-sm text-slate-700">Free 3D Design & Mockup</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="text-lg text-brand-primary font-bold">✓</span>
                  <span className="text-sm text-slate-700">7-Day Fast Shipping</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="text-lg text-brand-primary font-bold">✓</span>
                  <span className="text-sm text-slate-700">Eco-Friendly Materials</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logo Slider Section */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1">Trusted Partners</p>
            <h2 className="text-2xl font-bold text-brand-charcoal">Trusted by Leading Brands</h2>
          </div>
          <BrandLogoSlider />
        </div>
      </section>

      {/* Tabs Section - Light Teal Tint Background */}
      <section className="bg-[#eef5f8] py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ProductDetailClient
            productName={product.name}
            productId={product.id}
            longDescription={product.description ?? undefined}
            shortDescription={product.short_description ?? undefined}
            specs={specs}
            features={features}
          />
        </div>
      </section>

      {/* Materials & Finishing Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ProductMaterials
            materials={product.product_materials}
            finishes={product.product_finishes}
          />
        </div>
      </section>

      {/* Newsletter CTA */}
      <NewsletterCTA variant="conversion" source={`product:${product.slug}`} />
    </>
  );
}
