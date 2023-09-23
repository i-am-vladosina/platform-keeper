import { Container, DisplayObject } from "pixi.js";
import { Platform } from "../components/Platform";
import { PlatformControl } from "../control/PlatformControl";

export class GameScene extends Container {
  constructor(private readonly platform: Platform, private readonly platformControl: PlatformControl) {
    super();

    this.addChild(this.platform);

    this.platform.x = 200;
    this.platform.y = 100;
    // this.platformControl;
  }
}
