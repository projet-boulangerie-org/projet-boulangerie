"use client";
import { useEffect, useState } from "react";
import styles from "./FlyingCroissants.module.css";

type CroissantSpec = {
  left: number;
  sizeRem: number;
  duration: number;
  delay: number;
  variant: 1 | 2 | 3;
};

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

type Props = { count?: number; className?: string };

export default function FlyingCroissants({ count = 12, className = "" }: Props) {
  const [specs, setSpecs] = useState<CroissantSpec[] | null>(null);

  useEffect(() => {
    const arr: CroissantSpec[] = Array.from({ length: count }).map(() => ({
      left: Math.round(random(2, 98)),
      sizeRem: Math.round(random(18, 36)) / 10,
      duration: Math.round(random(9, 16)),
      delay: Math.round(random(0, 8)),
      variant: (Math.floor(random(1, 4)) as 1 | 2 | 3),
    }));
    setSpecs(arr);
  }, [count]);

  return (
    <div className={`pointer-events-none fixed inset-0 overflow-hidden select-none z-[60] ${className}`} aria-hidden>
      {specs?.map((c, i) => (
        <span
          key={i}
          className={`${styles.croissant} ${styles[`v${c.variant}` as const]}`}
          style={{
            left: `${c.left}%`,
            fontSize: `${c.sizeRem}rem`,
            animationDuration: `${c.duration}s`,
            animationDelay: `${c.delay}s`,
          }}
        >
          🥐
        </span>
      ))}
    </div>
  );
}
