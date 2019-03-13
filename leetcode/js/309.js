/**
 * 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let hold = []
  let sell = []
  let cool = []
  hold[0] = -prices[0]
  sell[0] = 0
  cool[0] = 0
  for (let i = 1; i < prices.length; i++) {
    sell[i] = hold[i - 1] + prices[i]
    hold[i] = Math.max(cool[i - 1] - prices[i], hold[i - 1])
    cool[i] = Math.max(cool[i - 1], sell[i - 1])
  }
  return Math.max(cool[cool.length - 1], sell[sell.length - 1])
}
