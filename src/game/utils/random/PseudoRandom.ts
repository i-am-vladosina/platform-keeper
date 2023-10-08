import { ArrayUtils } from "../ArrayUtils";
import { IRandom } from "./IRandom";

// реализация метода Park-Miller-Carta
export class PseudoRandom implements IRandom {
  private prevValue!: number;
  public randomSeed!: number;
  private callsCounter!: number;

  public init(randomSeed: number, callsCounter: number = 0): void {
    this.randomSeed = Math.abs(Math.trunc(randomSeed));
    this.callsCounter = callsCounter;
    this.prevValue = this.randomSeed;
    this.initByCallsCounter();
  }

  public setRandomSeed(randomSeed: number): void {
    this.randomSeed = randomSeed;
    this.reset();
  }

  public setCallsCounter(callsCounter: number): void {
    this.reset();
    this.callsCounter = callsCounter;
    this.initByCallsCounter();
  }

  public reset(): void {
    this.callsCounter = 0;
    this.prevValue = this.randomSeed;
  }

  /**
   * Возвращает количество совершенных вызовов псевдорандомайзера
   */
  public getCallsCounter(): number {
    return this.callsCounter;
  }

  /**
   * Возвращает псевдорандомный массив, который имеет заданную длину, и при этом состоит из заданных элементов.
   * Пример: getRandomArray(['x', 'z', 'y'], 5) -> ['x', 'y', 'y', 'x', 'z'].
   * @param valuesArray Элементы, из которых будет состоять массив.
   * @param length Длина массива.
   */
  public getArrayFromValues<T>(valuesArray: T[], length: number): T[] {
    return ArrayUtils.range(0, length).map(() => this.getValueFromArray(valuesArray));
  }

  public generateArray(length: number, minValue: number, maxValue: number): number[] {
    return ArrayUtils.range(0, length).map(() => this.generateIntegerNumber(minValue, maxValue));
  }

  /**
   * Возвращает псевдорандомный элемент массива
   * @param valuesArray Массив, элемент из которого, будет выбран псевдорандомно
   */
  public getValueFromArray<T>(valuesArray: T[]): T {
    if (valuesArray.length === 0) {
      throw new Error("Пустой массив был передан в метод PseudoRandomizer.getPseudoRandomValueFromArray");
    }

    return valuesArray[this.getPseudoRandomArrayIndex(valuesArray.length)];
  }

  public generateIntegerNumber(min: number, max: number): number {
    return Math.floor(this.generateFloatNumber(min, max));
  }

  public generateFloatNumber(min: number, max: number): number {
    return ((this.random() - 1) / 2147483646) * (max - min + 1) + min;
  }

  // возвращает псевдорадомное целое число от 1 до 2^32
  private random(): number {
    this.prevValue = (this.prevValue * 16807) % 2147483647;
    this.callsCounter++;
    return this.prevValue;
  }

  // возвращает псевдорандомный индекс массива
  private getPseudoRandomArrayIndex(arrayLength: number): number {
    return this.generateIntegerNumber(0, arrayLength - 1);
  }

  private initByCallsCounter(): void {
    for (let i = 0; i < this.callsCounter; i++) {
      this.random();
    }
  }
}
