import { basePath } from '@app/page';

// components/Header.tsx
export function Header({ title }: { title: string }) {
  return (
    <a href={`${basePath}/`}>
      <h1 className="text-2xl font-medium font-medieval text-boulange-gold">
        {title}
      </h1>
    </a>
  );
}
