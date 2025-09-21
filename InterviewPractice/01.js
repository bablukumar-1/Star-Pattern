
//--------- interview question----------
//----- higher order function---- know as debounce concept use for signing etc..
function pataNhi(fn , delay){
    // console.log(arguments)
    let myId;
  return function(...args){// tiffenBox concept !
    clearTimeout(myId)
    myId =setTimeout(()=>{
          
        fn.apply(this , args)
    },delay)
  } 
}
function greet(name){
    console.log(`hello ${name}`)
}
const sachMeNahiPta = pataNhi(()=>greet('bablu',3000))

sachMeNahiPta()
sachMeNahiPta()
sachMeNahiPta()