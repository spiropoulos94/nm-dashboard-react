import React, { useState, useEffect } from "react";
import "./UsersView.scss";
import Spinner from "./../Spinner/Spinner.js";
import fetchUrl from "../../utilities/fetchFunction.js";

function UsersView() {
  let url = "https://reqres.in/api/users/";
  let [users, setUsers] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  let [disabledBtn, setDisabledBtn] = useState(true);

  //GETTING USERS DATA
  function getUsers() {
    fetchUrl(url).then((responseObj) => {
      // console.log(responseObj)
      if (responseObj) {
        setIsLoading(false);
        responseObj.data.sort(function (a, b) {
          var keyA = a.id,
            keyB = b.id;
          // Compare the 2 dates
          if (keyA < keyB) return -1;
          if (keyA > keyB) return +1;
          return 0;
        });

        setUsers(responseObj.data);
      }
    });
  }

  //IF SESSION STORAGE DATA ARE AVAILABLE USE THEM, IF NOT GET DATA
  useEffect(() => {
    // setIsLoading(false);
    if (!JSON.parse(sessionStorage.getItem("users"))) {
      getUsers();
    } else {
      // UPDATE USERS
      setUsers(JSON.parse(sessionStorage.getItem("users")));
      setIsLoading(false)
    }
  }, []);

  //REMOVE SELECTED USER
  function removeUser() {
    let userID = null;
    Array.from(document.querySelectorAll(".radio-btn")).forEach((button) => {
      if (button.checked) {
        userID = parseInt(
          button.parentElement.parentElement.parentElement.children[1].innerText
        );
      }
    });

    let filteredArr = users.filter((user) => user.id !== userID);

    if (
      window.confirm(`Are you sure you want to delete user number ${userID}?`)
    ) {
      setUsers([...filteredArr]);
      sessionStorage.setItem("users", JSON.stringify(filteredArr));
    }
  }

  //ENABLE AND DISABLE DELETE BUTTON
  function toggleDeleteBtn() {
    setDisabledBtn(false);
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <div className="view-heading">
            <h2 className="view-title">Users Screen</h2>{" "}
            <button
              onClick={removeUser}
              className="delete-btn"
              disabled={disabledBtn}
            >
              delete
            </button>
          </div>
          <div className="table-responsive">
            <table
              id="myTable"
              className="table"
              cell-spacing="0"
              cell-padding="0"
            >
              <thead className="table-head">
                <tr>
                  <th></th>
                  <th>ID</th>
                  <th>LAST NAME</th>
                  <th>FIST NAME</th>
                  <th>EMAIL</th>
                  <th>AVATAR</th>
                </tr>
              </thead>
              <tbody className="tbody">
                {users &&
                  users.map((user) => {
                    let { avatar } = user;
                    // let {substring, lastIndexOfAvatar} = avatar;

                    return (
                      <tr key={user.id}>
                        <td>
                          <label>
                            <input
                              className="radio-btn"
                              type="radio"
                              name="radio-btn"
                              onChange={toggleDeleteBtn}
                            />
                          </label>
                        </td>
                        <td>{user.id}</td>
                        <td>{user["last_name"]}</td>
                        <td>{user["first_name"]}</td>
                        <td>{user["email"]}</td>
                        <td>
                          {avatar.substring(
                            avatar.lastIndexOf("r/") + 2,
                            avatar.lastIndexOf("/128")
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default UsersView;
