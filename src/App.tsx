import { ContainerProvider } from "brandi-react";
import React from "react";
import { getOrCreateDiRootContainer } from "./game/di/di.root-container";
import GamePage from "./game/page/GamePage";

export function App() {
  return (
    <ContainerProvider container={getOrCreateDiRootContainer()}>
      <GamePage />
    </ContainerProvider>
  );
}
