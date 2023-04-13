import recipes from 'src/reducers/recipes';
import { SetRecipesInState } from 'src/actions/recipes';
import recipesData from 'src/data';

describe('reducer for recipes', () => {

  test('check initial state', () => {
    
    const expectedInitialState = {
      list: [],
    };
    const actualInitialState = recipes(undefined, {});
    expect(actualInitialState).toEqual(expectedInitialState);
  });

  test('check treatment of action SET_RECIPES_IN_STATE', () => {
    const stateBefore = {
      list: []
    };
    const payload = recipesData;
    const action = SetRecipesInState(payload);

    const expectedStateAfter = {
      list: payload,
    };

    expect(recipes(stateBefore, action)).toEqual(expectedStateAfter);
  });
});
