"use client";

import React, { useEffect, useRef } from "react";

const Scroller = ({ children }: { children: React.ReactNode }) => {
    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const childrens = elementRef.current.children;
                Array.from(childrens).forEach(child => {
                    const rect = child.getBoundingClientRect();

                    if (!child.classList.contains("child")) {
                        child.classList.add("child");
                    }
                    
                    if (rect.top < window.innerHeight) {
                        child.classList.add('visible')
                    } else {
                        child.classList.remove("visible");
                    }
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            className="space-y-10 sm:space-y-20"
            ref={elementRef}
        >
            {children}
        </section>
    );
};

export default Scroller;