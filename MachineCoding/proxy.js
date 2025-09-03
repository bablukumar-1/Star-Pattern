//--------------- Proxy they have use to hide some properties is an object
const user ={
    name:'bablu',
    age:'20',
    password:'123'
}
console.log(user)
//  now creating a proxy

const proxyUser = new Proxy(user,{
    get(target,prop){
        console.log(prop)
        if(prop=== 'password'){
            throw new Error('Access Denied !')
        }else{
            return target[prop]
        }
    }
})
console.log(proxyUser.password)


//------------- how handle or access negative index of array

function negativeIndex (arr){
    return new Proxy(arr,{
        get(target,prop){
            const index =  Number(prop)
            if(index<0){
                return target[target.length+index]
            }
            return target[index]
        },
        set(target,prop,value){
            const index  = Number(prop)
            if(index < 0){
                target[target.length+index] = value
            }else{
                target[index]=value
            }
            return true
        }
    })
}
const arr=[2,3,4,5,67,7]
// console.log(arr[-1])
const val = negativeIndex(arr)
console.log(arr[-1])
console.log(val[-1])
val[-1]=11
console.log(val)
console.log(arr)