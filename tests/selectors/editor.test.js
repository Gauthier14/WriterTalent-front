import { filterArray, toolbarParams, getCategoriesIds } from 'src/selectors/editor.js';

describe('filterArray', () => {
  it('should add item to array if item not included in array', () => {
    const array = [1, 2, 3];
    const itemToAdd = 4;
    const result = filterArray(itemToAdd, array);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should remove item from array if item already included in array', () => {
    const array = [1, 2, 3];
    const itemToRemove = 2;
    const result = filterArray(itemToRemove, array);
    expect(result).toEqual([1, 3]);
  });
});

describe('getCategoriesIds', () => {
  it('should return an array of category ids', () => {
    const categories = [      { id: 1, name: 'Category 1' },      { id: 2, name: 'Category 2' },      { id: 3, name: 'Category 3' },    ];
    const result = getCategoriesIds(categories);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should return an empty array if categories is empty', () => {
    const categories = [];
    const result = getCategoriesIds(categories);
    expect(result).toEqual([]);
  });
});

// This unit test covers the filterArray and getCategoriesIds functions and tests their behaviour in different scenarios. The test checks that the output of the function is equal to the expected value using the expect method provided by Jest.
