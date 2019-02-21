/**
 * 假设Andy和Doris想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。

你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设总是存在一个答案。
 */
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let map = new Map(list1.map((value, index) => [value, index]))
  
  let ans = []
  let min = Number.MAX_VALUE
  list2.forEach((value, index) => {
    if (map.has(value)) {
      let sum = map.get(value) + index + 1
      if (sum < min)  {
        min = sum
        ans = []
      }
      if (sum === min) ans.push(value)
    }
  })
  return ans
};
