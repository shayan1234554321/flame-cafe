import handleItemsCount from './modules/pagination.js';
import commentsCounter from './modules/commentsCounter.js';

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

const comments = [
  {
    comment: 'Great',
    creation_date: '2023-03-16',
    username: 'Muhammed',
  },
  {
    comment: 'Great',
    creation_date: '2023-03-16',
    username: 'Muhammed',
  },
  {
    comment: 'Great',
    creation_date: '2023-03-16',
    username: 'Muhammed',
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

describe('Counting Comments', () => {
  test('0 comments count', () => {
    expect(commentsCounter([])).toBe(0);
  });
  test('3 Comments count', () => {
    expect(commentsCounter(comments)).toBe(3);
  });
});