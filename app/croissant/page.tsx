import CopyMessage from "@/components/croissant/SlackMessage";
import FlyingCroissants from "@/components/croissant/FlyingCroissants";
import CroissantWarning from "@/components/croissant/CroissantWarning";
import FullscreenOnLoad from "@/components/croissant/FullscreenOnLoad";

export const metadata = {
  title: "🥐 Croissanté ! 🥐",
};

export default function CroissantPage() {
  return (
    <main
      className="relative h-full w-full bg-black grid place-items-center px-6 mt-20 pb-6 md:pt-16 md:pb-8 overflow-hidden"
    >
      <FullscreenOnLoad />
      {/* Les croissants en arrière plan */}
      <FlyingCroissants count={18} />

      <div className="relative z-[70] w-full max-w-3xl flex flex-col items-center gap-8 text-center">
        <CroissantWarning />
        <CopyMessage className="mt-2" />
        <div className="mt-4 md:mt-6 text-white/90 text-sm">
          Pour (re)dǸcouvrir le projet,&nbsp;
          <form action="https://bluelight.yoloweb.fr" method="get" target="_blank" className="inline">
            <button type="submit" className="underline text-boulange-gold font-semibold">cliquez ici</button>
          </form>
        </div>
      </div>
    </main>
  );
}

