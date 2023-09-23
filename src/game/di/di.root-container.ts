import { EventEmitter } from "@pixi/utils";
import { Container, injected } from "brandi";
import { GameApplication } from "game/GameApplication";
import { config } from "game/config";
import { DisplayObject } from "pixi.js";
import { GameScene } from "../GameScene/GameScene";
import { Platform } from "../components/Platform";
import { GameObjectControl, KeysCommands } from "../control/GameObjectControl";
import { PlatformControl } from "../control/PlatformControl";
import { DI_TOKENS } from "./di.tokens";

export function createDiRootContainer() {
  const c = new Container();

  c.bind(DI_TOKENS.config).toConstant(config);

  injected(GameApplication, DI_TOKENS.gameScene);
  c.bind(DI_TOKENS.gameApplication).toInstance(GameApplication).inSingletonScope();

  injected(PlatformControl, DI_TOKENS.platform);
  c.bind(DI_TOKENS.platformControl).toInstance(PlatformControl).inResolutionScope();

  injected(Platform, DI_TOKENS.config);
  c.bind(DI_TOKENS.platform).toInstance(Platform).inResolutionScope();
  injected(GameScene, DI_TOKENS.platform, DI_TOKENS.platformControl);
  c.bind(DI_TOKENS.gameScene).toInstance(GameScene).inResolutionScope();

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
