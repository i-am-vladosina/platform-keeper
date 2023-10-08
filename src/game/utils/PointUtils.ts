import { Point } from "pixi.js";

export class PointUtils {
  public static distance(p1: Point, p2: Point): number {
    return Math.sqrt(PointUtils.squaredDistance(p1, p2));
  }

  public static squaredDistance(p1: Point, p2: Point): number {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }

  public static add(p1: Point, p2: Point): Point {
    return new Point(p1.x + p2.x, p1.y + p2.y);
  }

  public static subtract(p1: Point, p2: Point): Point {
    return new Point(p1.x - p2.x, p1.y - p2.y);
  }
}
