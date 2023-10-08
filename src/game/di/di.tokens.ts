import { EventEmitter } from "@pixi/utils";
import { Factory, token } from "brandi";
import { GameApplication } from "game/GameApplication";
import { Config } from "game/config";
import { Pane } from "tweakpane";
import { GameScene } from "../GameScene/GameScene";
import { Ball } from "../components/Ball";
import { Field } from "../components/Field";
import { Platform } from "../components/Platform";
import { Track } from "../components/Track/Track";
import { TrackModel } from "../components/Track/TrackModel";
import { MovingControl } from "../control/MovingControl";
import { PseudoRandom } from "../utils/random/PseudoRandom";
import { Random } from "../utils/random/Random";

export const DI_TOKENS = {
  config: token<Config>("config"),

  //
  gameApplication: token<GameApplication>("gameApplication"),
  gameScene: token<GameScene>("gameScene"),
  platform: token<Platform>("platform"),
  ball: token<Ball>("ball"),
  field: token<Field>("field"),
  track: token<Track>("track"),
  movingControl: token<MovingControl>("movingControl"),
  trackModel: token<TrackModel>("trackModel"),
  random: token<Random>("random"),
  pseudoRandom: token<PseudoRandom>("pseudoRandom"),
  // тулзы
  eventEmitter: token<EventEmitter>("eventEmitter"),
  pane: token<Pane>("pane"),

  //
};
