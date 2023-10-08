export interface IRandom {
  generateArray(length: number, minValue: number, maxValue: number, isInteger?: boolean): number[];
  generateIntegerNumber(min: number, max: number): number;
  generateFloatNumber(min: number, max: number): number;
  getValueFromArray<T>(valuesArray: T[]): T;
}
