"use client";

import { useEffect, useState, useRef, useId } from "react";
import { cn } from "@/lib/utils";

interface ShootingStar {
    id: number;
    x: number;
    y: number;
    angle: number;
    scale: number;
    speed: number;
    distance: number;
}

export const ShootingStars = ({
    minSpeed = 5,
    maxSpeed = 15,
    minDelay = 1000,
    maxDelay = 3000,
    starColor = "#9E00FF",
    trailColor = "#2EB9DF",
    starWidth = 15,
    starHeight = 1,
    className,
}: {
    minSpeed?: number;
    maxSpeed?: number;
    minDelay?: number;
    maxDelay?: number;
    starColor?: string;
    trailColor?: string;
    starWidth?: number;
    starHeight?: number;
    className?: string;
}) => {
    const [stars, setStars] = useState<ShootingStar[]>([]);
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const svg = svgRef.current;
        if (!svg) return;

        let isMounted = true;

        const createStar = () => {
            if (!isMounted) return;

            // Prevent star accumulation when tab is inactive
            if (typeof document !== "undefined" && document.hidden) {
                const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
                setTimeout(createStar, randomDelay);
                return;
            }

            const svg = svgRef.current;
            if (!svg) return;

            const { width, height } = svg.getBoundingClientRect();
            const angle = 45;

            const startX = Math.random() > 0.5 ? Math.random() * width : 0;
            const startY = startX === 0 ? Math.random() * height : 0;

            const newStar: ShootingStar = {
                id: Date.now() + Math.random(),
                x: startX,
                y: startY,
                angle,
                scale: 1,
                speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
                distance: 0,
            };

            setStars((prevStars) => [...prevStars, newStar]);

            const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
            setTimeout(createStar, randomDelay);
        };

        // Start 3 loops for 2-3 stars at a time
        const STAR_STREAMS = 3;

        for (let i = 0; i < STAR_STREAMS; i++) {
            setTimeout(createStar, i * 800);
        }


        return () => { isMounted = false; };
    }, [minSpeed, maxSpeed, minDelay, maxDelay]);

    useEffect(() => {
        const svg = svgRef.current;
        if (!svg) return;

        const moveStars = () => {
            const { width, height } = svg.getBoundingClientRect();

            setStars((prevStars) => {
                return prevStars
                    .map((star) => {
                        const newX =
                            star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);
                        const newY =
                            star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
                        const newDistance = star.distance + star.speed;
                        const newScale = 1 + newDistance / 100;

                        if (
                            newX < -20 ||
                            newX > width + 20 ||
                            newY < -20 ||
                            newY > height + 20
                        ) {
                            return null;
                        }
                        return {
                            ...star,
                            x: newX,
                            y: newY,
                            distance: newDistance,
                            scale: newScale,
                        };
                    })
                    .filter((star): star is ShootingStar => star !== null);
            });
            requestAnimationFrame(moveStars);
        };

        const animationFrame = requestAnimationFrame(moveStars);
        return () => cancelAnimationFrame(animationFrame);
    }, []);

    const uniqueId = `shooting-star-gradient-${useId()}`;

    return (
        <svg
            ref={svgRef}
            className={cn("w-full h-full absolute inset-0 pointer-events-none", className)}
        >
            <defs>
                <linearGradient id={uniqueId} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
                    <stop
                        offset="100%"
                        style={{ stopColor: starColor, stopOpacity: 1 }}
                    />
                </linearGradient>
            </defs>
            {stars.map((star) => (
                <rect
                    key={star.id}
                    x={star.x}
                    y={star.y}
                    width={starWidth * star.scale}
                    height={starHeight}
                    fill={`url(#${uniqueId})`}
                    transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2
                        }, ${star.y + starHeight / 2})`}
                />
            ))}
        </svg>
    );
};
