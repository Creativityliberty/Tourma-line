import React, { useEffect, useRef, useState } from "react";

type AnimateOnScrollProps = {
    animationClass?: string;
    threshold?: number;
    delay?: number;
    children?: React.ReactNode;
};

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
    children,
    animationClass = "animate-fadeInUp",
    threshold = 0.1,
    delay = 0,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }, delay);
                }
            },
            { threshold },
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, delay]);

    return (
        <div
            ref={ref}
            className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
        >
            <div className={isVisible ? animationClass : ""}>{children}</div>
        </div>
    );
};
