"use client";

import React, { useState, useEffect } from 'react';
import DarkModeInitializer from '@/components/DarkModeInitializer';
import { Header } from '@/components/Header';
import './FourMaudit.css';

export default function LeFourMaudit() {
  const [isOpen, setIsOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [cooldown, setCooldown] = useState(false);
  const [animClass, setAnimClass] = useState('');

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const cycle = () => {
      setIsOpen(false);
      setAnimClass('animate-close');
      timeoutId = setTimeout(() => {
        setIsOpen(true);
        setAnimClass('animate-open');
        timeoutId = setTimeout(() => {
          setIsOpen(false);
          setAnimClass('animate-close');
          cycle();
        }, 500);
      }, 3000);
    };

    cycle();
    return () => clearTimeout(timeoutId);
  }, []);

  const handleClick = () => {
    if (cooldown) return;
    setCooldown(true);
    setTimeout(() => setCooldown(false), 500);

    if (isOpen) {
      setScore(prev => prev + 1);
      setMessage("Bien joué !");
    } else {
      setScore(prev => Math.max(0, prev - 1));
      setMessage("Aïe ! Le four était fermé !");
    }
    setTimeout(() => setMessage(''), 1000);
  };

  return (
    <>
      <DarkModeInitializer />
      <Header title="Projet Boulangerie" />
      <main className="min-h-screen flex flex-col items-center justify-start text-white text-center px-4 relative">
        
        <section id="presentation" className="flex flex-col items-center justify-center px-12 py-12">
          <h2 className="text-4xl font-medieval text-boulange-gold mt-5 mb-10">Le Four Maudit</h2>
          <div className="scoreboard absolute top-0 right-6 bg-boulange-gold text-black px-4 py-2 rounded-lg shadow">
            Score : <span className="font-bold">{score}</span>
          </div>

          <p className="mb-10">Clique quand le four est <span className="text-green-400">OUVERT</span> !</p>

          <div onClick={handleClick} className={`four-box w-40 h-40 mb-6 rounded-lg flex items-center justify-center text-2xl font-bold cursor-pointer transition-all duration-300 ${isOpen ? 'bg-green-500' : 'bg-red-700'} ${animClass}`}>
            {isOpen ? 'OUVERT' : 'FERMÉ'}
          </div>

          {message && <p className="mt-6 text-lg italic text-gray-400">{message}</p>}
        </section>
      </main>
    </>
  );
}
