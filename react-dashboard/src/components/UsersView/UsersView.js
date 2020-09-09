import React, { useState, useEffect } from "react";
import "./usersview.scss";

function UsersView() {
  let url = "users.json";

  function getUsers() {
    console.log("users run");
    fetch(url)
      .then((res) => res.json())
      .then((response) => setUserData(response.data));
  }

  let [userData, setUserData] = useState(null);

  useEffect(() => {
    getUsers();
  }, [url]);

  function removeUser() {
    let userID = null;
    Array.from(document.querySelectorAll(".radio-btn")).forEach((button) => {
      if (button.checked) {
        userID = parseInt(
          button.parentElement.parentElement.parentElement.children[1].innerText
        );
      }
    });

    console.log(userID);

    let filteredArr = userData.filter((user) => user.id != userID);
    setUserData([...filteredArr]);
  }

  return (
    <div>
      <div className="view-heading">
        <h2 className="view-title">Users Screen</h2>{" "}
        <button onClick={removeUser} className="delete-btn">
          delete
        </button>
      </div>
      <div className="table-responsive">
        <table id="myTable" className="table" cell-spacing="0" cell-padding="0">
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
            {userData &&
              userData.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <label htmlFor="radio-btn">
                        <input
                          className="radio-btn"
                          type="radio"
                          name="radio-btn"
                        ></input>
                      </label>
                    </td>
                    <td>{user.id}</td>
                    <td>{user["last_name"]}</td>
                    <td>{user["first_name"]}</td>
                    <td>{user["email"]}</td>
                    <td>
                      {user.avatar.substring(
                        user.avatar.lastIndexOf("r/") + 2,
                        user.avatar.lastIndexOf("/128")
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersView;
