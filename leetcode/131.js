/**
给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
返回 s 所有可能的分割方案。
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let ans = []
  dfs(0, s, [], ans)
  return ans
};
function dfs (start, s, path, ans) {
  if (start === s.length) {
    ans.push(path.slice())
    return
  }
  for (let i = start; i < s.length; i++) {
    if (isPalindrome(s, start, i)) {
      path.push(s.substring(start, i+ 1))
      dfs(i + 1, s, path, ans)
      path.pop()
    }
  }
}

function isPalindrome (s, left, right) {
  while (left <= right) {
    if (s[left] !== s[right]) return false
    else {
      left++
      right--
    }
  }
  return true
}
