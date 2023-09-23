import { useGameApplication } from "game/di/di.root-container.hooks";
import React, { useEffect, useRef } from "react";
import "./GamePage.style.scss";

export default function GamePage() {
  const gameApplication = useGameApplication();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gameApplication.start(containerRef.current);

      return () => {
        gameApplication.destroy();
      };
    }
  }, []);

  return (
    <div className="stage-container">
      <div className="stage-root">
        <div ref={containerRef} className="stage-canvas"></div>
      </div>
    </div>
  );
}
