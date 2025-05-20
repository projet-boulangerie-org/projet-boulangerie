import { basePath } from '@/lib/constants';

// components/Header.tsx
export function Header({ title }: { title: string }) {
  return (
    <div className="top-0 z-50 bg-[var(--background)] pl-6 pt-6 mt-1 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <a href={`${basePath}/`}>
        <h1 className="text-2xl font-medium font-medieval text-boulange-gold">
          {title}
        </h1>
      </a>
    </div>
  );
}
