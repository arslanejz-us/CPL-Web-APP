import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | CPL Web",
  description: "Get in touch with CPL Web.",
};

export default function ContactUsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Contact Us
      </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        This is a placeholder contact page. Replace this copy with your form,
        email, or office details.
      </p>
    </div>
  );
}
