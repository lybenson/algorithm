var twoSum = function(nums, target) {
  // console.log(nums)
  var news = Array.from(new Set(nums))

  for (let i = 0; i < news.length; i++) {
    const el = news[i];
    for (let j = 1; j < news.length; j++) {
      if (news[i] + news[j] == target) {
        return [i, j]
      }
    }
  }
}

console.log(twoSum([1, 2, 3, 4, 5 , 6, 6], 10))
