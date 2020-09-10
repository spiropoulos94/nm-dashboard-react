export default function fetchUrl(endpoint,setLoadingState, bool) {
  console.log("imported function runs");

  let fetchedData = fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
        console.log("outside component")
      return data;
    })
    .catch(err => {
        console.error(err)
        setLoadingState(bool);
    })

    return fetchedData;
}
