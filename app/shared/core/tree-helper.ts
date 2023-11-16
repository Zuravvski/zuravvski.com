import { Optional } from "./optional";

type ChildrenProperty<T, TKey extends keyof T> = T[TKey] extends Optional<T[]>
  ? TKey
  : never;

export class TreeHelper {
  static toTree<
    T extends object,
    TKey extends keyof T,
    TChildren extends keyof T
  >(
    array: T[],
    idSelector: (item: T) => T[TKey],
    parentIdSelector: (item: T) => Optional<T[TKey]>,
    childrenProperty: ChildrenProperty<T, TChildren>
  ): T[] {
    const lookup = array.reduce((accumulator, item) => {
      accumulator.set(idSelector(item), item);
      return accumulator;
    }, new Map<TKey, T>());

    const roots: T[] = [];

    for (const item of array) {
      const parentId = parentIdSelector(item);
      if (parentId) {
        const parent = lookup.get(parentId) as T &
          Optional<{ [childrenProperty: string]: T[] }>;

        if (!parent[childrenProperty]) {
          (parent[childrenProperty] as T[]) = [];
        }

        parent[childrenProperty].push(item);
      } else {
        roots.push(item);
      }
    }

    return roots;
  }
}
