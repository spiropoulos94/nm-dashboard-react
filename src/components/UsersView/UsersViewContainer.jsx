import React, { useState, useEffect } from "react";
import fetchUrl from "../../utilities/fetchUrl";
import UsersView from "./UsersView";
import Spinner from "../Spinner/Spinner";

function UsersViewContainer({ url, setIsLoading, users, setUsers }) {
  let [_isLoading, _setIsLoading] = useState(users===null);


  function updateStateOnFetch(response) {
    const _data = response && response.hasOwnProperty('data') && response['data'] || [];
    setUsers(_data);
    _setIsLoading(false);
    setIsLoading(false);
  }

  useEffect(() => {
    if (!users) {
      fetchUrl(url).then((response) => {
        console.log("Users endpoint request was made!");
        updateStateOnFetch(response)
      });
    } 
  }, []);

  if (_isLoading) return <Spinner />;

  return <UsersView users={users} setUsers={setUsers} />;
}

export default UsersViewContainer;
