import user from '../../src/reducers/user';
import { getTextFieldLogin, loginSuccess } from '../../src/actions/user';

describe('User reducer', () => {

   const expectedInitialState = {
    logged: false,
    email: '',
    password: '',
    pseudo: '',
  }
  test('should return expected initial state', () => {
    expect(user(expectedInitialState, {})).toEqual(expectedInitialState);
   })

   const stateWithEmail = {
    logged: false,
    email: 'john@yahoo.fr',
    password: '',
    pseudo: '',
   }
   const payloadEmail = getTextFieldLogin('john@yahoo.fr', 'email');

  test('Check GET_TEXT_FIELDS_LOGIN action', () => { 
    expect(user(expectedInitialState, payloadEmail)).toEqual(stateWithEmail);
   })

   const stateWithPassword = {
    logged: false,
    email: '',
    password: '1234',
    pseudo: '',
   }
   const payloadPassword = getTextFieldLogin('1234', 'password');

  test('Check GET_TEXT_FIELDS_LOGIN action', () => { 
    expect(user(expectedInitialState, payloadPassword)).toEqual(stateWithPassword);
   })

   const stateBeforeLogin = {
    logged: true,
    email: '',
    password: '',
    pseudo: 'john',
   }
   const payloadLogin = loginSuccess(true, 'john');

  test('Check GET_TEXT_FIELDS_LOGIN action', () => { 
    expect(user(expectedInitialState, payloadLogin)).toEqual(stateBeforeLogin);
   })
})
