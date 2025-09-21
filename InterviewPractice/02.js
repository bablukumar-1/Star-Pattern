// throttling concept

const pataNhi =(fn ,delay)=>{
let myId=null
return (...args)=>{
     if(muId === null){
        fn(...args)
        myId=setTimeout(()=>{
            myId=null
        },delay)
     }
}
}

pataNhi('b',3000)
pataNhi()
pataNhi()