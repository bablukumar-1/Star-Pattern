

const fetchedData =  () => {
    try {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
               response.json().then((result) => {
                    result.forEach((element, index) => {
                        if (index < 5) {
                           console.log(element.title)
                        }
                    });
                })
            })
    } catch (error) {
        console.log('error', error)
    }
}

fetchedData()