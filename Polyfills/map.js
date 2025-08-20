
// this is my build map() method to use iterate and return new Array.

// const myArray =[2,3,4,5]
// const myArray = [
//     {

//         name: 'bitu',
//         age: 20,
//         gender: 'male',
//         isMarried: false
//     },
//     {

//         name: 'bitu',
//         age: 20,
//         gender: 'male',
//         isMarried: false
//     },
// ]
// const newArray = myArray.map((value, index, arr) => {

//     // console.log(`index no is ${index} and value ${value} and myArray ${arr}`)
//     // return [value,index,arr]
//     return value
// })

// console.log(newArray)
// console.log(' all these for practice)

// ----------------************************------------------
// i have create own myMap() method polyfill is use to iterate and return new Array.

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {
        if (typeof callback !== 'function') {
            throw new TypeError(callback, 'is not a function')
        }
        const result = []
        for (let i = 0; i < this.length; i++) {
            const callbackValue = callback(this[i], i, this)
            result.push(callbackValue)
        }

        return result;
    }
}


// const  array = [3,4,5,3]
const array = [
    {
        name: 'bablu',
        age: '22'
    },
    {
        name: 'bitu',
        age: '22'
    },
]

array.myMap((value, index, arr) => {
    console.log(`index no is ${index} and value ${value} and my array ${arr}`)
    // console.log(`index no is ${index} and value`, value.name, arr)
    return value


})