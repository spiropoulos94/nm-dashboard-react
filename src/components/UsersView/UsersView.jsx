import React, { useState, useEffect } from "react";
import "./UsersView.scss";

function UsersView({ users, setUsers }) {
  let [disabledBtn, setDisabledBtn] = useState(true);

  if (!users && (!Array.isArray(users))) {
    users = [];
  }

  //REMOVE SELECTED USER
  function removeUser() {
    let userID = null;
    Array.from(document.querySelectorAll(".radio-btn")).forEach((radio) => {
      if (radio.checked) {
        userID = parseInt(
          radio.parentElement.parentElement.parentElement.children[1].innerText
        );
      }
    });

    let filteredArr = users.filter((user) => user.id !== userID);

    if (
      window.confirm(`Are you sure you want to delete user number ${userID}?`)
    ) {
      setUsers([...filteredArr]);
    }
  }

  //ENABLE AND DISABLE DELETE BUTTON
  function toggleDeleteBtn() {
    setDisabledBtn(false);
  }

  return (
    <div className="view-wrapper">
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
            {users.map((user) => {
              
              let userAvatar = user.avatar.substring(
                user.avatar.lastIndexOf("r/") + 2,
                user.avatar.lastIndexOf("/128")
              );
              
              return (
                <tr key={user.id} data-id={user.id}>
                  <td>
                    <label>
                      <input
                        className="radio-btn"
                        type="radio"
                        name="radio-btn"
                        onChange={toggleDeleteBtn}/>
                    </label>
                  </td>
                  <td>{user.id}</td>
                  <td>{user["last_name"]}</td>
                  <td>{user["first_name"]}</td>
                  <td>{user["email"]}</td>
                  <td>{userAvatar}</td>
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
