import React, { useState, useEffect } from "react";
import fetchUrl from "../../utilities/fetchFunction.js";
import UsersView from "./UsersView.js";
import Spinner from "./../Spinner/Spinner";

function UsersContainer({ url, setIsLoading, isLoading }) {
  let [data, setData] = useState(null);

  useEffect(() => {
    //do we need the spinner to display always before rendering component???
    setIsLoading(true);
    fetchUrl(url).then((response) => {
      if (response.data) {
        setData(response.data);
        setIsLoading(false);
      }

      console.log(response.data);
    });
  }, []);

  if (isLoading) return <Spinner />;

  return <UsersView data={data} />;
}

export default UsersContainer;
