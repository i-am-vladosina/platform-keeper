import { Container, Graphics, Sprite, Texture } from "pixi.js";
// import texture from "src/game/assets/blue.png";
import targetTexture from "src/game/assets/target.png";
import { ContainDetector } from "src/game/collisions/ContainDetector";
import { DisplayObjectUtils } from "src/game/utils/DisplayObjectUtills";
import { GameObject } from "../GameObject";
import { TRACK_STYLE } from "./Track.style";
import { TrackItem } from "./TrackItem";
import { TrackModel, TrackSystemItemStatus } from "./TrackModel";

export class Track extends Container implements GameObject {
  private backgroundRect!: Graphics;
  private target!: Sprite;
  private itemList!: Container<TrackItem>;

  constructor(private readonly trackModel: TrackModel) {
    super();

    this.create();
  }

  get backgroundWidth() {
    return this.backgroundRect.width;
  }

  public create() {
    const { backgroundRect, trackItemsGap } = TRACK_STYLE;
    this.backgroundRect = new Graphics()
      .lineStyle(backgroundRect.lineStyleWidth)
      .beginFill(0xffffff, 0)
      .drawRect(0, 0, backgroundRect.width, backgroundRect.height)
      .endFill();
    this.addChild(this.backgroundRect);

    this.target = new Sprite(Texture.from(targetTexture));
    this.target.height = this.backgroundRect.height - 10;
    this.target.width = this.target.height;

    DisplayObjectUtils.placeByParentCenter(this.backgroundRect, this.target);

    this.addChild(this.target);

    this.itemList = new Container();

    this.addChild(this.itemList);

    this.trackModel.generate(10);

    this.trackModel.items.forEach((item, key) => {
      if (item !== null) {
        const sprite = new TrackItem(item.id, this.trackModel);
        sprite.x = (trackItemsGap + sprite.width) * key;

        this.itemList.addChild(sprite);
      }
    });

    this.itemList.x = this.backgroundRect.x + this.backgroundRect.width + 20;
    this.itemList.y = this.backgroundRect.height / 2 - this.itemList.height / 2;
  }

  public update = () => {
    if (this.itemList.x + this.itemList.width <= this.backgroundRect.x) return;

    this.itemList.children.forEach((child) => {
      if (this.trackModel.getItemById(child.id)?.status === TrackSystemItemStatus.InQueue)
        if (child.getGlobalPosition().x + child.width < this.target.getGlobalPosition().x) {
          child.setFail();
        }
    });

    this.itemList.x -= 0.5;
  };

  public check() {
    this.itemList.children.forEach((child, key) => {
      if (ContainDetector.isRectContainRect(this.target, child)) {
        this.trackModel.setSuccess(key);
        child.setSuccesStatus();
      }
    });
  }
}
