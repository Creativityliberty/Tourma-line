import React from "react";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { SparklesIcon } from "../ui/icons";
import { services } from "../../data/services";

export const Services = ({
    activeTab,
    setActiveTab,
}: {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}) => {
    const currentService = services[activeTab];

    return (
        <section id="services" className="py-20 bg-white">
            <AnimateOnScroll>
                <div className="container mx-auto text-center px-4 sm:px-6">
                    <h2 className="text-3xl sm:text-4xl font-display text-brand-dark mb-8 sm:mb-12">
                        Mes outils pour vous guider.
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto mb-8">
                        La numérologie et la cartomancie sont proposées comme une seule et
                        même prestation, combinées pour vous offrir une consultation
                        complète et approfondie.
                    </p>
                    <div className="flex flex-row md:justify-center overflow-x-auto whitespace-nowrap gap-4 sm:gap-6 mb-8 border-b-2 border-brand-lilas pb-1 scrollbar-none">
                        {Object.values(services).map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(service.id)}
                                className={`flex flex-row items-center justify-center space-x-2 px-4 py-3 font-display text-sm sm:text-lg md:text-xl transition-colors duration-300 whitespace-nowrap ${activeTab === service.id
                                    ? "border-b-4 border-brand-purple text-brand-purple"
                                    : "text-gray-500 hover:text-brand-dark"
                                    }`}
                            >
                                {React.createElement(service.icon, {
                                    className: "w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0",
                                })}
                                <span className="text-sm sm:text-base">{service.title}</span>
                            </button>
                        ))}
                    </div>
                    <div className="max-w-5xl mx-auto text-left bg-white/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/35 transition-all duration-500 overflow-hidden">
                        <AnimateOnScroll key={activeTab}>
                            <div className="flex flex-col md:flex-row">
                                {currentService.imageUrl && (
                                    <div className="md:w-1/3 relative h-64 md:h-auto">
                                        <img
                                            src={currentService.imageUrl}
                                            alt={currentService.imageAlt || currentService.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </div>
                                )}
                                <div className={`p-6 sm:p-8 ${currentService.imageUrl ? 'md:w-2/3' : 'w-full'}`}>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-display text-brand-dark mb-4">
                                        {currentService.contentTitle}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                        {currentService.content}
                                    </p>
                                    {currentService.features && (
                                        <ul className="mt-6 space-y-4">
                                            {currentService.features.map((feature, index) => (
                                                <li key={index} className="flex items-start space-x-3">
                                                    <SparklesIcon className="w-5 h-5 text-brand-purple flex-shrink-0 mt-1" />
                                                    <p className="text-sm sm:text-base text-gray-700">
                                                        <strong className="font-semibold text-brand-dark">
                                                            {feature.title}:
                                                        </strong>{" "}
                                                        {feature.description}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </AnimateOnScroll>
        </section>
    );
};
