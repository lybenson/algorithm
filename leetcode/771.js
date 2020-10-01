/**
 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。
 */
var numJewelsInStones = function(J, S) {
  let map = new Map()
  for (let i = 0; i < S.length; i++) {
    let char = S[i]
    if (map.has(char)) map.set(char, map.get(char) + 1)
    else map.set(char, 1)
  }
  let ans = 0
  for (let i = 0; i < J.length; i++) {
    ans += (map.has(J[i]) ? map.get(J[i]) : 0)
  }
  return ans
};
