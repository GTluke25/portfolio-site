"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function CertificateLightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        autoFocus
        className="absolute right-4 top-4 rounded-full bg-surface px-3 py-1 text-sm text-text-high transition active:scale-95"
        aria-label="Close"
      >
        Close ✕
      </button>
      <div
        className="relative max-h-[85vh] w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={900}
          className="h-auto max-h-[85vh] w-full rounded-lg object-contain"
        />
      </div>
    </div>
  );
}
