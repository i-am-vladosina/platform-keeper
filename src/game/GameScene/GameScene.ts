import { Container, DisplayObject, Ticker } from "pixi.js";
import { CollisionDetector } from "../collisions/CollisionsDetector";
import { ApplyButton } from "../components/ApplyButton";
import { Ball } from "../components/Ball";
import { Field } from "../components/Field";
import { Platform } from "../components/Platform";
import { Track } from "../components/Track/Track";
import { MovingControl } from "../control/MovingControl";

export class GameScene extends Container {
  private applyButton: ApplyButton;

  constructor(
    // private readonly platform: Platform,
    // private readonly ball: Ball,
    // private readonly field: Field,
    // private readonly movingControl: MovingControl
    private readonly track: Track
  ) {
    super();

    this.addChild(this.track);
    this.track.x = 50;
    this.track.y = 100;

    this.applyButton = new ApplyButton(this.track);
    this.applyButton.x = this.track.x + this.track.backgroundWidth / 2 - this.applyButton.width / 2;
    this.applyButton.y = this.track.y + this.track.height + 20;

    this.addChild(this.applyButton);

    Ticker.shared.add(this.update);
  }

  private update = () => {
    this.track.update();
  };
}
