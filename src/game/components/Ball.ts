import { Graphics } from "pixi.js";
import { Config } from "../config";
import { GameObject } from "./GameObject";

export class Ball extends Graphics implements GameObject {
  public radius: number = this.config.game.ball.radius;

  constructor(private readonly config: Config) {
    super();

    this.create();
  }

  public create(): void {
    const { radius, fillColor } = this.config.game.ball;
    this.beginFill(fillColor).drawCircle(0, 0, radius).endFill();
  }
}
