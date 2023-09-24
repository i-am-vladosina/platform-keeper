import { NumberUtils } from "../utils/NumberUtils";

export interface CollisionRectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface CollisionCircle {
  x: number;
  y: number;
  radius: number;
}

export class CollisionDetector {
  public static isRectIntersectsRect(rectA: CollisionRectangle, rectB: CollisionRectangle): boolean {
    const xOverlap =
      NumberUtils.valueInRange(rectA.x, rectB.x, rectB.x + rectB.width) ||
      NumberUtils.valueInRange(rectB.x, rectA.x, rectA.x + rectA.width);

    const yOverlap =
      NumberUtils.valueInRange(rectA.y, rectB.y, rectB.y + rectB.height) ||
      NumberUtils.valueInRange(rectB.y, rectA.y, rectA.y + rectA.height);

    return xOverlap && yOverlap;
  }

  public static isCircleIntersectsCircle(circleA: CollisionCircle, circleB: CollisionCircle): boolean {
    return (
      CollisionDetector.squaredDistance(circleA.x, circleB.x, circleA.y, circleB.y) <
      Math.pow(circleA.radius + circleB.radius, 2)
    );
  }

  // https://stackoverflow.com/questions/401847/circle-rectangle-collision-detection-intersection
  public static isRectIntersectsCircle(rect: CollisionRectangle, circle: CollisionCircle): boolean {
    const circleDistanceX = Math.abs(circle.x - (rect.x + rect.width / 2));
    const circleDistanceY = Math.abs(circle.y - (rect.y + rect.height / 2));

    if (circleDistanceX > rect.width / 2 + circle.radius) return false;

    if (circleDistanceY > rect.height / 2 + circle.radius) return false;

    if (circleDistanceX <= rect.width / 2) return true;

    if (circleDistanceY <= rect.height / 2) return true;

    const squaredCornerDistance = CollisionDetector.squaredDistance(
      circleDistanceX,
      rect.width / 2,
      circleDistanceY,
      rect.height / 2
    );

    return squaredCornerDistance <= Math.pow(circle.radius, 2);
  }

  public static distance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(CollisionDetector.squaredDistance(x1, y1, x2, y2));
  }

  public static squaredDistance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
  }
}
