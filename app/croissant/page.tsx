import CopyMessage from "@/components/SlackMessage";
import FlyingCroissants from "@/components/FlyingCroissants";
import CroissantWarning from "@/components/CroissantWarning";
import FullscreenOnLoad from "@/components/FullscreenOnLoad";

export const metadata = {
  title: "🥐 Croissanté ! 🥐",
};

export default function CroissantPage() {
  const slackText =
    "J'offre les croissants demain matin ! 🥐🥐\n\nPS : j'ai été croissanté par la Guilde de la Boulangerie (mon poste était déverrouillé).";

  return (
    <main
      className="relative h-full w-full bg-black flex items-center justify-center px-6 py-6 md:py-8 overflow-hidden"
    >
      <FullscreenOnLoad />
      {/* Les croissants en arrière plan */}
      <FlyingCroissants count={18} />

      <div className="relative z-[70] w-full max-w-3xl flex flex-col items-center gap-8 text-center">
        <CroissantWarning />
        <CopyMessage
          message={slackText}
          buttonLabel="Copier le message Slack"
          copiedLabel="Message copié !"
          className="mt-2"
        />
        <div className="mt-4 md:mt-6 text-white/90 text-sm">
          Pour (re)découvrir le projet,&nbsp;
          <form action="https://bluelight.yoloweb.fr" method="get" target="_blank" className="inline">
            <button type="submit" className="underline text-boulange-gold font-semibold">cliquez ici</button>
          </form>
        </div>
      </div>
    </main>
  );
}
