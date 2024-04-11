import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import  axios  from 'axios'; 


const Users = () => {
   const [users, setUsers] = useState([]);
   const [user, setEdit] = useState([false]);


   useEffect(() => {
      const fetchUsers = async () => {
     console.log("fetcUsers");   
           try {
          const response = await axios.get("http://localhost:3008/users");
          console.log(response);
          setUsers(response.data);
          } catch (e) {
          alert("Error fetching users", e);
          }
         };
         fetchUsers();
    }, []);

    const deleteUser = async (user_id) => {
      console.log("deleteUser");
      try {
        await axios.delete(`http://localhost:3008/user/${user_id}`);
         const newUsers = users.filter((user) => user.user_id !== user_id);
         setUsers(newUsers);
        
      } catch (e) {
        console.error("Error deleting user:", e);
      }
    };
   

   return (
      <div>
           usuarios refistrados &nbsp;
               {users.length}          

             <ul>
               {users.map((user) => (
                <li key={user.user_id}>
                <button onClick={() => setEdit(true)}>edit</button> 
                {user.user_name} {user.user_last_name} {user.user_email} 
                <button onClick={() => deleteUser(user.user_id)}>delete</button>           
               </li>
               ))}


             </ul>

      
      
      
      </div>

   );




};

Users.propTypes = {};

Users.defaultProps = {};

export default Users;
