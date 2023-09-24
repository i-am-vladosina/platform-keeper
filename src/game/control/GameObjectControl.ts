import { DisplayObject } from "pixi.js";

export type KeysCommands = Record<string, (e: KeyboardEvent) => void>;

export class GameObjectControl {
  private keysCommands: KeysCommands;

  constructor() {
    this.keysCommands = {};
    this.enable();
  }

  public setKeyCommands(keysCommands: KeysCommands) {
    this.keysCommands = keysCommands;
  }

  public destroy() {
    this.disable();
  }

  public enable() {
    document.body.addEventListener("keydown", this.handleKeyDownEvent);
  }

  public disable() {
    document.body.removeEventListener("keydown", this.handleKeyDownEvent);
  }

  private handleKeyDownEvent = (e: KeyboardEvent) => {
    // if (this.gameObject.destroyed) return;

    const keyCode = e.key;

    this.keysCommands[keyCode]?.(e);
  };
}
