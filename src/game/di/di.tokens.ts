import { EventEmitter } from "@pixi/utils";
import { Factory, token } from "brandi";
import { GameApplication } from "game/GameApplication";
import { Config } from "game/config";
import { Pane } from "tweakpane";

export const DI_TOKENS = {
  config: token<Config>("config"),

  //
  gameApplication: token<GameApplication>("gameApplication"),
  // тулзы
  eventEmitter: token<EventEmitter>("eventEmitter"),
  pane: token<Pane>("pane"),
};
