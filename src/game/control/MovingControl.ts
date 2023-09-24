import { DisplayObject } from "pixi.js";
import { GameObjectControl } from "./GameObjectControl";

export class MovingControl extends GameObjectControl {
  private readonly SPEED: number = 5;
  public object: DisplayObject | null;

  constructor() {
    super();

    this.object = null;

    this.setKeyCommands({
      a: this.handleAKey,
      d: this.handleDKey,
      w: this.handleWKey,
      s: this.handleSKey,
    });
  }

  public setMovingObject(object: DisplayObject) {
    if (this.object) {
      this.disable();
    }

    this.object = object;

    this.enable();
  }

  private handleAKey = (e: KeyboardEvent) => {
    if (!this.object) return;

    this.object.x -= this.SPEED;
  };

  private handleWKey = (e: KeyboardEvent) => {
    if (!this.object) return;

    this.object.y -= this.SPEED;
  };

  private handleDKey = (e: KeyboardEvent) => {
    if (!this.object) return;

    this.object.x += this.SPEED;
  };

  private handleSKey = (e: KeyboardEvent) => {
    if (!this.object) return;

    this.object.y += this.SPEED;
  };
}
