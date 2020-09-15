import React, { useState, useEffect } from "react";
import "./UsersView.scss";

function UsersView({ users, setUsers }) {
  let [disabledBtn, setDisabledBtn] = useState(true);
  let [selectedOption, setSelectedOption] = useState(null);

  if (!users && !Array.isArray(users)) {
    users = [];
  }

  // to toggleDeletebtn prepei na enimerwnei thn selectedOption gia ton epilegmeno xrhsth prokeimenou na svistei

  //REMOVE SELECTED USER
  function removeUser() {
    let filteredArr = users.filter((user) => user.id != selectedOption);

    if (
      window.confirm(
        `Are you sure you want to delete user number ${selectedOption}?`
      )
    ) {
      setUsers(filteredArr);
      setDisabledBtn(true);
    }
  }

  //ENABLE AND DISABLE DELETE BUTTON
  function handleOnChange(e) {
    //let userID = parseInt(
    //  e.target.parentElement.parentElement.parentElement.children[1].innerText
    //);
    
    console.log('event target', e.target)
    console.log('event current target', e.currentTarget)
    let userID = parseInt(e.currentTarget.children[1].innerText)
    setSelectedOption(userID);
    setDisabledBtn(false);
  }

  return (
    <div className="view-wrapper">
      <div className="view-heading">
        <h2 className="view-title">Users Screen</h2>{" "}
        <button
          onClick={removeUser}
          className="delete-btn"
          disabled={disabledBtn}>
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
                <tr key={user.id} onChange={handleOnChange}>
                  <td>
                    <label>
                      <input
                        className="radio-btn"
                        type="radio"
                        name="radio-btn"
                        
                      />
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
