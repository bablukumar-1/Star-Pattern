
// *********************** Iteration based Practice Question *******************
//--------------- find the pending task like un complete task
const task = [
  { description: 'Write report', complete: false, priority: 4 },
  { description: 'Write report', complete: true, priority: 2 },
  { description: 'Write report', complete: true, priority: 3 },
  { description: 'Write report', complete: false, priority: 6 },
  { description: 'Write report', complete: false, priority: 1 },
]

const pendingTask = task
  .filter((task) => !task.complete)
  .sort((a, b) => a.priority - b.priority)
console.log(pendingTask)


// ------------ find the expense report-------


const expense = [
  { description: 'Groceries', amount: 500, category: 'Food' },
  { description: 'Electricity', amount: 5000, category: 'Utility' },
  { description: 'Internet Bill', amount: 100, category: 'Food' },
  { description: 'Dinner', amount: 2000, category: 'Utility' },
]

const expenseReport = expense.reduce((sum, item) => {
  sum[item.category] += item.amount;
  return sum

}, { Food: 0, Utility: 0 })
console.log(expenseReport)


//------------- find the average of those student score the marks grater than 80------------


const students = [
  { name: "Bablu", score: 90 },
  { name: "Aman", score: 75 },
  { name: "Riya", score: 85 },
  { name: "Pooja", score: 60 }
];


const avg = students
  .filter(s => s.score > 80)        // keep only >80
  .map(s => (s.score))                // extract scores
  .reduce((sum, score, _, arr) => sum + score / arr.length, 0);

console.log(avg);

// ------ find the  palindrome  f string---------------

const words = ["level", "hello", "madam", "world", "racecar", "openai"];
const result = words.filter(val => val === val.split('').reverse().join(''));
console.log(result)

//-----------find the large number of this array-----------

const arr = [12, 45, 67, 2, 89, 34];
const newVal = arr.reduce((acc, curr) => curr > acc ? curr : acc, 0)
console.log(newVal)

// ------------ find the square and cube of these array items-----------
const num = [2, 5, 10]

const newArray = num.map((val) => {
  const square = val * val;
  const cube = val * val * val;
  return { original: val, square: square, cube: cube }
})

console.log(newArray)

//---- find the average rating of 


let movieRating = [
  { title: 'Movie A', rating: [4, 5, 6] },
  { title: 'Movie B', rating: [5, 6, 6] },
  { title: 'Movie c', rating: [4, 7, 8] },
]

const averageMovieRating = movieRating.map((value) => {
  const total = value.rating.reduce((acc, curr) => acc + curr, 0)
  const averageVal = (total / value.rating.length).toFixed(2)
  return { title: value.title, rating: averageVal }
  // return value.rating=averageVal
})

// console.log(averageMovieRating)

//-------------Find Duplicate Element an array-------------

function duplicateElement(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1 + i; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        result.push(arr[i])
      }
    }
  }
  return result

}
// const array = [3, 2, 4, 5, 7, 3, 2]
const array = ['bablu','bitu','ji','kumar','sarkar','bitu','bablu']
console.log(duplicateElement(array))