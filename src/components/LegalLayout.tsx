import Image from "next/image";
import Link from "next/link";

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-cream/80 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Arhbit" width={32} height={32} className="rounded-xl" />
            <span className="text-lg font-bold text-text">Arhbit</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-text-secondary hover:text-lavender transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-text tracking-tight">{title}</h1>
            <p className="mt-2 text-sm text-text-light">Last updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-border py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-light">
            &copy; {new Date().getFullYear()} Arhbit. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-text-secondary hover:text-lavender transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-text-secondary hover:text-lavender transition-colors">
              Terms of Service
            </Link>
            <a href="mailto:support@arhbit.com" className="text-xs text-text-secondary hover:text-lavender transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
