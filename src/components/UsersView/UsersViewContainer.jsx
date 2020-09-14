import React, { useState, useEffect } from "react";
import fetchUrl from "../../utilities/fetchUrl.js";
import UsersView from "./UsersView.jsx";
import Spinner from "../Spinner/Spinner";

function UsersViewContainer({ url, setIsLoading, users, setUsers }) {
  let [_isLoading, _setIsLoading] = useState(users===null);

  useEffect(() => {
    if (!users) {
      fetchUrl(url).then((response) => {
        console.log("Users endpoint request was made!");
        if (response.hasOwnProperty("data")) {
          setUsers(response.data);
        }
      });
    } 
    _setIsLoading(false)
    setIsLoading(_isLoading)

  }, []);

  if (_isLoading) return <Spinner />;

  return <UsersView users={users} setUsers={setUsers} />;
}

export default UsersViewContainer;
