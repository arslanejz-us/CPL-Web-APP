import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};
/**
 * Wraps page content with the global Header and Footer.
 * Used from `src/app/layout.tsx` (App Router equivalent of wrapping in `_app.tsx`).
 */
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
