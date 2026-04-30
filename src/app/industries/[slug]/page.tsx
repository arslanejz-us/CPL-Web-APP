import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getIndustryBySlug } from '@/lib/queries/industries';
import Breadcrumbs from '@/components/Breadcrumbs';
import styles from './page.module.css';

export const revalidate = 60;

export default async function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const industry = await getIndustryBySlug(params.slug);

  if (!industry) {
    notFound();
  }

  // Extract products from the join table
  const recommendedProducts = industry.industry_products?.map((ip: any) => ip.products) || [];

  return (
    <div className={styles.container}>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: industry.name },
        ]}
      />

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{industry.name} Packaging</h1>
          <p className={styles.description}>{industry.description || industry.short_description}</p>
        </div>
        <div className={styles.heroImageWrapper}>
           <Image
              src={industry.hero_image_url || '/images/hero-bg.png'}
              alt={industry.name}
              fill
              className={styles.heroImage}
              priority
            />
        </div>
      </div>

      {/* Recommended Products */}
      <section className={styles.productsSection}>
        <h2 className={styles.sectionTitle}>Recommended for {industry.name}</h2>
        {recommendedProducts.length === 0 ? (
          <p className={styles.emptyState}>No specific products linked to this industry yet.</p>
        ) : (
          <div className={styles.grid}>
            {recommendedProducts.map((product: any) => (
              <Link href={`/products/${product.slug}`} key={product.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={product.hero_image_url || '/images/hero-bg.png'}
                    alt={product.name}
                    fill
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <span className={styles.viewLink}>View Details</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
