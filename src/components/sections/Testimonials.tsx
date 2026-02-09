import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { TestimonialsTicker } from "./TestimonialsTicker";

export const Testimonials = () => {
  return (
    <section id="avis" className="bg-white">
      <TestimonialsTicker />
      <AnimateOnScroll>
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-3xl sm:text-4xl font-display text-brand-dark mb-4 text-center">
            Ils étaient comme vous
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 text-center">
            Voici ce qu'ils disent maintenant — 5,0/5 sur Google, 13 avis
          </p>

          <div className="max-w-6xl mx-auto min-h-[400px]">
            <div
              className="elfsight-app-d88ab70b-fe59-45e0-b959-2a1eaa59082f"
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};
