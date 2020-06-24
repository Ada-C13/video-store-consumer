import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Individual from './Individual';




const reformatData = (data) => {
  return data.map((element) => {
    return element;
  });
};

const Users = (props) => {
  // const [chosenUser, setChosenUser] = useState('')
  const [userList, setUserList] = useState([]);
  const endPoint = `${props.url}customers`

  const onSelectUser= (user) => {  
    // setChosenUser(user); 
    // console.log(chosenUser)
    props.onSubmitUserCallback(user)
  };

  
  const getUsers = (url) => {

    axios.get(url)
      .then((response) => {
        const apiUserList = reformatData(response.data);
        setUserList(apiUserList);
      })
      .catch((error) => {
        console.log(error)
      });
  };
 
  useEffect(() => { getUsers(endPoint);}, [endPoint]);

    const formatUsers = (users) => {
      return (
        <ul>
          {users.map(user => {
            return(
              <div key={user.id}>
                <div class="card users-card">
                  <h4><b>{user.name}</b></h4>
                  <p>{user.registered_at}</p>
                  <p>{ user.address }</p>
                  <p>{ user.state }</p>
                  <p>{ user.city }</p>
                  <p>{ user.postal_code }</p>
                  <p>{ user.phone }</p>
                  <p>{ user.accout_credit }</p>
                  <div>
                    <input className="add-library-button" type="button" value="Select This User" onClick={() => onSelectUser(user)} />
                  </div>
                </div>
              </div>
            );
          }
          )}
        </ul>
      );
    } 

  return ( 
  <main>
    <div className = "store" > {
    //   formatUsers
      formatUsers(userList)
    } 
    </div> 
  </main>
  );
}

export default Users;