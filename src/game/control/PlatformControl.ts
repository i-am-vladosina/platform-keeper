import { Platform } from "../components/Platform";
import { GameObjectControl } from "./GameObjectControl";

export class PlatformControl extends GameObjectControl<Platform> {
  constructor(platform: Platform) {
    super(platform);

    this.setKeyCommands({
      a: this.handleAKey,
      d: this.handleDKey,
      w: this.handleWKey,
      s: this.handleSKey,
    });
  }

  private handleAKey = (e: KeyboardEvent, platform: Platform) => {
    platform.x -= 1;
  };

  private handleWKey = (e: KeyboardEvent, platform: Platform) => {
    platform.y -= 1;
  };

  private handleDKey = (e: KeyboardEvent, platform: Platform) => {
    platform.x += 1;
  };

  private handleSKey = (e: KeyboardEvent, platform: Platform) => {
    platform.y += 1;
  };
}
