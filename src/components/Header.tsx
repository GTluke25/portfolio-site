import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-sm uppercase tracking-wide text-text-high transition-transform active:scale-95"
        >
          Luke Nitzschke
        </Link>

        <nav className="flex items-center gap-4 sm:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-low transition-colors hover:text-text-high"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-text-high transition-transform active:scale-95"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
