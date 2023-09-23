import { EventEmitter } from "@pixi/utils";
import { Factory, token } from "brandi";
import { GameApplication } from "game/GameApplication";
import { Config } from "game/config";
import { Pane } from "tweakpane";
import { GameScene } from "../GameScene/GameScene";
import { Ball } from "../components/Ball";
import { Platform } from "../components/Platform";
import { GameObjectControl } from "../control/GameObjectControl";
import { PlatformControl } from "../control/PlatformControl";

export const DI_TOKENS = {
  config: token<Config>("config"),

  //
  gameApplication: token<GameApplication>("gameApplication"),
  gameScene: token<GameScene>("gameScene"),
  platform: token<Platform>("platform"),
  ball: token<Ball>("ball"),
  platformControl: token<PlatformControl>("platformControl"),
  // тулзы
  eventEmitter: token<EventEmitter>("eventEmitter"),
  pane: token<Pane>("pane"),

  //
};
