import { Container, DisplayObject } from "pixi.js";
import { Ball } from "../components/Ball";
import { Field } from "../components/Field";
import { Platform } from "../components/Platform";
import { PlatformControl } from "../control/PlatformControl";

export class GameScene extends Container {
  constructor(
    private readonly platform: Platform,
    private readonly ball: Ball,
    private readonly field: Field,
    private readonly platformControl: PlatformControl
  ) {
    super();

    this.addChild(this.field);

    this.addChild(this.platform);

    this.platform.x = 200;
    this.platform.y = 100;
    // this.platformControl;

    this.addChild(this.ball);
    this.ball.x = 300;
    this.ball.y = 600;
  }
}
