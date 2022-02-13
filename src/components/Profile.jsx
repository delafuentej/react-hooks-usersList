import React,{useContext} from 'react';
import UserContext from '../context/User/UserContext';


const Profile = () => {
    const{ selectedUser }= useContext(UserContext)
    console.log(selectedUser)
    return (
        <>
           {selectedUser ? 
           <div
            className="card card-body bg-info bg-gradient bg-opacity-25 text-dark p-4 text-center">
               <img 
                 className="img-fluid card-img-top m-auto rounded-circle"
                
               src={selectedUser.avatar} alt={`${selectedUser.first_name} ${selectedUser.last_name}`} />
               <h3
                className="mt-3 card-title"
               > {`${selectedUser.first_name} ${selectedUser.last_name}`}</h3>
               <h6
                className="card-text"
               >E-mail: {selectedUser.email}</h6>
           </div> 
           :
            <h2>No user selected</h2>
           }
        </>
    )
}

export default Profile
