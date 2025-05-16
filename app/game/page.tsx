import React from 'react';
import { Header } from '@/components/Header';
import DarkModeInitializer from '@/components/DarkModeInitializer';

export default function Game() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="text-center p-8 bg-white rounded-2xl shadow-xl">
        <h1 className="text-3xl text-black font-bold mb-4">Site en cours de construction</h1>
        <p className="text-gray-600">Reviens bientôt pour découvrir nos nouveautés !</p>
      </div>
    </main>
  );
}
