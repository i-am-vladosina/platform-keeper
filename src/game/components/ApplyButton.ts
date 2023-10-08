import { FederatedPointerEvent, Sprite, Texture } from "pixi.js";
import buttonTexture from "src/game/assets/button.png";
import { Track } from "./Track/Track";

export class ApplyButton extends Sprite {
  constructor(private readonly track: Track) {
    super(Texture.from(buttonTexture));
    this.width = 50;
    this.height = 50;

    this.interactive = true;
    this.cursor = "pointer";
    this.on("click", this.handleClick);
  }

  public disable() {
    this.interactive = false;
  }

  public enable() {
    this.interactive = true;
  }

  private handleClick(e: FederatedPointerEvent) {
    this.track.check();
  }
}
