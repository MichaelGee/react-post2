import { useState, useEffect } from "react";

const useFetch = (url) => {

     // we use the code below to create the initial state
  const  [data, setData] = useState(null);
  const [ isPending, setIsPending] = useState(true);
  

     // to fetch the above data and set post variable when the app loads, we use effect 
  useEffect(() => {
    setTimeout(() => {
    // This will return all the posts that belong to the users in their local host
    fetch(url)
    .then((response) => {
      response.json()
    }) 
    .then((result) => {
      
      /*setting post to result is an indirect way of saying posts = result however if we do it directly
       like that, we would not be able to know when the state has been completed. Hence the need for use state. */
      setData(result);
      setIsPending(false);
    })
  }, 1200)
  // the use effect runs when the app loads so you will use an empty dependency array [] to prevent i from rerendering into a infinite loop
  }, [url]);


  // when creating a custom hook, this line is very important. Ensure you destructure the value you are returning.
  return {data, isPending}
}

// in this custom hook File, we try to make it as dynamic as possible by changing post and setPost to data and setData. I also 
// changed the url (from a hard coded url) to a custom one so that it can be flexible and I passed the url value to the dependency 
// array so anytime the url is changed it can fire again and get a new data from the new url

export default useFetch;