'use client'

import { useEffect, useRef, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

interface SpriteSet {
  [key: string]: [number, number][];
}

const SPRITE_SETS: SpriteSet = {
  idle: [[-3, -3]],
  alert: [[-7, -3]],
  scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
  scratchWallN: [[0, 0], [0, -1]],
  scratchWallS: [[-7, -1], [-6, -2]],
  scratchWallE: [[-2, -2], [-2, -3]],
  scratchWallW: [[-4, 0], [-4, -1]],
  tired: [[-3, -2]],
  sleeping: [[-2, 0], [-2, -1]],
  N: [[-1, -2], [-1, -3]],
  NE: [[0, -2], [0, -3]],
  E: [[-3, 0], [-3, -1]],
  SE: [[-5, -1], [-5, -2]],
  S: [[-6, -3], [-7, -2]],
  SW: [[-5, -3], [-6, -1]],
  W: [[-4, -2], [-4, -3]],
  NW: [[-1, 0], [-1, -1]],
};

const NEKO_SPEED = 10;

export default function OnekoCat() {
  const nekoRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const lastFrameTimestamp = useRef<number | null>(null);

  const [nekoPos, setNekoPos] = useState<Position>({ x: 32, y: 32 });
  const [mousePos, setMousePos] = useState<Position>({ x: 0, y: 0 });
  const [frameCount, setFrameCount] = useState(0);
  const [idleTime, setIdleTime] = useState(0);
  const [idleAnimation, setIdleAnimation] = useState<string | null>(null);
  const [idleAnimationFrame, setIdleAnimationFrame] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const setSprite = (name: string, frame: number) => {
    if (!nekoRef.current) return;
    const sprite = SPRITE_SETS[name][frame % SPRITE_SETS[name].length];
    nekoRef.current.style.backgroundPosition =
      `${sprite[0] * 32}px ${sprite[1] * 32}px`;
  };

  const resetIdleAnimation = () => {
    setIdleAnimation(null);
    setIdleAnimationFrame(0);
  };

  const handleIdle = () => {
    setIdleTime(prev => prev + 1);

    if (!idleAnimation) {
      setSprite("idle", 0);
      return;
    }

    setSprite(idleAnimation, idleAnimationFrame);
    setIdleAnimationFrame(prev => prev + 1);

    if (idleAnimationFrame > 60) {
      resetIdleAnimation();
    }
  };

  const handleFrame = () => {
    if (!nekoRef.current || isPaused) return;

    setFrameCount(prev => prev + 1);

    const diffX = nekoPos.x - mousePos.x;
    const diffY = nekoPos.y - mousePos.y;
    const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

    if (distance < NEKO_SPEED) {
      handleIdle();
      return;
    }

    setIdleAnimation(null);
    setIdleAnimationFrame(0);

    let direction = "";
    direction += diffY / distance > 0.5 ? "N" : "";
    direction += diffY / distance < -0.5 ? "S" : "";
    direction += diffX / distance > 0.5 ? "W" : "";
    direction += diffX / distance < -0.5 ? "E" : "";

    if (!SPRITE_SETS[direction]) direction = "idle";

    setSprite(direction, frameCount);

    const newX = nekoPos.x - (diffX / distance) * NEKO_SPEED;
    const newY = nekoPos.y - (diffY / distance) * NEKO_SPEED;

    setNekoPos({
      x: Math.min(Math.max(16, newX), window.innerWidth - 16),
      y: Math.min(Math.max(16, newY), window.innerHeight - 16)
    });
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!isPaused) {
        setMousePos({ x: event.clientX, y: event.clientY });
      }
    };

    const animate = (timestamp: number) => {
      if (!lastFrameTimestamp.current) {
        lastFrameTimestamp.current = timestamp;
      }

      if (timestamp - lastFrameTimestamp.current > 100) {
        lastFrameTimestamp.current = timestamp;
        handleFrame();
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [nekoPos, mousePos, frameCount, isPaused]);

  const handleClick = () => {
    setIsPaused(prev => !prev);
    if (!isPaused) {
      setSprite("sleeping", 0);
    }
  };

  return (
    <div
      ref={nekoRef}
      aria-hidden="true"
      onClick={handleClick}
      style={{
        width: '32px',
        height: '32px',
        position: 'fixed',
        pointerEvents: 'auto',
        cursor: 'pointer',
        imageRendering: 'pixelated',
        left: `${nekoPos.x - 16}px`,
        top: `${nekoPos.y - 16}px`,
        zIndex: 2147483647,
        backgroundImage: 'url(/assets/oneko.gif)',
      }}
    />
  );
}
