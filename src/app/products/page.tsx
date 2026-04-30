import { getProducts } from '@/lib/queries/products';
import Breadcrumbs from '@/components/Breadcrumbs';
import NewsletterCTA from '@/components/NewsletterCTA';
import ProductsFilterClient from '@/components/ProductsFilterClient';

// Revalidate the page every 60 seconds so new products show up automatically
export const revalidate = 60;

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-brand-navy via-brand-primary to-brand-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Products' },
            ]}
          />
          <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
            All Packaging Products
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Browse our complete catalog of custom packaging solutions. Filter by
            category or search by name to find exactly what you need.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {products.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p>No products found in the database. Please add some via Supabase!</p>
          </div>
        ) : (
          <ProductsFilterClient products={products} />
        )}

        <div className="mt-16">
          <NewsletterCTA variant="conversion" source="products-listing" />
        </div>
      </div>
    </>
  );
}
