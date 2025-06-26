import { describe, expect, test } from 'vitest';

const describes = Array.from({ length: 100 }).map((_, i) => ({ index: i + 1 }));
const tests = Array.from({ length: 100 }).map((_, i) => ({ index: i + 1 }));

describe.each(describes)('describe $index', () => {
  test.each(tests)(`example test $index`, ({ index }) => {
    expect(true).toBe(index % 2 === 0);
  });
});