export function reverse<T>(array: readonly T[]): readonly T[] {
  return [...array].reverse();
}
