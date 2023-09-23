import { Graphics } from "pixi.js";
import { Config } from "../config";
import { GameObject } from "./GameObject";

export class Field extends Graphics implements GameObject {
  constructor(private readonly config: Config) {
    super();

    this.create();
  }

  public create(): void {
    const { width, height, fillColor, strokeColor, lineWidth } = this.config.game.field;
    this.lineStyle(lineWidth, strokeColor).beginFill(fillColor).drawRect(0, 0, width, height).endFill();
  }
}
