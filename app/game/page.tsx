import React from 'react';
import { Header } from '@/components/Header';
import DarkModeInitializer from '@/components/DarkModeInitializer';

export default function Game() {
  return (
    <>
      <DarkModeInitializer />
      <div className="top-0 z-50 bg-[var(--background)] pl-6 pt-6 mt-1 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <Header title="Projet Boulangerie" />
      </div>
      <main className="flex items-center justify-center min-h-screen text-center">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl">
            <h1 className="text-3xl text-black font-bold mb-4">Site en cours de construction</h1>
            <p className="text-gray-600">Reviens bientôt pour découvrir nos nouveautés !</p>
        </div>
        </main>
    </>
  );
}
