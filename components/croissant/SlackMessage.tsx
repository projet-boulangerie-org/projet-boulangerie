"use client";
import { useState } from "react";
import { basePath } from "@/lib/constants";
import Image from "next/image";

type Props = {
  message?: string;
  buttonLabel?: string;
  copiedLabel?: string;
  className?: string;
};

export default function CopyMessage({
  message = "J'offre les croissants demain matin ! �Y�?�Y�?\n\nPS : j'ai ǸtǸ croissantǸ par la Guilde de la Boulangerie (mon poste Ǹtait dǸverrouillǸ).",
  buttonLabel = "Copier le message Slack",
  copiedLabel = "Message copiǸ !",
  className = "",
}: Props) {
  const [copied, setCopied] = useState(false);
  const [animateBorder, setAnimateBorder] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setAnimateBorder(true);
      setCopied(true);
      setTimeout(() => setAnimateBorder(false), 3000);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Erreur de copie clipboard :", err);
    }
  };

  return (
    <div className={`inline-flex items-center ${className}`}>
      <button
        onClick={handleCopy}
        aria-label={copied ? copiedLabel : buttonLabel}
        className={`relative overflow-hidden ${
          copied ? "bg-green-600" : "bg-red-600 hover:bg-red-700"
        } text-white min-w-[200px] font-bold py-3 px-5 rounded shadow-none flex items-center justify-center gap-3 transition-colors duration-300 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-0 ring-offset-transparent`}
      >
        <Image
          src={`${basePath}/slack.png`}
          alt="Slack"
          className="object-cover rounded-full"
          width={24}
          height={24}
        />
        {copied ? copiedLabel : buttonLabel}
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

