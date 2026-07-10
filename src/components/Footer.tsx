export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 text-sm text-text-low sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Luke Nitzschke</p>
        <p>Websites built to win you work.</p>
      </div>
    </footer>
  );
}
