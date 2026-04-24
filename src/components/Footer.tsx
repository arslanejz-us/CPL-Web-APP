export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200/80 bg-[var(--background)] dark:border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          © {year} CPL Web. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
