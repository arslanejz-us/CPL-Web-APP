import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | CPL Web",
  description: "Learn more about CPL Web.",
};

export default function AboutUsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        About Us
      </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        We build modern web experiences with Next.js. This page is rendered
        inside the global layout, so the header and footer appear automatically
        on every route—including this one.
      </p>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Our focus is clear structure, reusable components, and a consistent
        experience across Home, About Us, and Contact Us.
      </p>
    </div>
  );
}
