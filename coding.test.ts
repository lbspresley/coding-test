import {
  checkPermutation,
  checkPermutation2,
  chunk,
  deepClone,
  flatten,
  isPalindrome,
  isUnique,
  numSetBits,
} from "./coding";

describe("test", () => {
  const num = 11;
  const str: string = num.toString(2);
  console.log("🚀 ~ describe ~ str:", str);
  const aa = str.split("1");
  console.log("🚀 ~ describe ~ aa:", aa);
  const a = [1, 2, 3, [4], [5, [6]]];
  console.log("🚀 ~ describe ~ slice(0, 2):", a.slice(0, 2));
  console.log("🚀 ~ describe ~ slice():", a.slice());
  expect(a.slice(0, 2)).toEqual([1, 2]);
});

describe("chunk", () => {
  it("should split an array into chunks of a given size", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
  it("should split an array into chunks of a given size", () => {
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });
  it("should split an array into chunks of a given size", () => {
    expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
  });
  it("should split an array into chunks of a given size", () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10],
    ]);
  });
});

describe("flatten", () => {
  it("should flatten an array", () => {
    const result = flatten([1, [2, [3, [4, [5]]]]]);
    console.log("🚀 ~ it ~ result:", result);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  it("should flatten an array to a given depth", () => {
    const result = flatten([1, [2, [3, [4, [5]]]]], 2);
    console.log("🚀 ~ it ~ result:", result);
    expect(result).toEqual([1, 2, 3, [4, [5]]]);
  });
  it("should flatten an array with empty array", () => {
    const result = flatten([1, [], [3, [], [5]]]);
    console.log("🚀 ~ it ~ result:", result);
    expect(result).toEqual([1, 3, 5]);
  });
});

describe("deepClone", () => {
  it("deepClone - basic object", () => {
    const original = { a: 1, b: { c: 2 } };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    cloned.a = 10;
    expect(cloned).not.toEqual(original);
  });
  it("deepClone - array", () => {
    const original = [1, [2, [3, [4, [5]]]]];
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    cloned[0] = 10;
    expect(cloned).not.toEqual(original);
  });
  it("deepClone - nested object", () => {
    const original = { a: 1, b: { c: 2 } };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    cloned.a = 10;
    expect(cloned).not.toEqual(original);
  });
  it("deepClone - nested array", () => {
    const original = [1, [2, [3, [4, [5]]]]];
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    cloned[0] = 10;
    expect(cloned).not.toEqual(original);
  });
  it("deepClone - null and undefined", () => {
    expect(null).toEqual(deepClone(null));
    expect(undefined).toEqual(deepClone(undefined));
  });
});

describe("checkPermutation", () => {
  it("should check if two strings are permutations of each other", () => {
    expect(checkPermutation("abc", "cba")).toBe(true);
    expect(checkPermutation("abc", "abd")).toBe(false);
    expect(checkPermutation("abc", "cbaa")).toBe(false);
  });
  it("should check if two strings are permutations of each other", () => {
    expect(checkPermutation2("abc", "cba")).toBe(true);
    expect(checkPermutation2("abc", "abd")).toBe(false);
    expect(checkPermutation2("abc", "cbaa")).toBe(false);
  });
});

describe("isPalindrome", () => {
  it("should check if a string is a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
    expect(isPalindrome("No lemon, no melon")).toBe(true);
  });
});

describe("numSetBits", () => {
  it("should count the number of set bits in a number", () => {
    expect(numSetBits(10)).toBe(2);
    expect(numSetBits(15)).toBe(4);
  });
});

describe("isUnique", () => {
  it("should check if a string has all unique characters", () => {
    expect(isUnique("")).toBe(true);
    expect(isUnique("abc")).toBe(true);
    expect(isUnique("abca")).toBe(false);
  });
});
