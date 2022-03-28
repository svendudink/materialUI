///////// fetch using Async Await (remember, if we want to catch the error, we need the try{} and catch{} blocks)

const fetchDataAsync = async () => {

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
          // console.log(response)
          const dataAsync = await response.json()
          console.log("aync Data", dataAsync)

          if (dataAsync) {
            
            const seconData = await fetchOutside()
             console.log(seconData)
          }        
    }
    catch (err) {
      console.log(err)
    }
  }

// we can create our second fetch function outside the first one, and call it with an If() condition
  const fetchOutside = async () => {
    const secondResponse = await fetch("https://jsonplaceholder.typicode.com/users")
        const secondData = await secondResponse.json()
        console.log('secondData>>>', secondData)
        
        //we have to return the value (secondData) to be able to use ouside this function
        return (
          secondData
        )
  }

  
  // we use useEffect hook to run our fetch functions the moment the component/page loads
  useEffect(() => {
    fetchData()
    fetchDataAsync()
  }, [])
  
    return (
    
    
    <div>
       
    </div>
  )
}

export default MyComponent