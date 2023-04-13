import { findRecipe } from "../../src/selectors/recipes";
import recipes from '../../src/data'

describe("File src/selectors/recipes", () => {
  describe("Function findRecipe", () => {
    test("Return recep if the slug is valid", () => {
      expect(findRecipe(recipes, recipes[0].slug)).toBe(recipes[0]);
    });
    test("Return undefined if the slug is not valid", () => {
      expect(findRecipe(recipes, 'xxxx')).toBeUndefined();
    });
  });
});
