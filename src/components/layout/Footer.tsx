import { Link } from "react-router-dom";
import { FacebookIcon, SparklesIcon } from "../ui/icons";
import { ConversionLink } from "../ui/ConversionLink";

export const Footer = () => {
    return (
        <footer className="bg-brand-dark text-white py-10 mt-0">
            <div className="container mx-auto px-6">
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <h3 className="text-3xl font-display font-bold mb-3">
                            Tourma-Line
                        </h3>
                        <div className="flex items-center gap-2 mb-2 text-brand-lilas">
                            <p>
                                "Pour vous guider vers plus de clarté et vous offrir un temps de recentrage."
                            </p>
                            <SparklesIcon className="w-4 h-4 flex-shrink-0" />
                        </div>
                        <p className="text-sm text-gray-400 mb-4 italic">
                            Line Simon — Voyante, numérologue & praticienne Lahochi
                        </p>
                        <div className="text-sm text-gray-300 space-y-1">
                            <p>Cabinet : 4 résidence Les Peupliers</p>
                            <p>76540 Gerponville — Seine-Maritime</p>
                            <p className="mt-2">SIRET : 93116533600013</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-3">Contact</h4>
                        <p className="text-sm text-gray-300">
                            Tél :{" "}
                            <ConversionLink kind="phone" placement="footer-phone"
                                href="tel:+33649653186"
                                className="hover:text-brand-purple underline"
                            >
                                06 49 65 31 86
                            </ConversionLink>
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
                                aria-label="Tourma-Line sur Facebook"
                                className="hover:text-brand-purple transition-all duration-300 transform hover:scale-110 active:scale-95"
                            >
                                <FacebookIcon className="w-6 h-6" aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <nav aria-label="Liens principaux Tourma-Line">
                            <h4 className="text-lg font-semibold mb-3">Liens utiles</h4>
                            <ul className="text-sm text-gray-300 space-y-2 mb-5">
                                <li><Link to="/prestations" className="hover:text-brand-purple underline">Prestations</Link></li>
                                <li><Link to="/cartomancie" className="hover:text-brand-purple underline">Voyance & cartomancie</Link></li>
                                <li><Link to="/numerologie" className="hover:text-brand-purple underline">Numérologie</Link></li>
                                <li><Link to="/soin-lahochi" className="hover:text-brand-purple underline">Soin énergétique Lahochi</Link></li>
                                <li><Link to="/consultation-a-distance" className="hover:text-brand-purple underline">Consultation à distance</Link></li>
                                <li><Link to="/blog" className="hover:text-brand-purple underline">Guides & blog</Link></li>
                            </ul>
                        </nav>
                        <nav aria-label="Liens légaux">
                            <h4 className="text-lg font-semibold mb-3">Liens légaux</h4>
                            <ul className="text-sm text-gray-300 space-y-2">
                                <li>
                                    <Link to="/mentions-legales" className="hover:text-brand-purple underline">
                                        Mentions légales
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/politique-de-confidentialite" className="hover:text-brand-purple underline">
                                        Politique de confidentialité
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/conditions-generales" className="hover:text-brand-purple underline">
                                        Conditions générales
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="border-t border-gray-600 mt-8 pt-6 text-center text-xs sm:text-sm text-gray-400 space-y-2">
                    <p>
                        © {new Date().getFullYear()} Tourma-Line. Tous droits réservés.
                    </p>
                    <p>
                        Réalisé avec passion par{" "}
                        <a
                            href="https://www.numtemaagency.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-purple hover:underline font-medium"
                        >
                            Numtema Agency — Lionel Numtema
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};
