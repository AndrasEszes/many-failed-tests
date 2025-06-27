import { faker } from '@faker-js/faker';
import { describe, expect, test } from 'vitest';

const describes = Array.from({ length: faker.number.int({ min: 3, max: 10 }) }).map(() => ({ title: faker.company.catchPhrase() }));
const tests = Array.from({ length: faker.number.int({ min: 5, max: 15 }) }).map((_, i) => ({ title: faker.hacker.phrase(), index: i + 1 }));

describe.each(describes)('$title', () => {
  test.each(tests)(`$title`, ({ index }) => {
    expect(true).toBe(index % 2 === 0);
  });
});