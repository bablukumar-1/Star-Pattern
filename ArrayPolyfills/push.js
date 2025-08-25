


// --------- This is build push() method-------- and real implementation

// const arr1 =[1,2,34]
// console.log('arr1',arr1)
// const arr2 = [4,5,7]
// const arr3 = arr1.push(arr2)
// console.log('push the arr2 in arr1',arr3,'and',arr1)
// const arr4 = arr1.push(...arr2)
// console.log('spread the arr2 in arr1',arr4,'and',arr1)



// ------------- I have build own my myPush() method polyfill-------------------


if(!Array.prototype.myPush){
    Array.prototype.myPush=function(...element){
        console.log(element,this)// this is only for understanding
           for(let i=0; i<element.length; i++){
            this[this.length]=element[i]
           }
           return this.length
    }
}


const arr1 =[1,2,34]
console.log('arr1',arr1)
const arr2 = [4,5,7]
const arr3 = arr1.myPush(arr2)
// console.log('push the arr2 in arr1',arr3,'and',arr1)
const arr4 = arr1.myPush(...arr2)
// console.log('spread the arr2 in arr1',arr4,'and',arr1)
