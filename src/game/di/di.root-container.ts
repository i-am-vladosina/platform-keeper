import { EventEmitter } from "@pixi/utils";
import { Container, injected } from "brandi";
import { GameApplication } from "game/GameApplication";
import { config } from "game/config";
import { GameScene } from "../GameScene/GameScene";
import { Ball } from "../components/Ball";
import { Field } from "../components/Field";
import { Platform } from "../components/Platform";
import { MovingControl } from "../control/MovingControl";
import { DI_TOKENS } from "./di.tokens";

export function createDiRootContainer() {
  const c = new Container();

  c.bind(DI_TOKENS.config).toConstant(config);

  injected(GameApplication, DI_TOKENS.gameScene);
  c.bind(DI_TOKENS.gameApplication).toInstance(GameApplication).inSingletonScope();

  c.bind(DI_TOKENS.movingControl).toInstance(MovingControl).inResolutionScope();

  injected(Platform, DI_TOKENS.config);
  c.bind(DI_TOKENS.platform).toInstance(Platform).inResolutionScope();

  injected(Ball, DI_TOKENS.config);
  c.bind(DI_TOKENS.ball).toInstance(Ball).inResolutionScope();

  injected(Field, DI_TOKENS.config);
  c.bind(DI_TOKENS.field).toInstance(Field).inResolutionScope();

  injected(GameScene, DI_TOKENS.platform, DI_TOKENS.ball, DI_TOKENS.field, DI_TOKENS.movingControl);
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
