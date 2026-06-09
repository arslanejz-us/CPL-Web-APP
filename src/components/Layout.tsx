import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { getIndustries } from "@/lib/queries/industries";
import { getProducts } from "@/lib/queries/products";

type LayoutProps = {
  children: ReactNode;
};
/**
 * Wraps page content with the global Header and Footer.
 * Used from `src/app/layout.tsx` (App Router equivalent of wrapping in `_app.tsx`).
 */
export default async function Layout({ children }: LayoutProps) {
  // Fetch industries and featured products to pass to the Header
  const [industries, products] = await Promise.all([
    getIndustries().catch(() => []),
    getProducts().catch(() => []),
  ]);
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
      <Header industries={industries} featuredProducts={featuredProducts} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
