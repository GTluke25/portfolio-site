"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className={`rounded-sm px-1 py-3 font-display text-sm uppercase tracking-wide text-text-high transition-transform active:scale-95 ${focusRing}`}
        >
          Luke Nitzschke
        </Link>

        <nav className="flex items-center gap-4 sm:gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-sm px-1 py-3 text-sm transition active:scale-95 ${
                  isActive
                    ? "text-text-high"
                    : "text-text-low hover:text-text-high"
                } ${focusRing}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`rounded-full bg-accent px-4 py-3 text-sm font-medium text-canvas transition-transform active:scale-95 ${focusRing}`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
