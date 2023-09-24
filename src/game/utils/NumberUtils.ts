export class NumberUtils {
  public static valueInRange(value: number, min: number, max: number): boolean {
    return value >= min && value <= max;
  }
}
