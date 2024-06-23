"use client";

import { useEffect, useRef } from "react";

export default function NoiseCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');

      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if (ctx) {
          ctx.globalAlpha = 0.1; // Set transparency
        }

        const drawNoise = (): void => {
          if (ctx && canvas) {
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
              const color = Math.random() * 255;
              data[i] = color;
              data[i + 1] = color;
              data[i + 2] = color;
              data[i + 3] = 255;
            }

            ctx.putImageData(imageData, 0, 0);
            requestAnimationFrame(drawNoise);
          }
        };

        drawNoise();
      }
    }
  }, []);

  return (
    <canvas ref={canvasRef} id="noise_canvas" className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ opacity: 0.05 }}></canvas>
  );
}
