import { Rectangle } from "../types";

export class DisplayObjectUtils {
  public static placeByParentCenter(parent: Rectangle, target: Rectangle) {
    target.x = parent.width / 2 - target.width / 2;
    target.y = parent.height / 2 - target.height / 2;
  }
}
