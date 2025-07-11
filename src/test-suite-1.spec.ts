import { faker } from '@faker-js/faker';
import { describe, expect, test } from 'vitest';

const describes = Array.from({ length: faker.number.int({ min: 20, max: 40 }) }).map(() => ({ title: faker.company.catchPhrase() }));
const tests = Array.from({ length: faker.number.int({ min: 20, max: 40 }) }).map((_, i) => ({ title: faker.hacker.phrase(), index: i + 1 }));

describe.each(describes)('$title', () => {
  test.each(tests)(`$title`, ({ index }) => {
    const actual = faker.helpers.multiple(() => ({
      message: faker.hacker.phrase(),
      summary: faker.hacker.phrase(),
      description: faker.hacker.phrase(),
    }), { count: { min: 2, max: 5 } });

    const expected = index % 2 === 0 ? actual : faker.helpers.multiple(() => ({
      message: faker.hacker.phrase(),
      summary: faker.hacker.phrase(),
      description: faker.hacker.phrase(),
    }), { count: { min: 2, max: 5 } });

    expect(actual).toEqual(expected);
  });
});