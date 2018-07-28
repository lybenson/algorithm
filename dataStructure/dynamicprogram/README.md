## 动态规划

斐波那切数列: 从第3个数开始，每一个数都等于它前面的两个数的和,形式如下
> 0 1 1 2 3 5 8 13 21 34 55...

```javascript
function fib1(n) {

  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  return fib(n - 1) + fib(n - 2)
}
console.time('time')
let n = 10
fib1 = fib1(n)
console.log(`fib1(${n})=${fib1}`)
console.timeEnd('time')
```
上述算法fib1存在大量的重复计算，比如

```
                5
        4               3
    3       2       2       1
  2   1   1   0   1   0
1   0
计算4时计算了3， 而在计算5时，又计算了3
而作为底层的2的计算，又被计算了很多次
```

记忆化搜索—自上而下解决问题

```javascript
let memo = []
function fib2(n) {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  if (!memo[n]) memo[n] = fib(n - 1) + fib(n - 2)
  return memo[n]
}
```

动态规划—自下而上解决问题

```javascript
let memo = []
function fib3(n) {
  let memo = []
  memo[0] = 0
  memo[1] = 1
  for(let i = 0; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2]
  }
  return memo[n]
}
```

> 动态规划就是将原问题拆解成若干个子问题，同时保存子问题的答案，使得每个子问题只求解一次，最终获得原问题的答案。

 

当遇到递归，产生了计算重叠子项的问题可以使用下面两种方式解决

- 记忆化搜索 - 自顶向上
- 动态规划 - 自底向上



使用动态规划解决leetcode上的的题目



- [x] [爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/description/) [答案](ss) 