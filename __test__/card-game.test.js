import { test, expect, describe } from "@jest/globals";
import { suitCard, rankCard } from "../src/components/gameScreen";

describe("test function suitCard()", () => {
  test("should return the string 'ошибка', if value = 0", () => {
    expect(suitCard(0)).toBe("ошибка");
  });
  test("should return the string 'пики', if value = 1", () => {
    expect(suitCard(1)).toBe("пики");
  });
  test("should return the string 'черви', if value = 2", () => {
    expect(suitCard(2)).toBe("черви");
  });
  test("should return the string 'бубны', if value = 3", () => {
    expect(suitCard(3)).toBe("бубны");
  });
  test("should return the string 'крести', if value = 4", () => {
    expect(suitCard(4)).toBe("крести");
  });
});
describe("test function rankCard()", () => {
  test("should return the string 'ошибка', if value = -1", () => {
    expect(suitCard(-1)).toBe("ошибка");
  });
  test("should return the string 'ошибка', if value = 5", () => {
    expect(suitCard(5)).toBe("ошибка");
  });
  test("should return the string '6', if value = 6", () => {
    expect(rankCard(6)).toBe("6");
  });
  test("should return the string '7', if value = 7", () => {
    expect(rankCard(7)).toBe("7");
  });
  test("should return the string '8', if value = 8", () => {
    expect(rankCard(8)).toBe("8");
  });
  test("should return the string '9', if value = 9", () => {
    expect(rankCard(9)).toBe("9");
  });
  test("should return the string '10', if value = 10", () => {
    expect(rankCard(10)).toBe("10");
  });
  test("should return the string 'валет', if value = 11", () => {
    expect(rankCard(11)).toBe("валет");
  });
  test("should return the string 'дама', if value = 12", () => {
    expect(rankCard(12)).toBe("дама");
  });
  test("should return the string 'король', if value = 13", () => {
    expect(rankCard(13)).toBe("король");
  });
  test("should return the string 'туз', if value = 14", () => {
    expect(rankCard(14)).toBe("туз");
  });
  test("should return the string 'ошибка', if value = 100", () => {
    expect(rankCard(100)).toBe("ошибка");
  });
});
