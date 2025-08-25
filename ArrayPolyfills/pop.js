if (!Array.prototype.myPop) {
    Array.prototype.myPop = function () {
        if (this.length === 0) {
            return undefined; // same as real pop
        }
        const lastIndex = this.length - 1;// 3
        const lastValue = this[lastIndex];
        this.length = lastIndex; // reduce array length (removes last element)
        return lastValue; // return removed element
    }
}

const arr = [2, 3, 4, 5, 6];
const val = arr.myPop();

console.log("Removed:", val);  // 6
console.log("Updated Array:", arr);  // [2, 3, 4, 5]
