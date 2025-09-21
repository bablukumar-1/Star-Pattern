

function increment (){
    let count = 0;
    return function(){
        count++
        return count;
    }
}
const x=increment()
console.log(x())
console.log(x()) 
console.log(x())
console.log(x())
console.log(x())