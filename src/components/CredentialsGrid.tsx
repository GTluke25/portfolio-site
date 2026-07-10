"use client";

import { useState } from "react";
import type { Certification, Education } from "@/data/resume";
import CredentialCard from "@/components/CredentialCard";
import CertificateLightbox from "@/components/CertificateLightbox";
import ScrollReveal from "@/components/ScrollReveal";

export default function CredentialsGrid({
  education,
  certifications,
}: {
  education: Education[];
  certifications: Certification[];
}) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null
  );

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((item, i) => (
          <ScrollReveal key={item.degree} delayMs={i * 80}>
            <CredentialCard
              title={`${item.degree} — ${item.field}`}
              issuer={item.school}
              date={item.endDate}
              relevance={item.relevance}
              inProgress={item.inProgress}
            />
          </ScrollReveal>
        ))}

        {certifications.map((cert, i) => (
          <ScrollReveal
            key={cert.name}
            delayMs={(education.length + i) * 80}
          >
            <CredentialCard
              title={cert.name}
              issuer={cert.issuer}
              date={cert.dateCompleted}
              relevance={cert.relevance}
              verifyUrl={cert.verifyUrl}
              onViewCertificate={
                cert.certificateImage
                  ? () =>
                      setLightbox({
                        src: cert.certificateImage!,
                        alt: `${cert.name} certificate from ${cert.issuer}`,
                      })
                  : undefined
              }
            />
          </ScrollReveal>
        ))}
      </div>

      {lightbox && (
        <CertificateLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
