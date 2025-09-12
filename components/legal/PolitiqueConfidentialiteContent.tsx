import { Shield, Eye, BarChart, Cookie, Mail } from "lucide-react";

export default function PolitiqueConfidentialiteContent() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-neutral-900/40 rounded-2xl shadow-lg space-y-8">
      <section>
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mb-2">
          <Shield className="w-6 h-6 text-boulange-gold" /> Introduction
        </h2>
        <p>
          La présente politique décrit la manière dont le{" "}
          <strong>Projet Boulangerie</strong> traite les données de ses visiteurs.
          Le site est un projet étudiant, non commercial.
        </p>
      </section>

      <section>
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mb-2">
          <Eye className="w-6 h-6 text-boulange-gold" /> Collecte de données
        </h2>
        <p>
          Aucune donnée personnelle (nom, prénom, email, etc.) n’est collectée via ce site.
        </p>
      </section>

      <section>
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mb-2">
          <BarChart className="w-6 h-6 text-boulange-gold" /> Statistiques et mesures d’audience
        </h2>
        <p>
          Nous utilisons <strong>Cloudflare Web Analytics</strong> pour obtenir des
          statistiques anonymisées sur la fréquentation du site. Ces informations ne permettent
          pas d’identifier un utilisateur.
        </p>
      </section>

      <section>
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mb-2">
          <Cookie className="w-6 h-6 text-boulange-gold" /> Cookies
        </h2>
        <p>
          Le site ne dépose pas de cookies publicitaires ni de cookies tiers.
          Certains cookies techniques peuvent être utilisés par l’hébergeur (GitHub Pages /
          o2switch) afin d’assurer le bon fonctionnement du site.
        </p>
      </section>

      <section>
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mb-2">
          <Mail className="w-6 h-6 text-boulange-gold" /> Responsable du traitement
        </h2>
        <p>
          Le responsable du traitement des données est :{" "}
          <em>Guilde de la Boulangerie</em> — Contact :{" "}
          <a href="mailto:projet-boulangerie@yoloweb.fr" className="underline">
            projet-boulangerie@yoloweb.fr
          </a>
        </p>
      </section>

      <section>
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mb-2">
          <Shield className="w-6 h-6 text-boulange-gold" /> Droits des utilisateurs
        </h2>
        <p>
          Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de
          suppression de vos données. Pour exercer ces droits, contactez-nous à l’adresse
          email indiquée ci-dessus.
        </p>
      </section>
    </div>
  );
}