import { validateEmail, validatePassword } from 'src/selectors/register.js';

describe('validateEmail', () => {
  test('returns true when given a valid email', () => {
    const result = validateEmail('test@example.com');
    expect(result).toBe(true);
  });

  test('returns false when given an invalid email', () => {
    const result = validateEmail('invalid-email');
    expect(result).toBe(false);
  });
});

describe('validatePassword', () => {
  test('returns true when given a valid password', () => {
    const result = validatePassword('MyPa$$w0rd');
    expect(result).toBe(true);
  });

  test('returns false when given an invalid password', () => {
    const result = validatePassword('weakpassword');
    expect(result).toBe(false);
  });
});
