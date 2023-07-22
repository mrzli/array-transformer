# Array Transformers

This library contains some utilities for transforming arrays.

## Installation

```bash
npm install --save @gmjs/array-transformers
```

## API

### `filterOutNullish`

Filtered out `null` and `undefined` values from an array. More precisely, it returns a copy of the array with all `null` and `undefined` values removed, while leaving the original array unchanged.

The returned array will be properly typed, so that TypeScript will know that it does not contain `null` or `undefined` values.

```ts
const original: readonly (number | null | undefined)[] = [1, null, 2, undefined, 3];
const filtered = filterOutNullish(original); // typed as 'readonly number[]'
console.log(filtered);
// [1, 2, 3]
```

### `reverse`

Reverses an array. More precisely, it returns a copy of the array with the elements in reverse order, while leaving the original array unchanged.

```ts
const original = [1, 2, 3];
const reversed = reverse(original);
console.log(reversed);
// [3, 2, 1]
```
