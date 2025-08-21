"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import DarkModeInitializer from "@/components/DarkModeInitializer";
import { Header } from "@/components/Header";
import "./FourMaudit.css";

type Pastry = { id: string; emoji: string; label: string };
type Order = { id: number; items: string[]; timeMs: number };

const PASTRIES: Pastry[] = [
  { id: "croissant", emoji: "🥐", label: "Croissant" },
  { id: "baguette", emoji: "🥖", label: "Baguette" },
  { id: "pain", emoji: "🍞", label: "Pain" },
  { id: "cupcake", emoji: "🧁", label: "Cupcake" },
];

// difficulté
const BASE_TIME_MS = 3800;
const MIN_TIME_MS = 1000;

// scoring
const POINTS_PER_ITEM = 10;   // gain par item correct

export default function LeFourMaudit() {
  // ------- gate mount (évite mismatch SSR/CSR)
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // ------- état principal
  const [order, setOrder] = useState<Order | null>(null);
  const [pending, setPending] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const streakRef = useRef(0);
  useEffect(() => { streakRef.current = streak; }, [streak]);

  const [lives, setLives] = useState(3);
  const [best, setBest] = useState(0);
  const [msg, setMsg] = useState("");
  const [gameOver, setGameOver] = useState(false);

  // barre de temps pilotée par l’horloge
  const [timeLeftMs, setTimeLeftMs] = useState(0);
  const expiresAtRef = useRef<number | null>(null);
  const tickerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // flash couleur
  const [goodFlashId, setGoodFlashId] = useState<string | null>(null);
  const [badFlashId, setBadFlashId] = useState<string | null>(null);

  // lecture du best après mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const v = Number(localStorage.getItem("bakeryBest") || 0);
      if (!Number.isNaN(v)) setBest(v);
    }
  }, []);

  // ------- utils
  const clearTicker = () => {
    if (tickerRef.current) clearInterval(tickerRef.current);
    tickerRef.current = null;
  };

  const toast = (t: string, ms = 900) => {
    setMsg(t);
    setTimeout(() => setMsg(""), ms);
  };

  const computeTimeMs = (st: number, itemCount: number) =>
    Math.max(MIN_TIME_MS, BASE_TIME_MS - st * 160 - (itemCount - 1) * 150);

  const startCountdown = (totalMs: number) => {
    expiresAtRef.current = Date.now() + totalMs;
    setTimeLeftMs(totalMs);
    clearTicker();
    tickerRef.current = setInterval(() => {
      const left = (expiresAtRef.current ?? 0) - Date.now();
      const clamped = Math.max(0, left);
      setTimeLeftMs(clamped);
      if (left <= 0) {
        clearTicker();
        // si on atteint 0, on perd la manche (une vie) automatiquement
        miss("Trop tard, le client s'impatiente... 😬");
      }
    }, 100);
  };

  // ------- commandes
  const newOrder = (delay = 400, forceBase = false) => {
    clearTicker();
    setTimeLeftMs(0);
    expiresAtRef.current = null;

    const create = () => {
      const multi = Math.random() < (streakRef.current >= 5 ? 0.35 : 0.15) ? 2 : 1;
      const items: string[] = [];
      for (let i = 0; i < multi; i++) {
        items.push(PASTRIES[Math.floor(Math.random() * PASTRIES.length)].id);
      }

      const st = forceBase ? 0 : streakRef.current;
      const timeMs = computeTimeMs(st, items.length);

      const o: Order = { id: Date.now(), items, timeMs };
      setOrder(o);
      setPending([...o.items]);
      startCountdown(timeMs);
    };

    if (delay) setTimeout(create, delay);
    else create();
  };

  const complete = () => {
    clearTicker();
    if (!order) return;
    // score = 10 par item + bonus sur temps restant
    const base = POINTS_PER_ITEM * order.items.length;
    const bonus = Math.floor(timeLeftMs / 150);
    const gained = base + bonus;

    setScore((s) => s + gained);
    setStreak((st) => st + 1);
    toast(`Commande ok +${gained} ✅`);
    newOrder(350);
  };

  const miss = (reason: string) => {
    clearTicker();
    setStreak(0);
    setOrder((o) => o); // no-op, juste pour lecture
    setLives((v) => {
      const left = v - 1;
      if (left <= 0) {
        setGameOver(true);
        toast(reason, 1500);
        setBest((b) => {
          const nb = Math.max(b, score);
          if (typeof window !== "undefined") localStorage.setItem("bakeryBest", String(nb));
          return nb;
        });
      } else {
        toast(reason);
        newOrder(350);
      }
      return Math.max(0, left);
    });
  };

  // ------- actions (clic direct)
  // ------- actions (clic direct)
  // ------- actions (clic direct)
  const serve = (id: string) => {
    if (gameOver || !order) return;

    if (!pending.includes(id)) {
      // mauvais clic : -1 vie ET reset série
      setBadFlashId(id);
      setTimeout(() => setBadFlashId(null), 250);

      // >>> AJOUT/POINT CLÉ : reset de la série <<<
      setStreak(0);
      streakRef.current = 0; // pour que l'accélération reparte de 0

      setLives((v) => {
        const left = v - 1;
        if (left <= 0) {
          setGameOver(true);
          clearTicker(); // stoppe la barre
          setBest((b) => {
            const nb = Math.max(b, score);
            if (typeof window !== "undefined") localStorage.setItem("bakeryBest", String(nb));
            return nb;
          });
          toast("Mauvais produit → plus de vies 💀", 1500);
        } else {
          toast("Mauvais produit → -1 vie");
        }
        return Math.max(0, left);
      });
      return;
    }

    // bon clic (inchangé)
    setGoodFlashId(id);
    setTimeout(() => setGoodFlashId(null), 250);

    const next = [...pending];
    next.splice(next.indexOf(id), 1);
    setPending(next);

    if (next.length === 0) complete();
  };



  const reset = () => {
    clearTicker();
    setOrder(null);
    setPending([]);
    setScore(0);
    setStreak(0);
    streakRef.current = 0;      // vitesse/difficulté reviennent à la base
    setLives(3);
    setMsg("");
    setGameOver(false);
    newOrder(600, true);        // 1re commande post-reset à vitesse de base
  };

  // ------- mount
  useEffect(() => {
    if (mounted) newOrder(800, true);
    return () => clearTicker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  // ------- dérivés
  const timePct = order ? Math.max(0, Math.min(100, (timeLeftMs / order.timeMs) * 100)) : 0;

  const pendingMap = useMemo(() => {
    const map: Record<string, number> = {};
    pending.forEach((id) => (map[id] = (map[id] || 0) + 1));
    return map;
  }, [pending]);

  // ------- rendu
  return (
    <>
      <DarkModeInitializer />
      <Header title="Projet Boulangerie" />

      <main className="min-h-screen flex flex-col items-center text-white px-4">
        {!mounted ? (
          <div className="min-h-[40vh] flex items-center justify-center text-sm text-gray-400">
            Chargement du comptoir…
          </div>
        ) : (
          <>
            {/* Scoreboard */}
            <div className="w-full max-w-3xl mt-6 mb-4 flex items-center justify-between gap-2">
              <div className="bg-boulange-gold text-black px-3 py-2 rounded-lg shadow scoreboard">
                Score : <span className="font-bold">{score}</span>
              </div>
              <div className="text-xl select-none">
                {Array.from({ length: 3 }).map((_, i) => (
                  <span key={i} className={i < lives ? "opacity-100" : "opacity-30"}>❤️</span>
                ))}
              </div>
              <div className="text-sm text-gray-300">
                Série : <span className="font-semibold">{streak}</span> • Meilleur :{" "}
                <span className="font-semibold">{best}</span>
              </div>
            </div>

            {/* Titre */}
            <h2 className="text-4xl font-medieval text-boulange-gold mt-2 mb-16">Boulangerie Rush</h2>

            {/* Zone de jeu */}
            {!gameOver && (
              <div className="w-full max-w-3xl bg-white/5 rounded-2xl p-5 border border-white/10">
                <div className="rounded-xl bg-black/30 border border-white/10 p-6">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">🧑‍🍳</div>
                      <div className="text-lg">
                        <div className="font-bold">Commande</div>
                        <div className="text-gray-300 text-sm">Vite vite…</div>
                      </div>
                    </div>

                    {/* Barre de temps (pilotée par horloge) */}
                    <div className="w-48 h-2 bg-white/10 rounded overflow-hidden">
                      <div
                        className="h-full bg-boulange-gold transition-[width] duration-100 linear"
                        style={{ width: `${timePct}%` }}
                      />
                    </div>
                  </div>

                  {/* Cartes (les 4 sont cliquables) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {PASTRIES.map((p) => {
                      const needLeft = pendingMap[p.id] || 0;
                      const isGood = needLeft > 0;

                      return (
                        <button
                          key={p.id}
                          onClick={() => serve(p.id)}
                          className={[
                            "w-full text-left rounded-lg p-3 border border-white/10 transition",
                            "bg-white/5 hover:bg-white/10",
                            goodFlashId === p.id ? "card-serve" : "",
                            badFlashId === p.id ? "card-wrong" : "",
                          ].join(" ")}
                        >
                          <div className="flex items-center justify-between">
                            <div className="text-3xl">{p.emoji}</div>
                          </div>
                          <div className="mt-1 text-sm text-gray-200">{p.label}</div>
                          <div className="mt-1 text-xs">
                            Demandé :{" "}
                            <span className={isGood ? "font-semibold text-boulange-gold" : "font-semibold"}>
                              {needLeft}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Message */}
                  {msg && <p className="mt-4 text-center italic text-gray-300 min-h-6">{msg}</p>}
                </div>
              </div>
            )}

            {/* Game over */}
            {gameOver && (
              <div className="w-full max-w-3xl bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
                <div className="text-2xl font-bold text-red-400">Partie terminée</div>
                <p className="mt-2 text-gray-300">
                  Score final : <span className="font-semibold">{score}</span>
                </p>
                <div className="mt-4 flex items-center justify-center gap-3">
                  <button
                    onClick={reset}
                    className="bg-boulange-gold text-black font-semibold px-6 py-3 rounded-lg hover:brightness-110"
                  >
                    Rejouer
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
}
