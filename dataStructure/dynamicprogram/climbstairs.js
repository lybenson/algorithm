/**
 * 假设你正在爬楼梯。需要 n 步你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 步 + 1 步
2.  2 步
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 步 + 1 步 + 1 步
2.  1 步 + 2 步
3.  2 步 + 1 步
 */

// 爬n阶台阶的最后一步是爬1阶或2阶
// 爬1阶时，剩余n-1
// 爬2阶时，剩余n-2
// 对于n-1和n-2继续使用步骤1

// 递归
function climbStairs1(n) {
  if (n == 1) {
    return 1
  }
  if (n == 2) {
    return 2
  }
  return climbStairs1(n-1) + climbStairs1(n-2)
};

// 动态规划
function climbStairs2(n) {
  let res = []

  res[1] = 1
  res[2] = 2

  for (let i = 3; i <= n; i++) {
    res[i] = res[i-1] + res[i-2]
  }
  return res[n]
}

console.log(climbStairs2(3))
