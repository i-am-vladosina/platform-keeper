import { Container } from "pixi.js";
import { NumberUtils } from "../utils/NumberUtils";

export class ContainDetector {
  public static isRectContainRect(target: Container, rectContainer: Container) {
    const { x: rectContainerX, y: rectContainerY } = rectContainer.getGlobalPosition();
    const { x: targetX, y: targetY } = target.getGlobalPosition();

    const xOverlap =
      NumberUtils.inRange(rectContainerX, targetX, targetX + target.width) &&
      NumberUtils.inRange(rectContainerX + rectContainer.width, targetX, targetX + target.width);

    const yOverlap =
      NumberUtils.inRange(rectContainerY, targetY, targetY + target.height) &&
      NumberUtils.inRange(rectContainerY + rectContainer.height, targetY, targetY + target.height);

    return xOverlap && yOverlap;
  }
}
