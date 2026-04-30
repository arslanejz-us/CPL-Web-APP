import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { getIndustries } from "@/lib/queries/industries";

type LayoutProps = {
  children: ReactNode;
};
/**
 * Wraps page content with the global Header and Footer.
 * Used from `src/app/layout.tsx` (App Router equivalent of wrapping in `_app.tsx`).
 */
export default async function Layout({ children }: LayoutProps) {
  // Fetch industries to pass to the Mega Menu in the Header
  const industries = await getIndustries().catch(() => []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header industries={industries} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
