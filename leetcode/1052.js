/**
今天，书店老板有一家店打算试营业 customers.length 分钟。每分钟都有一些顾客（customers[i]）会进入书店，所有这些顾客都会在那一分钟结束后离开。

在某些时候，书店老板会生气。 如果书店老板在第 i 分钟生气，那么 grumpy[i] = 1，否则 grumpy[i] = 0。 当书店老板生气时，那一分钟的顾客就会不满意，不生气则他们是满意的。

书店老板知道一个秘密技巧，能抑制自己的情绪，可以让自己连续 X 分钟不生气，但却只能使用一次。

请你返回这一天营业下来，最多有多少客户能够感到满意的数量。
 */

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
  let length = customers.length
  let total = 0
  for (let i = 0; i < length; i++) {
    if (grumpy[i] === 0) total += customers[i]
  }
  let increase = 0
  for (let i = 0; i < X; i++) {
    increase += customers[i] * grumpy[i]
  }
  let maxIncrease = increase
  for (let i = X; i < length; i++) {
    increase = increase - customers[i - X] * grumpy[i - X] + customers[i] * grumpy[i]
    maxIncrease = Math.max(maxIncrease, increase)
  }
  return total + maxIncrease
};
