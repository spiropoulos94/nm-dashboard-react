import React,{useState, useEffect} from 'react'

function UsersView() {

    function getUsers(){
        fetch("users.json")
        .then(res=>res.json())
        .then(response => console.log(response))
    }

    let [userData, setUserData] = useState(null)


    useEffect(()=>{
        getUsers()
    },[])

    return (
        <div className="user-view-wrapper">
            <h2 className="view-title">Users Screen</h2>
            <table className="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>LAST NAME</th>
                        <th>FIST NAME</th>
                        <th>EMAIL</th>
                        <th>AVATAR</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
        </div>
    )
}

export default UsersView
