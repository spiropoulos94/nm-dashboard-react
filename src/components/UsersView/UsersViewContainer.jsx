import React, { useState, useEffect } from "react";
import fetchUrl from "../../utilities/fetchUrl.js";
import UsersView from "./UsersView.jsx";
import Spinner from "../Spinner/Spinner";

function UsersViewContainer({ url, setIsLoading, isLoading }) {
  let [data, setData] = useState(null);

  useEffect(() => {
    //do we need the spinner to display always before rendering component???
    setIsLoading(true);
    fetchUrl(url).then((response) => {
      if (response.data) {
        setData(response.data);
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) return <Spinner />;

  return <UsersView data={data} />;
}

export default UsersViewContainer;
