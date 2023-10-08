import { Container, Graphics, Sprite, Texture } from "pixi.js";
import targetTexture from "src/game/assets/blue.png";
import { TrackModel } from "./TrackModel";

export class TrackItem extends Container {
  private readonly sprite: Sprite;
  private readonly successRect: Graphics;
  private readonly failRect: Graphics;

  constructor(public readonly id: number, private readonly trackModel: TrackModel) {
    super();
    this.sprite = new Sprite(Texture.from(targetTexture));

    this.sprite.width = 30;
    this.sprite.height = 30;

    this.addChild(this.sprite);

    this.successRect = new Graphics()
      .beginFill(0x00ff00, 0.4)
      .drawRect(0, 0, this.sprite.width, this.sprite.height)
      .endFill();
    this.successRect.visible = false;
    this.addChild(this.successRect);

    this.failRect = new Graphics()
      .beginFill(0xff0000, 0.4)
      .drawRect(0, 0, this.sprite.width, this.sprite.height)
      .endFill();
    this.failRect.visible = false;
    this.addChild(this.failRect);
  }

  public setSuccesStatus() {
    this.trackModel.setSuccess(this.id);
    this.successRect.visible = true;
  }

  public setFail() {
    this.trackModel.setFail(this.id);
    this.failRect.visible = true;
  }
}
