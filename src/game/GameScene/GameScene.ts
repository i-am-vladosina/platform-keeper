import { Container, DisplayObject, Ticker } from "pixi.js";
import { CollisionDetector } from "../collisions/CollisionsDetector";
import { Ball } from "../components/Ball";
import { Field } from "../components/Field";
import { Platform } from "../components/Platform";
import { MovingControl } from "../control/MovingControl";

export class GameScene extends Container {
  constructor(
    private readonly platform: Platform,
    private readonly ball: Ball,
    private readonly field: Field,
    private readonly movingControl: MovingControl
  ) {
    super();

    this.addChild(this.field);
    this.field.x = 200;
    this.field.y = 100;

    this.addChild(this.platform);

    this.platform.x = 600;
    this.platform.y = 400;

    this.addChild(this.ball);
    this.ball.x = 500;
    this.ball.y = 360;

    this.movingControl.setMovingObject(this.ball);

    Ticker.shared.add(this.update);
  }

  private update = () => {
    const { width, height } = this.field.children[2];
    const { x, y } = this.field.children[2].getGlobalPosition();
    // console.log(width, height);
    // console.log(x, y);
    console.log(CollisionDetector.isRectIntersectsCircle(this.platform, this.ball));
  };
}
