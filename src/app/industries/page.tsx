import Link from 'next/link';
import Image from 'next/image';
import { getIndustries } from '@/lib/queries/industries';
import Breadcrumbs from '@/components/Breadcrumbs';
import styles from './page.module.css';

export const revalidate = 60;

export default async function IndustriesPage() {
  const industries = await getIndustries();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Industries' },
        ]}
      />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Packaging by Industry</h1>
          <p className={styles.subtitle}>Discover tailored packaging solutions designed specifically for your sector.</p>
        </header>

      {industries.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No industries found in the database. Please add some via Supabase!</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {industries.map((industry: any) => (
            <Link href={`/industries/${industry.slug}`} key={industry.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={industry.hero_image_url || '/images/hero-bg.png'}
                  alt={industry.name}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.content}>
                <h2 className={styles.industryName}>{industry.name}</h2>
                <p className={styles.description}>{industry.short_description || 'Explore packaging for this industry.'}</p>
                <span className={styles.viewLink}>View Solutions →</span>
              </div>
            </Link>
          ))}
        </div>
      )}
      </div>
    </>
  );
}
