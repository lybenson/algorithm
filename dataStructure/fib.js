/*
斐波那契数列就是从 0 和 1 开始，后面的数都是前两个数之和

0，1，1，2，3，5，8，13，21，34，55，89
*/

function fib(n) {
  if (n < 2 && n >= 0) return n
  return fib(n-1) + fib(n-2)
}

let res = fib(10)
console.log(res)
