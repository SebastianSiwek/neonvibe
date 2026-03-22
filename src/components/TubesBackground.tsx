"use client";

import React, { useEffect, useRef, useState } from "react";

interface TubesBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  enableClickInteraction?: boolean;
}

interface TubesApp {
  tubes: {
    setColors: (colors: string[]) => void;
    setLightsColors: (colors: string[]) => void;
  };
}

const TUBE_COLORS = ["#e040fb", "#00e5ff", "#76ff03"];
const LIGHT_COLORS = ["#e040fb", "#00e5ff", "#76ff03", "#ff6b35"];

function randomHexColor(): string {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

export function TubesBackground({
  children,
  className,
  enableClickInteraction = true,
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tubesRef = useRef<TubesApp | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    let mounted = true;
    let cleanup: (() => void) | undefined;

    const initTubes = async () => {
      if (!canvasRef.current) return;

      try {
        const cdnUrl = "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";
        const module = await (Function(`return import("${cdnUrl}")`)() as Promise<{ default: (canvas: HTMLCanvasElement, opts: unknown) => TubesApp }>);
        const TubesCursor = module.default;

        if (!mounted) return;

        const app: TubesApp = TubesCursor(canvasRef.current, {
          tubes: {
            colors: TUBE_COLORS,
            lights: {
              intensity: 200,
              colors: LIGHT_COLORS,
            },
          },
        });

        tubesRef.current = app;
        setIsLoading(false);

        cleanup = () => {
          tubesRef.current = null;
        };
      } catch (error) {
        console.error("TubesBackground: failed to load TubesCursor:", error);
        if (mounted) {
          setIsLoading(false);
          setHasFailed(true);
        }
      }
    };

    initTubes();

    return () => {
      mounted = false;
      if (cleanup) cleanup();
    };
  }, []);

  const handleClick = () => {
    if (!enableClickInteraction || !tubesRef.current) return;

    const colors = Array.from({ length: 3 }, () => randomHexColor());
    const lightsColors = Array.from({ length: 4 }, () => randomHexColor());

    tubesRef.current.tubes.setColors(colors);
    tubesRef.current.tubes.setLightsColors(lightsColors);
  };

  return (
    <div
      className={`relative w-full h-full min-h-[400px] overflow-hidden ${className || ""}`}
      onClick={handleClick}
      style={{ background: "#0a0a0a" }}
    >
      {/* Gradient fallback - visible when Three.js fails or while loading */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(224,64,251,0.15) 0%, transparent 50%), " +
            "radial-gradient(ellipse at 70% 50%, rgba(0,229,255,0.15) 0%, transparent 50%), " +
            "radial-gradient(ellipse at 50% 80%, rgba(118,255,3,0.08) 0%, transparent 40%)",
        }}
      />

      {/* Loading pulse overlay */}
      {isLoading && !hasFailed && (
        <div className="absolute inset-0 z-[1] flex items-center justify-center">
          <div
            className="w-32 h-32 rounded-full opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(224,64,251,0.6) 0%, rgba(0,229,255,0.3) 50%, transparent 70%)",
              animation: "tubes-pulse 2s ease-in-out infinite",
            }}
          />
        </div>
      )}

      {/* Three.js canvas */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full block transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        style={{ touchAction: "none" }}
      />

      {/* Content overlay */}
      <div className="relative z-10 w-full h-full pointer-events-none">
        {children}
      </div>

      {/* Pulse animation keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes tubes-pulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.3); opacity: 0.15; }
        }
      `}} />
    </div>
  );
}
