import { sum } from "../../src/utils/math";
describe("File src/utils/math", () => {
  describe("Function sum", () => {
    test("adds 1 + 2 to equal 3", () => {
      expect(sum(1, 2)).toBe(3);
    });
  });
  describe("Function sum with negative number", () => {
    test("adds -6 + 3 to equal -3", () => {
      expect(sum(-6, 3)).toBe(-3);
    });
  });
});
