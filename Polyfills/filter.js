
// ---------*********************-----------
// this is real implementation of filter() build method
// // const arr=[4,6,3,2,8]
// const arr =[
//     {
//         name:'bablu',
//         age:20,
//         isMarried:false
//     },
//     {
//         name:'bitu',
//         age:22,
//         isMarried:false
//     },
//     {
//         name:'sarkar ji',
//         age:25,
//         isMarried:true
//     },
// ]

// const newArray = arr.filter((value)=> value.age>22 && value.isMarried === false)
// console.log(newArray)


// ----------------------**********************----------------------

// I have create my own myFilter() method polyfill

if(!Array.prototype.myFilter){
    Array.prototype.myFilter=function(callback){
        if(typeof callback !== 'function'){
            throw new TypeError(callback+ 'is not a function')
        }
        const result = []
        for(let i=0; i<this.length; i++){
            if(callback(this[i],i,arr)){
               result.push(this[i]) 
            }
        }
        return result
    }
}
const arr=[4,6,3,2,8]

const newArray = arr.myFilter((value)=>value>=3)
console.log(newArray)
// const arr =[
//     {
//         name:'bablu',
//         age:20,
//         isMarried:false
//     },
//     {
//         name:'bitu',
//         age:22,
//         isMarried:false
//     },
//     {
//         name:'sarkar ji',
//         age:25,
//         isMarried:true
//     },
// ]
