import DarkModeInitializer from '@/components/DarkModeInitializer';
import Image from 'next/image';

export default function Home() {
  const basePath = process.env.NODE_ENV === 'production' ? '/projet-boulangerie' : '';
  
  return (
    <main className="min-h-screen flex flex-col">
      <DarkModeInitializer />
      <nav className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-medium font-medieval text-boulange-gold">Projet Boulangerie</h1>
        <ul className="flex space-x-4">
          <li><a href="#presentation" className="hover:underline">Présentation</a></li>
          <li><a href="#equipe" className="hover:underline">Équipe</a></li>
        </ul>
      </nav>

      <section id="presentation" className="flex-grow flex items-center justify-center p-12">
        <div className="max-w-xl text-center">
          <h2 className="text-4xl font-medieval mb-4">La Guilde de la Boulangerie</h2>
          <p className="mb-6">
            Nous sommes les Gardiens de la Guilde de la Boulangerie, unis dans notre quête divine.
            Notre mission sacrée est d&apos;élever l&apos;art de la viennoiserie à des sommets inégalés,
            tout en défiant et surpassant toute concurrence.
          </p>
          <p className="mb-6">
            Notre objectif ultime est d&apos;anéantir les projets rivaux de Guizmo et Dondada,
            démontrant ainsi notre suprématie via l&apos;art de la boulangerie.
            Nous lèverons la game sans levure, enfournerons nos créations avec une précision divine,
            servant croissants et épées dans un même fourneau.
          </p>
        </div>
      </section>

      <section id="equipe" className="py-12 px-4">
        <h2 className="text-3xl font-medieval text-center mb-8">Notre Équipe Royale</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Roi Divin */}
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-boulange-flour/10 rounded-lg">
            <div className="w-48 h-48 relative">
              <Image
                src={`${basePath}/king.png`}
                alt="Roi Divin"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-medieval text-boulange-gold mb-2">Roi Divin</h3>
              <p className="mb-4">
                Guide suprême du Projet Boulangerie, orchestrant la fusion parfaite entre tradition et innovation.
                Sa vision royale guide notre quête vers l&apos;excellence boulangère.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Visionnaire du projet</li>
                <li>Maître stratège</li>
                <li>Protecteur des traditions</li>
              </ul>
            </div>
          </div>

          {/* Apprenti Chevalier */}
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-boulange-flour/10 rounded-lg">
            <div className="w-48 h-48 relative">
              <Image
                src={`${basePath}/apprenti.jpeg`}
                alt="Apprenti Chevalier"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-medieval text-boulange-gold mb-2">Apprenti Chevalier</h3>
              <p className="mb-4">
                Gardien des secrets de la pâte feuilletée et maître dans l&apos;art de la viennoiserie.
                Mon rôle est d&apos;assurer que chaque croissant soit une œuvre d&apos;art comestible.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Maître de la pâte feuilletée</li>
                <li>Expert en viennoiseries</li>
                <li>Gardiens des traditions boulangères</li>
              </ul>
            </div>
          </div>

          {/* Apprenti Pâtissier */}
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-boulange-flour/10 rounded-lg">
            <div className="w-48 h-48 relative">
              <Image
                src={`${basePath}/patiss.png`}
                alt="Apprenti Pâtissier"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-medieval text-boulange-gold mb-2">Apprenti Pâtissier</h3>
              <p className="mb-4">
                Artisan passionné de la pâtisserie fine, je me consacre à l&apos;art délicat des desserts.
                Mon expertise s&apos;étend des entremets classiques aux créations innovantes, toujours
                guidé par la recherche de l&apos;excellence gustative.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Maître des entremets</li>
                <li>Expert en pâtisserie fine</li>
                <li>Créateur de desserts uniques</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
