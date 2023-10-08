export class SetUtils {
  public static union<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    const union = new Set<T>(setA);
    for (const elem of setB) {
      union.add(elem);
    }
    return union;
  }

  public static difference<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    const difference = new Set<T>(setA);
    for (const elem of setB) {
      difference.delete(elem);
    }
    return difference;
  }

  public static intersection<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    const intersection = new Set<T>();
    for (const elem of setB) {
      if (setA.has(elem)) {
        intersection.add(elem);
      }
    }
    return intersection;
  }

  public static isSuperset<T>(set: Set<T>, subset: Set<T>): boolean {
    for (const elem of subset) {
      if (!set.has(elem)) return false;
    }
    return true;
  }

  public static isSetHasElement<T>(set: Set<T>, element: any): element is T {
    return set.has(element);
  }
}
