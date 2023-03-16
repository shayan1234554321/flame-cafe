import handleItemsCount from './modules/pagination.js';

const tempMeals = [
  {
    item: 1,
  },
  {
    item: 2,
  },
  {
    item: 3,
  },
  {
    item: 4,
  },
];

describe('Counting Meals', () => {
  test('0 meals count', () => {
    expect(handleItemsCount([])).toBe(0);
  });
  test('4 meals count', () => {
    expect(handleItemsCount(tempMeals)).toBe(4);
  });
});