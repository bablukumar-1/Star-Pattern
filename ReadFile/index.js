// synchronous code is know as block code
const fs = require('fs')
// console.log('start program !')

//-------------------- asynchronous code--
// fs.writeFileSync('./learn.html', ' <h1>I am Bablu Sarkar</h1>')
// console.log(s)
// const readFile = fs.readFileSync('./learn.html','utf-8')
// console.log('file reading success ful',readFile)
// const data = 'hey there i am bablu sarkar i am here !'
// fs.writeFile('./learn.html',data,(error)=>{
//     console.log(error)
// })


/// -------------- Callback Hell -------------------
// console.log(' program is start !')
// fs.readFile('./learn.txt', 'utf-8', (error, content) => {
//     if (error) {
//         console.log('error : ', error)
//     } else {
//         console.log('value :', content)
//         fs.writeFile('backup.html', content, (error) => {
//             if (error) {
//                 console.log('looking error for creating backup.txt file !')
//             } else {
//                 fs.unlink('./learn.txt', (error) => {
//                     if (error) {
//                         console.log('error for delete the previous file !')
//                     } else {
//                         console.log('file is delete success fully !')
//                     }
//                 })
//             }


//         })
//     }
// })
// console.log('end program !')

//-------------- file handling with help of promise

const fsV2 = require('fs/promises')
console.log('program is start !')

fsV2.readFile('./backup.html','utf-8')
.then((result)=>{
    fsV2.writeFile('hello.tx',result)
})
.then(()=>fsV2.unlink('./backup.html'))
.catch((error)=>{
    console.log('showing error this program !',error)
})

// console.log('program is start !')

// sum(2, 3, (result) => {
//     console.log(' this is my result :', result)
// })

// console.log('program is end !')

// function sum(a, b, ab) {
//     setTimeout(() => ab(a + b) , 5*1000)
// }