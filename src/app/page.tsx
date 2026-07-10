import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-4 py-24 sm:px-6">
      <h1 className="hero-reveal font-display text-4xl uppercase leading-tight text-text-high sm:text-6xl">
        Websites built to <span className="text-accent">win you work</span>.
      </h1>
      <p className="hero-reveal [animation-delay:150ms] max-w-md text-base text-text-low sm:text-lg">
        Fast, custom-built sites for local businesses — no templates, no
        page-builders. Let&apos;s build you something great.
      </p>
      <Link
        href="/contact"
        className="hero-reveal [animation-delay:300ms] mt-2 rounded-md bg-accent px-6 py-3 font-display text-sm uppercase tracking-wide text-canvas transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-high active:scale-95"
      >
        Let&apos;s build something
      </Link>
    </section>
  );
}
