import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProductBySlug } from '@/lib/queries/products';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductDetailClient from '@/components/ProductDetailClient';
import NewsletterCTA from '@/components/NewsletterCTA';
import styles from './page.module.css';

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

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = (await getProductBySlug(slug)) as ProductRecord | null;

  if (!product) {
    notFound();
  }

  const specs = [
    product.moq && { label: 'Minimum Order', value: `${product.moq} units` },
    product.lead_time && { label: 'Lead Time', value: product.lead_time },
    product.material_summary && { label: 'Material', value: product.material_summary },
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
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: product.name },
        ]}
      />

      <div className={styles.container}>
        {/* Hero: image left, summary right */}
        <div className={styles.heroGrid}>
          <div className={styles.imageGallery}>
            <div className={styles.mainImageWrapper}>
              <Image
                src={product.hero_image_url || '/images/hero-bg.png'}
                alt={product.name}
                fill
                className={styles.mainImage}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          <div className={styles.productInfo}>
            {product.product_categories && (
              <span className={styles.category}>
                {product.product_categories.name}
              </span>
            )}
            <h1 className={styles.title}>{product.name}</h1>
            {(product.short_description || product.description) && (
              <p className={styles.description}>
                {product.short_description || product.description}
              </p>
            )}
          </div>
        </div>

        {/* Tabs (left) + inline quote form (right) */}
        <ProductDetailClient
          productName={product.name}
          productId={product.id}
          longDescription={product.description ?? undefined}
          shortDescription={product.short_description ?? undefined}
          specs={specs}
          features={features}
        />

        <NewsletterCTA variant="conversion" source={`product:${product.slug}`} />
      </div>
    </>
  );
}
