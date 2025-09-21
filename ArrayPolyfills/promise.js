

// ----------- promise polyfill learning and how to create --------------

//----------- signature of promise -------------
// const wait = (second) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(), second * 1000)
//     })
// }

// console.log('program is start ! and wait 10 second')
// wait(10)
//     .then(() => console.log('please wait function  is resolve !'))
//     .catch((error) => {
//         console.log('showing error ' + error)
//     })
//     .finally(() => console.log('i am always execute !'))


//-------- polyfill of promise --------------

class MyPromise {
    constructor(executerFn) {
        this._state = 'pending'
        this._successCallbacks = []
        this._errorCallbacks = []
        this._finallyCallbacks = []

        this.value=undefined
        executerFn(
            this.resolverFunction.bind(this),
            this.rejectorFunction.bind(this),
        )
    }
    then(cb) {
        if (this._state == 'fulfilled') {
            cb(this.value)
            return this
        }
        this._successCallbacks.push(cb)
        return this
    }
    catch(cb) {
        if (this._state == 'rejected') {
            cb(this.value)
            return this
        }
        this._errorCallbacks.push(cb)
        return this
    }
    finally(cb) {
        if(this._state!== 'pending'){
            cb()
            return this
        }
        this._finallyCallbacks.push(cb)
        return this
    }
    resolverFunction(value) {
        this._state = 'fulfilled'
        this.value =value
        this._successCallbacks.forEach(cb => cb(value))
        this._finallyCallbacks.forEach(cb => cb())

    }
    rejectorFunction(error) {
        this._state = 'rejected'
        this._errorCallbacks.forEach(cb => cb(error))
        this._finallyCallbacks.forEach(cb => cb())

    }

}


const wait = (second) => {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => reject('hahaha'), second * 1000)
    })
}

console.log('program is start ! and wait 5 second')
wait(5)
    .then((e) => console.log('please wait function  is resolve !', e))
    .catch((error) => {
        console.log('showing error ' + error)
    })
    .finally(() => console.log('i am always execute !'))

