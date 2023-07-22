/* eslint-disable unicorn/no-null */
import { describe, expect, it } from '@jest/globals';
import { filterOutNullish } from './filter-out-nullish';

describe('filter-out-nullish', () => {
  describe('filterOutNullish()', () => {
    interface Example {
      readonly input: readonly unknown[];
      readonly expected: readonly unknown[];
    }

    const EXAMPLES: readonly Example[] = [
      {
        input: [],
        expected: [],
      },
      {
        input: [undefined],
        expected: [],
      },
      {
        input: [null],
        expected: [],
      },
      {
        input: [0],
        expected: [0],
      },
      {
        input: [''],
        expected: [''],
      },
      {
        input: [false],
        expected: [false],
      },
      {
        input: [{}],
        expected: [{}],
      },
      {
        input: [[]],
        expected: [[]],
      },
      {
        input: ['value', '', undefined, 11, 0, null, {}, [], true, false],
        expected: ['value', '', 11, 0, {}, [], true, false],
      },
    ];

    for (const example of EXAMPLES) {
      it(JSON.stringify(example), () => {
        const actual = filterOutNullish(example.input);
        expect(actual).toEqual(example.expected);
      });
    }
  });
});
