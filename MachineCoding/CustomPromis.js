//-------------- file handling with help of promise
//---------- inbuild promise
// const fsV2 = require('fs/promises')
// console.log('program is start !')

// fsV2.readFile('./backup.html','utf-8')
// .then((result)=>{
//     fsV2.writeFile('hello.tx',result)
// })
// .then(()=>fsV2.unlink('./backup.html'))
// .catch((error)=>{
//     console.log('showing error this program !',error)
// })


// --------- there are custom promise


// const { rejects } = require('assert')
// const fs = require('fs')
// const { resolve } = require('path')
// fs.readFile('./proxy.js','utf-8',(error,content)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(content)
//     }
// })

// function readFilePromise(filePath, encoding) {
//     return new Promise((resolve, rejects) => {
//            fs.readFile(filePath,encoding,(error,content)=>{
//             if(error){
//                 rejects(error)
//             }else{
//                 resolve(content)
//             }
//            })
//     })
// }




// const result = readFilePromise('./proxy.js','utf-8')
// result.then((val)=>{
//     console.log(val)
// })
// .catch((error)=>{

//     console.log(error)
// })


//---- this is writeFile()

// function writeFilePromise(pathName,content){
//     return new Promise ((resolve,rejects)=>{
//         fs.writeFile(pathName,content,(error)=>{
//             if(error){
//                 rejects(error)
//             }else{
//                 resolve()
//             }

//         })
//     })

// }

// writeFilePromise('hello.js','this is my hello.js next time')


//---------- deletefile use unlink()------------------


// function unlinkWithPromise(pathName){
// return new Promise((resolve,reject)=>{
//     fs.unlink(pathName,(error)=>{
//         if(error){
//             reject(error)
//         }else{
//             resolve()
//         }
//     })
// })
// }

// unlinkWithPromise('./hello.js')



//---------- synthetic sugar----------

// const fs = require('fs')

const { rejects } = require('assert')
const fsV2 = require('fs/promises')
const { resolve } = require('path')
console.log('program is start !')

// fsV2.readFile('./backup.html', 'utf-8')
//     .then((result) => {
//         fsV2.writeFile('hello.txt', result)
//     })
//     .then(() => fsV2.unlink('./backup.html'))
//     .catch((error) => {
//         console.log('showing error this program !', error)
//     })


// ----------- handlingFile() in asynchronous ways-------------
 function wait(sec) {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve()
        }, sec * 1000)
    });

}
async function handlingFile() {
    try {
        const result = await fsV2.readFile('./hello.txt', 'utf-8')
        await fsV2.writeFile('name.txt', result)
        await wait(5) // wait 5 second then delete file
        await fsV2.unlink('./hello.txt')
    } catch (error) {
        console.log('showing this type of error :', error)
    } finally {
        console.log('all is done !')
    }
}

handlingFile().then(() => console.log('all are done'))

console.log('program is done')