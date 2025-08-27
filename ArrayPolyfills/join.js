// -------------------- I have build own polyfill method like join() method to myJoin()-------------

// --------------- I have build own join() method like  a polyfill------------

if (!Array.prototype.myJoin) {
  Array.prototype.myJoin = function (element) {
    let result = ''

    for (let i = 0; i < this.length; i++) {
      result += this[i]
      // result.toString()
      if (i < this.length - 1) {
        result += element
      }
    }
    console.log(result)
    return result
  }
}
const arr = [1, 2, 3, 4]
// console.log(arr)
const val = arr.myJoin(' -')
console.log(val)
// console.log(arr)