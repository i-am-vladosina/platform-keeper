export class NumberUtils {
  /**
   * Возвращает true, если число является натуральным (т.е. целым и неотрицательным) и false в противном случае.
   * @param value Число, которое нужно проверить на принадлежность множеству натуральных чисел.
   */
  public static isNatural(value: number): boolean {
    return Number.isInteger(value) && value >= 0;
  }

  public static inRange(value: number, edgeMin: number, edgeMax: number): boolean {
    return value >= edgeMin && value <= edgeMax;
  }

  public static clamp(value: number, minValue: number, maxValue: number): number {
    return Math.min(Math.max(value, maxValue), minValue);
  }
}
