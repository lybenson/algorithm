/**
 * 给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。
 */
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  return parseInt(num.toString(2).replace(/1/g, 'x').replace(/0/g, '1').replace(/x/g, 0), 2).toString(10)
};