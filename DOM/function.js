Function.prototype.describe=function(){
  console.log(`Function name is ${this.name}`)
}
function sarkar(){

}

function greet(name){
  return  `hello ${name
  }`
}

// greet.describe()
// sarkar.describe()

function string (name){ // function declaration
  return name
}

const add = function(a,b){// function expression
  return a+b
}

///------------- first class function----------------

function applyOperation ( a,b,operation){
  return operation (a,b)
}

// const result = applyOperation(5,4,(x,y)=>x/y)

//-------------- tiffin concept with the help of function-------------

function createCounter(){
  let count = 0;
  return function(){
    count++;
    return count;
  }
}

const counter = createCounter()
// console.log(counter())


// ------------------- This is an Immediately Invoked Function Expression (IIFE).--------
// iife function
(function(){
  console.log('this is inner function')
})() 
