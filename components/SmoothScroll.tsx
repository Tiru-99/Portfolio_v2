"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

declare global {
    interface Window {
        lenis: Lenis | undefined;
    }
}

export default function SmoothScroll({
    children,
}: {
    children: React.ReactNode;
}) {
    const [lenis, setLenis] = useState<Lenis | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const ln = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.2,
            touchMultiplier: 1.5,
            infinite: false,
        });

        window.lenis = ln;
        setLenis(ln);

        function raf(time: number) {
            ln.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            ln.destroy();
            window.lenis = undefined;
            setLenis(null);
        };
    }, []);

    // Reset scroll to top on route change
    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        }
    }, [pathname, lenis]);

    return <>{children}</>;
}
