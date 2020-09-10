export default function fetchUrl(endpoint,setState, setLoadingState, boolean) {
  
    console.log("imported function runs");

  let fetchedData = fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
        console.log("outside component")
      return data;
    })
    .catch(err => {
        console.error(err)
        setLoadingState(boolean);
    })

    return fetchedData;
}
