import React from "react";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";

export const Testimonials = () => {
    return (
        <section id="avis" className="py-20 bg-white">
            <AnimateOnScroll>
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl font-display text-brand-dark mb-16 text-center">
                        Ce que mes clients disent
                    </h2>

                    <div className="max-w-6xl mx-auto min-h-[400px]">
                        <div className="elfsight-app-d88ab70b-fe59-45e0-b959-2a1eaa59082f" data-elfsight-app-lazy></div>
                    </div>
                </div>
            </AnimateOnScroll>
        </section>
    );
};
