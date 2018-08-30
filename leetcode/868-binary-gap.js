// 给定一个正整数 N，找到并返回 N 的二进制表示中两个连续的 1 之间的最长距离。 

// 如果没有两个连续的 1，返回 0 。

/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
  N = N.toString(2)
  let max = 0
  let record = []
  for (let i = 0; i < N.length; i++) {
    let c = N.charAt(i)
    if (c == 1) {
      record.push(i)
    }
    if (record.length > 0 && c == 1) {
      let distance = record[record.length - 1] - record[record.length - 2]
      max =  distance > max ? distance : max
    }
  }
  return max
};
