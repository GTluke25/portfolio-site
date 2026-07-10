import { education, certifications } from "@/data/resume";
import CredentialsGrid from "@/components/CredentialsGrid";

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <h1 className="font-display text-3xl uppercase text-text-high sm:text-5xl">
        About
      </h1>
      <p className="mt-4 max-w-xl text-text-low">
        I&apos;m Luke — a web developer working toward a digital marketing
        degree, with hands-on certifications in getting a business found
        online. Here&apos;s the credentialed proof, and what it means for the
        site I&apos;ll build you.
      </p>

      <h2 className="mt-16 font-display text-xl uppercase text-text-high sm:text-2xl">
        Credentials
      </h2>
      <div className="mt-6">
        <CredentialsGrid education={education} certifications={certifications} />
      </div>
    </section>
  );
}
