// ------------------This is build method of array in javascript like sort() is real implementation------------------

// const arr = [2, 1, 3, 4]
// const newArray = arr.sort()// it is return a new array after sorting
// console.log(newArray)


// ------------- I have create my own mySort() method like a polyfill -------------


if (!Array.prototype.mySort) {
    Array.prototype.mySort = function () {
        console.log(this)
        const result=[]
        for (let i = 0; i < this.length; i++) {

        }
    }
}
const arr = [3, 4, 2, 5, 1, 3]
const newArray = arr.mySort()
console.log(newArray)