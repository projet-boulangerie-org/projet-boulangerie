import React from 'react';
import CopyMessage from '@/components/SlackMessage';


export const metadata = {
  title: '🥐 Croissanté ! 🥐',
};

export default function CroissantPage() {
  return (
    <>
      <main className="relative mt-10 w-full flex-1 bg-black flex flex-col lg:flex-row items-start lg:items-center justify-start px-0">
        <CopyMessage />
        <div className="flex-1 w-full text-left px-8 lg:px-16">
          {/* Ligne de viennoiseries */}
          <div className="text-[6rem] text-boulange-gold space-x-2">
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
        <div className="flex-none ml-auto lg:mr-40 mt-12 lg:mt-24 text-[8rem] lg:text-[7rem]">
          🥐
        </div>
      </main>
    </>
  );
}
