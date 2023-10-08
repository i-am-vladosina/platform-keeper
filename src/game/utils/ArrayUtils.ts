import { SetUtils } from "./SetUtils";

export class ArrayUtils {
  public static union<T>(arrayA: T[], arrayB: T[]): T[] {
    return Array.from(SetUtils.union(new Set(arrayA), new Set(arrayB)));
  }

  public static difference<T>(arrayA: T[], arrayB: T[]): T[] {
    return Array.from(SetUtils.difference(new Set(arrayA), new Set(arrayB)));
  }

  public static unic<T>(array: T[]): T[] {
    return Array.from(new Set(array));
  }

  public static getLastItem<T>(array: T[]): T | undefined {
    return array[array.length - 1];
  }

  public static getFirstItem<T>(array: T[]): T | undefined {
    return array[0];
  }

  // генерирует массив упорядоченных чисел от start до stop включительно
  // range(1, 5, 1)) => [1,2,3,4,5]
  public static range(start: number, stop: number, step: number = 1): number[] {
    return Array.from({ length: (stop - start) / step + 1 }, (value, index) => start + index * step);
  }
}
