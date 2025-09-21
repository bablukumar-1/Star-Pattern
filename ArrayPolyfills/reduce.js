// const products = [
//     {
//         item:'crackers',
//         price:2000
//     },
//     {
//         item:'biscuit',
//         price:500
//     },
//     {
//         item:'shop',
//         price:230
//     },
//     {
//         item:'headPhone',
//         price:2500
//     },
//     {
//         item:'jeans',
//         price:1000
//     },
//     {
//         item:'ball',
//         price:20000
//     },
// ]


// // const totalVal = products.reduce((acc,currVal)=>acc+currVal.price,0)
// // console.log(totalVal)

// let totalVal =0;
//  products.map((item)=> totalVal=totalVal+item.price)
//  console.log(totalVal)










//----------------- My reduce polyfill function --------

if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (callback, initialValue = undefined) {
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function !')
        }
        if (this.length === 0 && initialValue === undefined) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        let acc = initialValue ? initialValue : this[0]
        let startIndex = initialValue ? 0 : 1

        for (let i = startIndex; i < this.length; i++) {
            acc = callback(acc, this[i])
        }
        return acc
    }
}

let arr = [1, 2, 3, 4, 5]

// const newValue = arr.myReduce((acc, curr) => {
//     console.log(acc, curr)`
//     return (acc + curr)
// })


const newValue = arr.myReduce((acc, curr) => (acc + curr))


console.log(newValue)