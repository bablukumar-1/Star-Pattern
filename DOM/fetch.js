// --- there are three type of state
// 1. is pending state is as initial state
// 2. is successful is show as then block
// 3. is failed state that is show an catch block
// 4. finaly() it is alow execute success or pending or showing error


// const title = document.getElementById('title')
// const url = 'https://jsonplaceholder.typicode.com/posts'

// console.log('hhi ji')
// const fetchItem = async () => {
//   await fetch(url)
//     .then((response) => {
//       response.json()
//         .then(obj => {
//           const value = obj
//           value.map((values, index) => {
//             const h3 = document.createElement('h3')
//             const p = document.createElement('p')
//             h3.innerText = `index: ${index} title: ${values.title}`
//             p.innerText=values.body
//             title.appendChild(h3)
//             title.appendChild(p)

//           })
//         })
//         .catch((error) => console.log('converting json error', error))
//     })
//     .catch((error) => {
//       console.log('lo error aa gaya!', error)
//     })
//     .finally(() => {
//       console.log('mai to humesa aauga ji aapke sath')
//     })

// }

// console.log('byyy')
// fetchItem()


// promise chaining 


const api = 'https://jsonplaceholder.typicode.com/posts'
const title = document.getElementById('title')

 fetch(api)
  .then((Response) => {
     Response.json()
      .then((result) => {
        // console.log(result[0])
        result.map((values, index) => {
          // console.log(`index : ${index} title: ${values.title}`)
          const h3 = document.createElement('h3')
          const p = document.createElement('p')
          if (index < 10) {
            h3.innerText = `${values.id} ${values.title}`
            p.innerText = values.body
            title.appendChild(h3)
            title.appendChild(p)
          }
        })
      })
  })
  .catch((error) => {
    title.innerText = error
  })
  .finally(() => {
    console.log('i am always run !')
  })