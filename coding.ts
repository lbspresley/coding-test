/**
 * 1. Chunk
 *
 * Implement a function that splits an array into chunks of a given size.
 * 배열을 주어진 크기로 잘라서 반환하는 함수를 작성하시오.
 */

export const chunk = (arr: any[], size: number = 1): any[][] => {
  const result: any[][] = [];
  if (arr.length === 0 || size <= 0) return result;

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

/**
 * Flatten
 *
 * Implement a function that flattens an array to a given depth.
 * 배열을 주어진 깊이까지 평탄화하는 함수를 작성하시오.
 */
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

/**
 * Check Permutation
 *
 * Implement a function that checks if two strings are permutations of each other.
 * 두 문자열이 서로 순열인지 확인하는 함수를 작성하시오.
 * 순열이란 두 문자열이 같은 문자를 같은 개수만큼 가지고 있는 것을 말한다.
 */
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

/**
 * Palindrome
 *
 * Implement a function that checks if a string is a palindrome.
 * 문자열이 회문인지 확인하는 함수를 작성하시오.
 * 회문이란 앞으로 읽으나 뒤로 읽으나 같은 문자열을 말한다.
 */
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

/**
 * URLify
 *
 * Implement a function that replaces all spaces in a string with "%20".
 * 문자열의 끝에 있는 공백은 제거하지 않는다.
 * 문자열의 앞에 있는 공백은 제거하고 뒤에 있는 공백은 제거하지 않는다.
 */
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

/**
 * One Away
 *
 * Implement a function that checks if two strings are one edit away from each other.
 * 문자열을 편집하는 방법에는 세가지가 있다.
 * 1. 문자 하나를 더하기
 * 2. 문자 하나를 빼기
 * 3. 문자 하나를 바꾸기
 * 이 세가지 방법 중 하나로 두 문자열이 같아질 수 있는지 확인하는 함수를 작성하시오.
 */
export const oneAway = (str1: string, str2: string): boolean => {
  if (str1.length === str2.length) return oneEditReplace(str1, str2);
  if (str1.length + 1 === str2.length) return oneEditInsert(str1, str2);
  if (str1.length - 1 === str2.length) return oneEditInsert(str2, str1);
  return false;
};

export const oneEditReplace = (str1: string, str2: string): boolean => {
  let foundDifference = false;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (foundDifference) return false;
      foundDifference = true;
    }
  }
  return true;
};

export const oneEditInsert = (str1: string, str2: string): boolean => {
  let index1 = 0;
  let index2 = 0;
  while (index1 < str1.length && index2 < str2.length) {
    if (str1[index1] !== str2[index2]) {
      if (index1 !== index2) return false;
      index2++;
    } else {
      index1++;
      index2++;
    }
  }
  return true;
};
