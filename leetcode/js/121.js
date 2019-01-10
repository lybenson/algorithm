/**
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

注意你不能在买入股票前卖出股票。
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let res = 0
  let min = prices[0] || 0
  prices.forEach(price => {
    if(price < min) min = price
    res = Math.max(res, price - min)
  })
  return res
}
