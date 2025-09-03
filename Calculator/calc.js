const input = document.getElementById('input')
const AC = document.getElementById('ac')
const CLR = document.getElementById('CLR')
const plus = document.getElementById('plus')
const equal = document.getElementById('equal')
// global variable
let firstValue;
let secondValue;
let equalValue;
AC.addEventListener('click',()=>{
    input.value=''
})
CLR.addEventListener('click',()=>{
   input.value=input.value.toString().slice(0,-1) 
})

 firstValue = input.value;
console.log(firstValue)

plus.addEventListener('click',()=>{
    firstValue=input.value
    console.log(firstValue)
    input.value+='+'
})

equal.addEventListener('click',()=>{
    secondValue=input.value
    console.log(secondValue)
  equalValue=firstValue+secondValue
  input.value=equalValue
 
})