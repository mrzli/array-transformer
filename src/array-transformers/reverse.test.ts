import { describe, expect, it } from '@jest/globals';
import { reverse } from './reverse';

describe('reverse', () => {
  describe('reverse()', () => {
    interface Example {
      readonly input: readonly number[];
      readonly expected: {
        readonly updated: readonly number[];
        readonly original: readonly number[];
      };
    }

    const EXAMPLES: readonly Example[] = [
      {
        input: [],
        expected: {
          updated: [],
          original: [],
        },
      },
      {
        input: [1],
        expected: {
          updated: [1],
          original: [1],
        },
      },
      {
        input: [1, 3, 5],
        expected: {
          updated: [5, 3, 1],
          original: [1, 3, 5],
        },
      },
    ];

    for (const example of EXAMPLES) {
      it(JSON.stringify(example), () => {
        const original = example.input;
        const actual = reverse(example.input);
        expect(original).toEqual(example.expected.original);
        expect(actual).toEqual(example.expected.updated);
      });
    }
  });
});
