/**
给定平面上 n 对不同的点，“回旋镖” 是由点表示的元组 (i, j, k) ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。

找到所有回旋镖的数量。你可以假设 n 最大为 500，所有点的坐标在闭区间 [-10000, 10000] 中。
 */

 /**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  let length = points.length
  if (length < 3) return 0

  let total = 0
  for (let i = 0; i < length; i++) {
    const map = new Map()
    for (let j = 0; j < length; j++) {
      if (i === j) continue
      const distance = getDistance(points[i], points[j])
      map.set(distance, (map.get(distance) | 0) + 1);
    }
    for (const n of map) {
      if (n[1] >= 2) total += (n[1] * (n[1] - 1));
    }
  }
  return total

  function getDistance(point1, point2) {
    return (point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2
  }
};
