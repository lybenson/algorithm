/**
给定一个机票的字符串二维数组 [from, to]，子数组中的两个成员分别表示飞机出发和降落的机场地点，对该行程进行重新规划排序。所有这些机票都属于一个从 JFK（肯尼迪国际机场）出发的先生，所以该行程必须从 JFK 开始。

说明:

如果存在多种有效的行程，你可以按字符自然排序返回最小的行程组合。例如，行程 ["JFK", "LGA"] 与 ["JFK", "LGB"] 相比就更小，排序更靠前
所有的机场都用三个大写字母表示（机场代码）。
假定所有机票至少存在一种合理的行程。
 */
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
const findItinerary = (tickets) => {

  tickets.sort((a, b) => a[1].localeCompare(b[1]))

  let result = ''

  const recursion = (path, prev, pos) => {
    if (pos.length === tickets.length) {
      result = path
      return true
    }

    for (let i = 0; i < tickets.length; i++) {
      const [from, to] = tickets[i]

      if (prev === from && !pos.includes(i)) {
        pos.push(i)

        if (recursion(path + '|' + to, to, pos)) {
          return true
        }

        pos.pop()
      }
    }
  }
  recursion('JFK', 'JFK', [])
  return result.split('|')
}