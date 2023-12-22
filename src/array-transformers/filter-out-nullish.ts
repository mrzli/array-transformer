export function filterOutNullish<T>(
  array: readonly T[],
): readonly NonNullable<T>[] {
  return array.filter(
    (item) => item !== null && item !== undefined,
  ) as unknown as readonly NonNullable<T>[];
}
