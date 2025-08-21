if (!Array.prototype.myPush) {
  Array.prototype.myPush = function (...elements) {
    // elements → all values you want to add
    for (let i = 0; i < elements.length; i++) {
      this[this.length] = elements[i];  // add element at the end
    }
    return this.length; // return new length (like push does)
  };
}
const arr = [2, 3, 4, 5];
const arr1 = [6, 7, 8];

// pushing a single element
arr.myPush(10);
console.log(arr); // [2, 3, 4, 5, 10]

// pushing multiple elements
arr.myPush(...arr1);
console.log(arr); // [2, 3, 4, 5, 10, 6, 7, 8]
