

// # All String method in javascript 


// ---------1 charAt(indexNumber) it is check the position of that element-------
// const mynamess = 'BabluSarkar'
// const newVal =mynamess.charAt(2)
// console.log(typeof newVal)// type of string

// const namess = new String('sarkar')
// console.log(typeof namess)// type of object


// ------------ indexOf('element') method is used to find the element position

// const mynamess = 'BabluSarkar'

// const index = mynamess.indexOf('S')
// console.log(index)


// ------------- substring(startingIndex , indingIndex)-------
// const mynamess = 'BabluSarkar'
// const subnamess = mynamess.substring(0,5)
// console.log(subnamess)


// -------------------- slice(start,end)---------------------

//  const myNames = 'BabluSarkar'
// //  const myNames = [
// //     {
// //         names:'bablu'
// //     },
// //     {
// //         names:'kumar'
// //     },
// //     {
// //         names:'raj'
// //     },
// //     {
// //         names:'ji'
// //     },
// //     {
// //         names:'kavya'
// //     },
// //     {
// //         names:'divya'
// //     },
// //     {
// //         names:'sarkar'
// //     },
// //     {
// //         names:'kitu'
// //     },
// //     {
// //         names:'bitu'
// //     },
// //  ]
// const sliceNames = myNames.slice(-2,2)
// // console.log( myNames.names)❌
// console.log(sliceNames)


// ------------ concat() is merge to variable to multiple variable-------------

// const name1 = 'bablu'
// const name2 = 'sarkar'
// const name3 = 'ji'
// const name4 = 'bitu'
// const name5 = 'raj'

// const name1 = ['2','3','4']
// const name2 = ['sarkar','bitu']
// const name3 = ['kumar','ji']
// const name4 = ['bitu','kbs']
// const name5 = ['raj','kitu']
// const fullName = name1.concat(name2,name3,name4,name5)
// console.log( ...fullName)

// const newArray = name1.push(...name2)
// console.log(...name1)


// ------------- trim() is use to remove white space-----------------
// const name = '      ji sarkar ji  '
// const newName = name.trim();
// console.log(newName)


// ----------- replace('your Value',''change value) method is use to replace based on your value----------------


// const name ='i is bablu sarkar'

// const newVal = name.replace('is','am')
// console.log(newVal)

// ------------ search() this use to find or search items like a string--------------

// const name ='i is bablu sarkar'

// console.log(name.search('is'))

// ------- charCode(indexNo)----------------------

const name ='sarkar'
console.log(name.charCodeAt(2))