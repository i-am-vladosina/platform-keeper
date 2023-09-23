import { Graphics } from "pixi.js";
import { Config } from "../config";

interface GameObject {
  create(): void;
}

export class Platform extends Graphics implements GameObject {
  constructor(private readonly config: Config) {
    super();

    this.create();
  }

  public create(): void {
    const { width, height, fillColor } = this.config.game.platform;
    this.beginFill(fillColor).drawRect(0, 0, width, height).endFill();
  }
}
