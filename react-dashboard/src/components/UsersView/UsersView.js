import React, { useState, useEffect } from "react";
import "./usersview.scss";

function UsersView() {
  function getUsers() {
    fetch("users.json")
      .then((res) => res.json())
      .then((response) => setUserData(response.data));
  }

  let [userData, setUserData] = useState(null);

  console.log(userData);

  useEffect(() => {
    getUsers();
  }, [setUserData]);

  function removeUser() {
    console.log('user removed')
    let newArr = userData
    newArr.pop()
    setUserData(newArr)
    }
    
    
    
  

  return (
    <div>
      <div className="view-heading">
        <h2 className="view-title">Users Screen</h2>{" "}
        <button onClick={removeUser} className="delete-btn">delete</button>
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
                        <input type="radio" name="radio-btn"></input>
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
