/**
 * 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = prices[0]
  let maxProfit = 0
  for (let i = 0; i < prices.length; i++) {
    let price = prices[i]
    if (price < minPrice) minPrice = price
    maxProfit = Math.max(maxProfit, price - minPrice)
  }
  return maxProfit
}
