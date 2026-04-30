import { getProducts } from '@/lib/queries/products';
import Breadcrumbs from '@/components/Breadcrumbs';
import NewsletterCTA from '@/components/NewsletterCTA';
import ProductsFilterClient from '@/components/ProductsFilterClient';
import styles from './page.module.css';

// Revalidate the page every 60 seconds so new products show up automatically
export const revalidate = 60;

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products' },
        ]}
      />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>All Packaging Products</h1>
          <p className={styles.subtitle}>
            Browse our complete catalog of custom packaging solutions. Filter by
            category or search by name to find exactly what you need.
          </p>
        </header>

        {products.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No products found in the database. Please add some via Supabase!</p>
          </div>
        ) : (
          <ProductsFilterClient products={products} />
        )}

        <NewsletterCTA variant="conversion" source="products-listing" />
      </div>
    </>
  );
}
