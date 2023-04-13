import recipes from '../../src/data'
import { welcomeMessage } from '../../src/selectors/message';
 const array = []

describe("File src/selectors/message", () => {
  describe("Function welcomeMessage", () => {
    test("Return message text if the length of the array is equal to 2", () => {
      expect(welcomeMessage(recipes)).toBe('Bienvenue sur oRecipes, découvre nos 2 recettes');
    });
    test("Return message text if the length of the array is equal to 0", () => {
      expect(welcomeMessage(array)).toBe('Bienvenue sur oRecipes. Reviens bientôt pour découvrir nos recettes');
    });
  });
});
