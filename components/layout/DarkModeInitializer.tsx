'use client';

import { useEffect } from 'react';

export default function DarkModeInitializer() {
  useEffect(() => {
    // Always force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return null;
}
