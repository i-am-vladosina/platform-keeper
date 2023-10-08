import { Container, Graphics, Sprite, Texture, TilingSprite, WRAP_MODES } from "pixi.js";
import texture from "src/game/assets/blue.png";
import { Config } from "../config";
import { GameObject } from "./GameObject";

export class Field extends Container<Sprite> implements GameObject {
  constructor(private readonly config: Config) {
    super();

    this.create();
  }

  public create(): void {
    const { width, height, fillColor, strokeColor, lineWidth } = this.config.game.field;
    const txt = Texture.from(texture);
    txt.baseTexture.wrapMode = WRAP_MODES.REPEAT;

    const top = new TilingSprite(txt, width, height);
    // top.width = width;
    // top.height = height;

    const right = new TilingSprite(txt);
    right.x = width - height;
    right.y = height;
    right.width = height;
    right.height = width;

    const bottom = new TilingSprite(txt);
    bottom.x = 0;
    bottom.y = width;
    bottom.width = width;
    bottom.height = height;

    const left = new TilingSprite(txt);
    left.x = 0;
    left.y = height;
    left.width = height;
    left.height = width - height;

    this.addChild(top, right, bottom, left);
  }
}
