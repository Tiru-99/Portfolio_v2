"use client";

import { useEffect, useState, useRef, useId } from "react";
import { cn } from "@/lib/utils";

interface Star {
    id: string;
    x: number;
    y: number;
    size: number;
    opacity: number;
    animationDuration: number;
    animationDelay: number;
    shouldTwinkle: boolean;
}

export const StarField = ({
    count = 100,
    className,
}: {
    count?: number;
    className?: string;
}) => {
    const [stars, setStars] = useState<Star[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const idPrefix = useId();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const newStars: Star[] = [];
        for (let i = 0; i < count; i++) {
            newStars.push({
                id: `${idPrefix}-${i}`,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 2 + 0.1, // 0.1px to 2.1px
                opacity: Math.random() * 0.5 + 0.1, // 0.1 to 0.6 opacity
                animationDuration: Math.random() * 3 + 2, // 2s to 5s duration
                animationDelay: Math.random() * 5,
                shouldTwinkle: Math.random() > 0.8, // Only 20% of stars twinkle
            });
        }
        setStars(newStars);
    }, [count, idPrefix]);

    return (
        <div
            ref={containerRef}
            className={cn("absolute inset-0 pointer-events-none z-0", className)}
        >
            {stars.map((star) => (
                <div
                    key={star.id}
                    className={cn("absolute bg-white rounded-full", star.shouldTwinkle && "animate-twinkle")}
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`,
                        animationDelay: `${star.animationDelay}s`,
                    }}
                />
            ))}
        </div>
    );
};
