import React, { useState, useEffect } from "react";
import fetchUrl from "../../utilities/fetchUrl.js";
import UsersView from "./UsersView.jsx";
import Spinner from "../Spinner/Spinner";

function UsersViewContainer({ url, setIsLoading }) {
  let [data, setData] = useState(null);
  let [_isLoading, _setIsLoading] = useState(true);

  useEffect(() => {
    fetchUrl(url).then((response) => {
      console.log("Users endpoint request was made!")
      if (response.data) {
        setData(response.data);
        _setIsLoading(false);
        setIsLoading(_isLoading);
      }
    });
  }, []);

  if (_isLoading) return <Spinner />;

  return <UsersView data={data} />;
}

export default UsersViewContainer;
