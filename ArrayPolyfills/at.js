
if (!Array.prototype.mtAt) {
  Array.prototype.myAt = function (index) {
    if(index < 0){
      index = this.length + index
    }
    if(index < 0 || index >= this.length){
      return undefined
    }
    return this[index]
  }
}

const arr = [1,2,3]
// console.log(arr)
const val = arr.myAt(2)
// console.log(arr)
console.log(val)