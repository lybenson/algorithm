/**
 * 对于一个 正整数，如果它和除了它自身以外的所有正因子之和相等，我们称它为“完美数”。

给定一个 正整数 n， 如果他是完美数，返回 True，否则返回 False
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  let sum = 0
  for (let i = 2; i <= ~~Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i
      sum += num / i
    }
  }

  return sum === num
};
