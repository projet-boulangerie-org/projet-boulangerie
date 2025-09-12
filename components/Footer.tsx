export default function Footer() {
  return (
    <footer className="mt-3 mb-3 bg-[var(--background)] py-3">
      <div className="w-full grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-0">
        <span className="col-start-2 justify-self-center text-xs md:text-sm opacity-80">
          Copyright © 2025 Projet Boulangerie. Tous droits réservés.
        </span>
        <span className="animated-badge select-none col-start-3 justify-self-end mr-8">
          Powered by AI
        </span>
      </div>
    </footer>
  );
}

