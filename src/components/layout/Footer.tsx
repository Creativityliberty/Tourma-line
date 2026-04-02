import React from "react";
import { FacebookIcon } from "../ui/icons";

export const Footer = () => {
    return (
        <footer className="bg-brand-dark text-white py-10 mt-0">
            <div className="container mx-auto px-6">
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <h3 className="text-3xl font-display font-bold mb-3">
                            TOURMA-LINE
                        </h3>
                        <p className="text-brand-lilas mb-2">
                            "Pour vous guider vers la clarté, la confiance et l'harmonie. ✨"
                        </p>
                        <p className="text-sm text-gray-400 mb-4 italic">
                            Line — Numérologue & Cartomancienne
                        </p>
                        <div className="text-sm text-gray-300 space-y-1">
                            <p>4 résidence Les Peupliers, 76540 Gerponville</p>
                            <p className="text-gray-400 text-xs">
                                Zone desservie : Fécamp, Valmont, Cany-Barville, Ourville-en-Caux, Saint-Riquier-ès-Plains
                            </p>
                            <p className="text-gray-400 text-xs">
                                Consultation à distance : toute la France &amp; international
                            </p>
                            <p className="mt-2">SIRET : 93116533600013</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-3">Contact</h4>
                        <p className="text-sm text-gray-300">
                            Tél :{" "}
                            <a
                                href="tel:0649653186"
                                className="hover:text-brand-purple underline"
                            >
                                06 49 65 31 86
                            </a>
                        </p>
                        <p className="text-sm text-gray-300">
                            Email :{" "}
                            <a
                                href="mailto:line.simon.ls@gmail.com"
                                className="hover:text-brand-purple underline"
                            >
                                line.simon.ls@gmail.com
                            </a>
                        </p>
                        <div className="flex items-center space-x-4 mt-4">
                            <a
                                href="https://www.facebook.com/tourma.line.534540"
                                target="_blank"
                                rel="noopener noreferrer me"
                                aria-label="Suivez Line sur Facebook"
                                className="hover:text-brand-purple transition-all duration-300 transform hover:scale-110 active:scale-95"
                            >
                                <FacebookIcon className="w-6 h-6" aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-3">Liens Légaux</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                            <li>
                                <a
                                    href="/mentions-legales"
                                    className="hover:text-brand-purple underline"
                                >
                                    Mentions légales
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/politique-de-confidentialite"
                                    className="hover:text-brand-purple underline"
                                >
                                    Politique de confidentialité
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/conditions-generales"
                                    className="hover:text-brand-purple underline"
                                >
                                    Conditions générales
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm text-gray-300">
                    <p>
                        © {new Date().getFullYear()} TOURMA-LINE. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
};
