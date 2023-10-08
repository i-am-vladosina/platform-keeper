import { ArrayUtils } from "../ArrayUtils";
import { IRandom } from "./IRandom";

export class Random implements IRandom {
  public generateArray(length: number, minValue: number, maxValue: number, isInteger: boolean = true): number[] {
    return ArrayUtils.range(0, length).map(() =>
      this[isInteger ? "generateIntegerNumber" : "generateFloatNumber"](minValue, maxValue)
    );
  }

  public generateIntegerNumber(min: number, max: number): number {
    return Math.floor(this.generateFloatNumber(min, max));
  }

  public generateFloatNumber(min: number, max: number): number {
    return Math.random() * (max - min + 1) + min;
  }

  /**
   * Возвращает псевдорандомный элемент массива
   * @param valuesArray Массив, элемент из которого, будет выбран псевдорандомно
   */
  public getValueFromArray<T>(valuesArray: T[]): T {
    if (valuesArray.length === 0) {
      throw new Error("Пустой массив был передан в метод Random.getValueFromArray");
    }

    return valuesArray[this.getRandomArrayIndex(valuesArray.length)];
  }

  // возвращает псевдорандомный индекс массива
  private getRandomArrayIndex(arrayLength: number): number {
    return this.generateIntegerNumber(0, arrayLength - 1);
  }
}
