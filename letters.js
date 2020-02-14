/**
 * print all possible letter combinations that the num could represent. support from 0 to 99
 * author: Man Wu
 * Date: 2020-02-14
 * Version: 1.0.0
 */

// 使用数组记录相应字母组合, 使用时 相应数字代替下标 读取相应值
const Letters = [
  [],
  [],
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["j", "k", "l"],
  ["m", "n", "o"],
  ["p", "q", "r", "s"],
  ["t", "u", "v"],
  ["w", "x", "y", "z"]
];

// 交叉合并两个组合
let mergeCombs = function(comb1, comb2) {
  let combinations = [];
  comb1.forEach(item1 => {
    comb2.forEach(item2 => {
      let comb = item1 + item2;
      combinations.push(comb);
    });
  });
  return [].concat(combinations);
};

/**
 * 根据数字获取字母组合 支持 0 - 9
 * @param { any } digit
 */
let getLetterComByDigit = function(digit) {
  if (digit < 0 || digit > 9) return [];
  return [].concat(Letters[digit]);
};

/**
 * 获取数字对应的字母组合
 * 19 -> wxyz 29 -> aw ax ay ax bw bx ...
 * @param { init } digit
 * @return { array } []
 *
 */
let getLettersComb = function(digit) {
  if (digit < 0 || digit > 99 || !parseInt(digit)) return [];

  // console.log(`>>> 计算数字 ${digit} 组合`);
  let digitArr = String(digit).split("");

  let combinations = [];

  if (digitArr.length === 1) {
    combinations = getLetterComByDigit(digitArr[0]);
  } else if (digitArr.length === 2) {
    let d1 = digitArr[0],
      d2 = digitArr[1];
    let comb1 = getLetterComByDigit(d1);
    let comb2 = getLetterComByDigit(d2);
    if (comb1.length !== 0 && comb2.length !== 0) {
      combinations = mergeCombs(comb1, comb2);
    } else {
      combinations = comb1.concat(comb2);
    }
  }

  // console.log(`<<< 数字 ${digit} 的字母组合为: ${JSON.stringify(combinations)}`);
  return [].concat(combinations);
};

// todo 当传入数组元素非法时的处理
let mapping = function(arr) {
  let combStr = "";
  console.log(`>>> input: ${JSON.stringify(arr)}`);

  if (arr.length === 1) {
    combStr = getLettersComb(arr[0]);
  } else if (arr.length === 2) {
    let comb1 = getLettersComb(arr[0]);
    let comb2 = getLettersComb(arr[1]);
    let combinations = mergeCombs(comb1, comb2);
    combStr = combinations.join(", ");
  }
  console.log(`<<< output: ${combStr}`);
};

let arr1 = [0];
let arr2 = [3];
let arr3 = [32];
let arr4 = [2, 3];
let arr5 = [23, 45];
let arr6 = [13, 5];
mapping(arr1);
mapping(arr2);
mapping(arr3);
mapping(arr4);
mapping(arr5);
mapping(arr6);

// getLettersComb(1);
// getLettersComb(0);
// getLettersComb(5);
// getLettersComb(15);
// getLettersComb(24);
// getLettersComb(10);
