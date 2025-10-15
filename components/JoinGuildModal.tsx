"use client";
import { useState } from "react";

export default function JoinGuildModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    pseudoSlack: "",
    isDev: false,
    niveauNextJS: "",
    niveauVibeCoding: "",
    raison: "",
    acceptePouvoir: false,
  });

  const initialFormData = {
    nom: "",
    email: "",
    pseudoSlack: "",
    isDev: false,
    niveauNextJS: "",
    niveauVibeCoding: "",
    raison: "",
    acceptePouvoir: false,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Envoyer les données à un backend

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData(initialFormData);
      setIsOpen(false);
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
    const name = target.name;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="nav-button text-base text-white"
      >
        Rejoindre
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-neutral-900 p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-medieval text-boulange-gold">
                Rejoindre la Guilde de la Boulangerie
              </h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded px-2 py-1 hover:bg-white/10"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            {showSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <div className="text-6xl animate-bounce">🎉</div>
                <p className="text-2xl font-medieval text-boulange-gold animate-pulse">
                  Formulaire envoyé !
                </p>
                <p className="text-sm text-gray-400">
                  Bienvenue dans la Guilde de la Boulangerie
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nom */}
              <div>
                <label htmlFor="nom" className="block text-sm font-medium mb-2">
                  Nom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-boulange-gold/50"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-boulange-gold/50"
                />
              </div>

              {/* Pseudo Slack */}
              <div>
                <label htmlFor="pseudoSlack" className="block text-sm font-medium mb-2">
                  Pseudo Slack <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="pseudoSlack"
                  name="pseudoSlack"
                  required
                  value={formData.pseudoSlack}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-boulange-gold/50"
                />
              </div>

              {/* Case à cocher Dev */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isDev"
                  name="isDev"
                  checked={formData.isDev}
                  onChange={handleChange}
                  className="w-4 h-4 text-boulange-gold bg-neutral-800 border-neutral-700 rounded focus:ring-boulange-gold/50"
                />
                <label htmlFor="isDev" className="ml-2 text-sm font-medium">
                  Je veux être développeur
                </label>
              </div>

              {/* Niveau Next.js */}
              <div>
                <label htmlFor="niveauNextJS" className="block text-sm font-medium mb-2">
                  Niveau d&apos;expérience en Next.js <span className="text-red-500">*</span>
                </label>
                <select
                  id="niveauNextJS"
                  name="niveauNextJS"
                  required
                  value={formData.niveauNextJS}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-boulange-gold/50"
                >
                  <option value="">Sélectionner un niveau</option>
                  <option value="debutant">Débutant</option>
                  <option value="intermediaire">Intermédiaire</option>
                  <option value="confirme">Confirmé</option>
                </select>
              </div>

              {/* Niveau Vibe Coding */}
              <div>
                <label htmlFor="niveauVibeCoding" className="block text-sm font-medium mb-2">
                  Niveau d&apos;expérience en Vibe Coding <span className="text-red-500">*</span>
                </label>
                <select
                  id="niveauVibeCoding"
                  name="niveauVibeCoding"
                  required
                  value={formData.niveauVibeCoding}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-boulange-gold/50"
                >
                  <option value="">Sélectionner un niveau</option>
                  <option value="debutant">Débutant</option>
                  <option value="intermediaire">Intermédiaire</option>
                  <option value="confirme">Confirmé</option>
                </select>
              </div>

              {/* Raison de rejoindre */}
              <div>
                <label htmlFor="raison" className="block text-sm font-medium mb-2">
                  Raison de vouloir rejoindre la Guilde <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="raison"
                  name="raison"
                  required
                  value={formData.raison}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-boulange-gold/50 resize-none"
                />
              </div>

              {/* Case à cocher finale */}
              <div className="border-t border-neutral-700 pt-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="acceptePouvoir"
                    name="acceptePouvoir"
                    required
                    checked={formData.acceptePouvoir}
                    onChange={handleChange}
                    className="w-4 h-4 mt-1 text-boulange-gold bg-neutral-800 border-neutral-700 rounded focus:ring-boulange-gold/50"
                  />
                  <label htmlFor="acceptePouvoir" className="ml-2 text-sm">
                    Accepte-tu les pouvoirs qui te sont confiés : développer, maintenir et promouvoir la Guilde de la Boulangerie ?{" "}
                    <span className="text-red-500">*</span>
                    <p className="italic text-xs text-gray-400 mt-1 opacity-70">
                      Un grand pouvoir implique de grandes responsabilités
                    </p>
                  </label>
                </div>
              </div>

              {/* Boutons */}
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-md bg-neutral-700 hover:bg-neutral-600 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-boulange-gold/70 hover:bg-boulange-gold transition-colors font-medium"
                >
                  Rejoindre la Guilde
                </button>
              </div>
            </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
