type Props = { className?: string };

export default function CroissantWarning({ className = '' }: Props) {
  return (
    <div className={`relative z-10 max-w-2xl mx-auto text-center ${className}`}>
      <h1 className="text-4xl md:text-5xl font-medieval text-boulange-gold mb-8">
        Tu as été croissanté !
      </h1>
      <div className="space-y-4">
        <p className="text-white/90 text-lg md:text-xl leading-relaxed">
          Ton poste était déverrouillé. Sensibilisation sécurité&nbsp;: verrouille toujours ta session quand tu t’absentes.
        </p>
        <p className="text-boulange-gold/90 text-base">
          Windows&nbsp;: <span className="font-semibold">Win + L</span> — macOS&nbsp;: <span className="font-semibold">Ctrl + Cmd + Q</span>
        </p>
      </div>
    </div>
  );
}
