'use client';

import { useEffect } from 'react';

export default function DarkModeInitializer() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return null;
}
