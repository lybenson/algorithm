/**
 * 创建一个基于时间的键值存储类 TimeMap，它支持下面两个操作：

1. set(string key, string value, int timestamp)

存储键 key、值 value，以及给定的时间戳 timestamp。
2. get(string key, int timestamp)

返回先前调用 set(key, value, timestamp_prev) 所存储的值，其中 timestamp_prev <= timestamp。
如果有多个这样的值，则返回对应最大的  timestamp_prev 的那个值。
如果没有值，则返回空字符串（""）。
 */

/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
  this.map = {}
}

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.map[key]) {  
    this.map[key] = []
  }
  this.map[key].push({
    value,
    timestamp
  })
}

TimeMap.prototype.binarySearch = function (arr, targetTimestamp, start, end, bestValue) {      
  // return value
  if (start > end) {
    return bestValue
  }

  const mid = start + Math.floor((end - start) / 2)
  const curTimestamp = arr[mid].timestamp
  const curValue = arr[mid].value

  // we need smaller numbers
  if (curTimestamp > targetTimestamp) {
    return this.binarySearch(arr, targetTimestamp, start, mid - 1, bestValue)
  }

  // smaller timestamp is found, save the value.
  if (curTimestamp < targetTimestamp) {
    return this.binarySearch(arr, targetTimestamp, mid + 1, end, curValue)
  }

  // exact timestamp is found, no need for this if but we want to be descriptive
  if (curTimestamp === targetTimestamp) {
    return curValue
  }
}


/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function(key, timestamp) {
  if (!key in this.map) {
    return ''
  }

  let arr = this.map[key]
  return this.binarySearch(arr, timestamp, 0, arr.length - 1, '')
}

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */