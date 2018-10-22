/**
已有方法 rand7 可生成 1 到 7 范围内的均匀随机整数，试写一个方法 rand10 生成 1 到 10 范围内的均匀随机整数。

不要使用系统的 Math.random() 方法。
 */

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
  let index = Number.MAX_VALUE
  while (index > 40)
    index = 7 * (rand7() - 1) + (rand7() - 1)
  return index % 10 + 1
};
