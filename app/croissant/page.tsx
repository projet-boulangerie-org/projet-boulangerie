import React from 'react';
import { Header } from '@/components/Header';
import DarkModeInitializer from '@/components/DarkModeInitializer';
import CopyMessage from '@/components/SlackMessage';


export const metadata = {
  title: '🥐 Croissanté ! 🥐',
};

export default function CroissantPage() {
  return (
    <>
      <DarkModeInitializer />
      <div className="top-0 z-50 bg-[var(--background)] pl-6 pt-6 mt-1 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <Header title="Projet Boulangerie" />
      </div>
      <main className="mt-10 w-full h-full bg-black flex flex-col lg:flex-row items-start lg:items-center justify-start px-0">
        <CopyMessage />
        <div className="flex-1 w-full text-left px-8 lg:px-16">
          {/* Ligne de viennoiseries */}
          <div className="text-[6rem] lg:text-[8rem] text-boulange-gold space-x-2">
            🥐 🥖 🥯 🥞
          </div>

          {/* Titre */}
          <h1 className="mt-8 text-6xl md:text-6xl lg:text-5xl font-medieval text-boulange-gold">
            Vous avez été croissanté !
          </h1>

          {/* Texte principal */}
          <p className="mt-10 mb-10 text-lg leading-relaxed text-white">
            La Guilde de la Boulangerie a décidé de vous{' '}
            <span className="font-semibold text-boulange-gold">croissanter</span>, car vous avez oublié de
            verrouiller votre PC.
          </p>

          {/* Progress */}
          <p className="mt-10 text-xl font-semibold text-boulange-gold">
            200 % complété
          </p>

          {/* Bas de page espacé */}
          <div className="mt-10 space-y-6 text-sm pb-8 overflow-hidden">
            <p className="text-white">
              Pour (re)découvrir le projet,&nbsp;
              <a href="https://projet-boulangerie.github.io/projet-boulangerie/" className="underline text-boulange-gold font-semibold">cliquez ici</a>
            </p>
            <p className="text-white">
              N&apos;oubliez pas : la Guilde attend une viennoiserie demain sur votre plan de travail.
            </p>
            <p className="text-boulange-gold">Error code : 🦐 CROISSANTAGE 🦐</p>
          </div>
        </div>

        {/* Croissant décoratif à droite, centré verticalement */}
        <div className="flex-none ml-auto lg:mr-16 mt-12 lg:mt-0 text-[8rem] lg:text-[10rem]">
          🥐
        </div>
      </main>
    </>
  );
}
