


// const array = [2,3,4,1]
// using forEach() Array method and iterate there array

// array.forEach((value,index,arr)=>{ // forEach() is a build method
//     console.log(`Index Number ${index} and value ${value} then array ${arr}`)
// })



// Now i have create on forEach() like myForEach() method ( Polyfill)

if(!Array.prototype.myForEach){
    Array.prototype.myForEach=function(callback,args){
        if(typeof callback !== "function"){
            throw new TypeError(callback + " is not a function.")
        }
        const userValue = this;
          for(let i=0; i<userValue.length; i++){
            // calling callback function
            callback.call(args,userValue[i],i,userValue)
          }
    }
}
const array = [2,3,4,1]
array.myForEach((value,index,arr)=>{
console.log(`Index Number ${index} and value ${value} then array ${arr}`)
})