const products = [
    {
        item:'crackers',
        price:2000
    },
    {
        item:'biscuit',
        price:500
    },
    {
        item:'shop',
        price:230
    },
    {
        item:'headPhone',
        price:2500
    },
    {
        item:'jeans',
        price:1000
    },
    {
        item:'ball',
        price:20000
    },
]


// const totalVal = products.reduce((acc,currVal)=>acc+currVal.price,0)
// console.log(totalVal)

let totalVal =0;
 products.map((item)=> totalVal=totalVal+item.price)
 console.log(totalVal)