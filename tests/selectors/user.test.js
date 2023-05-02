import { manageSessionStorage, checkLoginStatus } from 'src/selectors/user.js';

describe('manageSessionStorage', () => {
  test('should set and get item from sessionStorage', () => {
    const key = 'testKey';
    const value = 'testValue';

    manageSessionStorage('set', key, value);
    const result = manageSessionStorage('get', key);
    expect(result).toEqual(value);
  });

  test('should remove item from sessionStorage', () => {
    const key = 'testKey';
    const value = 'testValue';

    manageSessionStorage('set', key, value);
    manageSessionStorage('remove', key);
    const result = manageSessionStorage('get', key);
    expect(result).toEqual(null);
  });
});

describe('checkLoginStatus', () => {
  test('should return true if logStatus is truthy', () => {
    const result = checkLoginStatus(true);
    expect(result).toEqual(true);
  });

  test('should return false if logStatus is falsy', () => {
    const result = checkLoginStatus(false);
    expect(result).toEqual(false);
  });
});
