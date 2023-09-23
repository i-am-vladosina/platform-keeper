import { EventEmitter } from "@pixi/utils";
import { Container, injected } from "brandi";
import { GameApplication } from "game/GameApplication";
import { config } from "game/config";
import { DI_TOKENS } from "./di.tokens";

export function createDiRootContainer() {
  const c = new Container();

  c.bind(DI_TOKENS.config).toConstant(config);

  c.bind(DI_TOKENS.gameApplication).toInstance(GameApplication).inSingletonScope();

  c.bind(DI_TOKENS.eventEmitter).toInstance(EventEmitter).inTransientScope();
  // c.bind(DI_TOKENS.pane)
  //   .toInstance(() => new Pane())
  //   .inSingletonScope();

  return c;
}

export const getOrCreateDiRootContainer = (() => {
  let c: Container;
  return () => {
    c = c || createDiRootContainer();
    return c;
  };
})();
