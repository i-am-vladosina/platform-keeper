import { DisplayObject } from "pixi.js";

export type KeysCommands<G extends DisplayObject> = Record<string, (e: KeyboardEvent, gameObject: G) => void>;

export class GameObjectControl<G extends DisplayObject> {
  private keysCommands: KeysCommands<G>;

  constructor(private readonly gameObject: G) {
    this.keysCommands = {};
    this.enable();
  }

  public setKeyCommands(keysCommands: KeysCommands<G>) {
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
    if (this.gameObject.destroyed) return;

    const keyCode = e.key;

    this.keysCommands[keyCode]?.(e, this.gameObject);
  };
}
