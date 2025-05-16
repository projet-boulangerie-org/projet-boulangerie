'use client';
import { useState } from 'react';
import { basePath } from '@/app/page';
import Image from 'next/image';
import './SlackMessage.css';


export default function CopyMessage() {
  const [copied, setCopied] = useState(false);
  const [animateBorder, setAnimateBorder] = useState(false);
  const message = "J'offre les croissants demain matin ! 🥐\n\nPS : j'ai été croissanté par la Guilde de la Boulangerie";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setAnimateBorder(true);
      setCopied(true);
      setTimeout(() => setAnimateBorder(false), 3000);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Erreur de copie clipboard :', err);
    }
  };

  return (
    <div className="absolute inline right-40 top-40 transform -translate-y-1/2 flex flex-col items-center">
      <button onClick={handleCopy} className={`relative overflow-hidden ${copied ? 'bg-green-600' : 'bg-red-600 hover:bg-red-700'} text-white min-w-[180px] font-bold py-3 px-5 rounded shadow flex items-center justify-center gap-3 transition-colors duration-300`}>
        <Image src={`${basePath}/slack.png`} alt="copier" className="object-cover rounded-full" width={24} height={24} />
        {copied ? 'Copié !' : 'Copier le message Slack'}
        {animateBorder && (
          <>
            <span className="border-anim-top"></span>
            <span className="border-anim-right"></span>
            <span className="border-anim-bottom"></span>
            <span className="border-anim-left"></span>
          </>
        )}
      </button>
    </div>
  );
}
