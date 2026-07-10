export default function CredentialCard({
  title,
  issuer,
  date,
  relevance,
  inProgress = false,
  verifyUrl,
  onViewCertificate,
}: {
  title: string;
  issuer: string;
  date: string;
  relevance: string;
  inProgress?: boolean;
  verifyUrl?: string;
  onViewCertificate?: () => void;
}) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-lg bg-surface p-6">
      <div>
        <h3 className="font-display text-lg uppercase leading-snug text-text-high">
          {title}
        </h3>
        <p className="mt-1 text-sm text-text-low">
          {issuer} · {inProgress ? `In progress · Expected ${date}` : date}
        </p>
      </div>

      <p className="border-l-2 border-accent pl-3 text-sm text-text-high">
        {relevance}
      </p>

      {(onViewCertificate || verifyUrl) && (
        <div className="mt-auto flex flex-wrap gap-3 pt-2 text-sm">
          {onViewCertificate && (
            <button
              type="button"
              onClick={onViewCertificate}
              className="rounded-md border border-text-low/30 px-3 py-1.5 text-text-high transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent active:scale-95"
            >
              View certificate
            </button>
          )}
          {verifyUrl && (
            <a
              href={verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-text-low/30 px-3 py-1.5 text-text-high transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent active:scale-95"
            >
              Verify online ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}
