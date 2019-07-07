/**
 * 实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。
 */
/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.is_word = false
  this.children = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let cur = this
  for (let i = 0; i < word.length; i++) {
    const char = word[i]
    if (!cur.children[char]) {
      cur.children[char] = new Trie()
    }
    cur = cur.children[char]
  }
  cur.is_word = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let cur = this
  for (let i = 0; i < word.length; i++) {
    const char = word[i]
    cur = cur.children[char]
    if (!cur) break
  }
  return cur && cur.is_word || false
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let cur = this
  for (let i = 0; i < prefix.length; i++) {
    const char = prefix[i]
    cur = cur.children[char]
    if (!cur) break
  }
  return cur ? true : false
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */