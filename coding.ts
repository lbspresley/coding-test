/**
 * 1. Chunk
 *
 * Implement a function that splits an array into chunks of a given size.
 */

export const chunk = (arr: any[], size: number = 1): any[][] => {
  const result: any[][] = [];
  if (arr.length === 0 || size <= 0) return result;

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export const flatten = (arr: any[], depth: number = Infinity): any[] => {
  return depth > 0
    ? arr.reduce((acc, item) => {
        const currentItem = Array.isArray(item)
          ? flatten(item, depth - 1)
          : item;
        return acc.concat(currentItem);
      }, [])
    : arr.slice();
};

export const deepClone = (obj: any): any => {
  if (typeof obj !== "object" || obj === null) return obj;
  if (Array.isArray(obj)) return obj.map((item) => deepClone(item));
  // const newObj = {};
  // for (const key in obj) {
  //   newObj[key] = deepClone(obj[key]);
  // }
  // return newObj;
  const entries = Object.entries(obj).map(([key, value]) => {
    return [key, deepClone(value)];
  });
  return Object.fromEntries(entries);
};

export const checkPermutation = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) return false;
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
};

export const checkPermutation2 = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) return false;
  const countChars = new Map<string, number>();
  for (const char of str1) {
    countChars.set(char, (countChars.get(char) || 0) + 1);
  }
  console.log("🚀 ~ checkPermutation2 ~ countChars:", countChars);
  for (const char of str2) {
    if (!countChars.get(char)) return false;
    countChars.set(char, countChars.get(char)! - 1);
  }
  return true;
};

export const isPalindrome = (str: string): boolean => {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
};

export const numSetBits = (num: number): number => {
  let count = 0;
  while (num > 0) {
    count += num & 1;
    num >>= 1;
  }
  return count;
};

export const numSetBits2 = (num: number): number => {
  return num.toString(2).split("1").length - 1;
};

export const isUnique = (str: string): boolean => {
  const charSet = new Set<string>();
  for (const char of str) {
    if (charSet.has(char)) return false;
    charSet.add(char);
  }
  return true;
};

export const URLify = (str: string): string => {
  // return str.replace(/\s/g, "%20");
  // return str.trim().replace(/\s/g, "%20");
  const strArr = str.trim().split("");
  const result: string[] = [];
  for (const char of strArr) {
    if (char === " ") {
      result.push("%20");
    } else {
      result.push(char);
    }
  }
  return result.join("");
};

export const URLify2 = (str: string, length: number): string => {
  const whiteSpaceCount = str.length - length;
  let startIndex = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      startIndex = i;
      break;
    }
  }
  const strArr: string[] = str.split("");
  const result: string[] = [];
  for (
    let i = startIndex;
    i < strArr.length - whiteSpaceCount + startIndex;
    i++
  ) {
    if (strArr[i] === " ") {
      result.push("%20");
    } else {
      result.push(strArr[i]);
    }
  }
  return result.join("");
};
