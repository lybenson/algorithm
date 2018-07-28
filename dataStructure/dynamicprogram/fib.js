// 动态规划

// 斐波那切数列 从第3个数开始，每一个数都等于它前面的两个数的和
// 0 1 1 2 3 5 8 13 21 34 55...

let n = 1000
function fib1(n) {

  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  return fib1(n - 1) + fib1(n - 2)
}
// console.time('time1')
// fib1 = fib1(n)
// console.log(`fib1(${n})=${fib1}`)
// console.timeEnd('time1')

// 上述算法fib1存在大量的重复计算，比如
/*
                5
        4               3
    3       2       2       1
  2   1   1   0   1   0
1   0
*/

// 记忆化搜索
let memo = []
function fib2(n) {

  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  if (!memo[n]) memo[n] = fib2(n - 1) + fib2(n - 2)

  return memo[n]
}

console.time('time2')
fib2 = fib2(n)
console.log(`fib2(${n})=${fib2}`)
console.timeEnd('time2')

// 动态规划
function fib3(n) {
  let memo = []
  memo[0] = 0
  memo[1] = 1
  for(let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2]
  }
  return memo[n]
}

console.time('time3')
fib3 = fib3(n)
console.log(`fib3(${n})=${fib3}`)
console.timeEnd('time3')