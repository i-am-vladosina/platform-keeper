import { Container, Graphics, Sprite, Texture, WRAP_MODES } from "pixi.js";
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

    const top = new Sprite(txt);
    top.width = width;
    top.height = height;

    const right = new Sprite(txt);
    right.x = width - height;
    right.y = height;
    right.width = height;
    right.height = width;

    // const right = new Graphics()
    //   .lineStyle(lineWidth, strokeColor)
    //   .beginFill(0x09ffea)
    //   .drawRect(width - height, height, height, width)
    //   .endFill();

    const bottom = new Sprite(txt);
    bottom.x = 0;
    bottom.y = width;
    bottom.width = width;
    bottom.height = height;
    // const bottom = new Graphics()
    //   .lineStyle(lineWidth, strokeColor)
    //   .beginFill(0x0000ff)
    //   .drawRect(0, width, width, height)
    //   .endFill();
    const left = new Sprite(txt);
    left.x = 0;
    left.y = height;
    left.width = height;
    left.height = width - height;
    // const left = new Graphics()
    //   .lineStyle(lineWidth, strokeColor)
    //   .beginFill(0xffff00)
    //   .drawRect(0, height, height, width - height)
    //   .endFill();

    this.addChild(top, right, bottom, left);
  }
}
