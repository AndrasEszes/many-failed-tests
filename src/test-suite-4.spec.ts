import { faker } from '@faker-js/faker';
import { expect, test } from 'vitest';

const tests = Array.from({ length: 5000 }).map((_, i) => ({ title: faker.hacker.phrase(), index: i + 1 }));

test.each(tests)(`$title`, ({ index }) => {
  const actual = faker.helpers.multiple(() => ({
    message: faker.hacker.phrase(),
    summary: faker.hacker.phrase(),
    description: faker.hacker.phrase(),
  }), { count: { min: 2, max: 5 } });

  const expected = index % 10 === 0 ? faker.helpers.multiple(() => ({
    message: faker.hacker.phrase(),
    summary: faker.hacker.phrase(),
    description: faker.hacker.phrase(),
  }), { count: { min: 2, max: 5 } }) : actual;

  expect(actual).toEqual(expected);
});