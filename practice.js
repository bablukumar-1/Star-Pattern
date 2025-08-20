if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (callback) {
        if (typeof callback !== 'function') {
            throw new TypeError(callback + "is not a function.")
        }
        const result = []
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                result.push(this[i])
            }
        }
        return result;
    }
}

const arr1 = [2, 3, 4, 5]
const newArray = arr1.myFilter((value, index) => value % 2 === 0)
console.log(newArray)