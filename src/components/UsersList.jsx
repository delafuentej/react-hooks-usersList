import React, {useEffect, useContext } from 'react';
import UserContext from '../context/User/UserContext';

const UsersList = () => {

    const  { getUsers, getProfile,  users} =useContext(UserContext)
   
    useEffect(()=>{
        
        getUsers();
        console.log(users)
        
        
    },[])
  
    return (
     
           

            <div className="list-group h-100">

                {
                    users.map(user=>(
                        <a 
                            key={user.id}
                            className="list-group-item list-group-item-action list-group-item-info d-flex justify-content-start"
                            onClick={()=>getProfile(user.id)}
                            href="#!">
                            
                            <img 
                                    className="img-fluid mr-4 rounded-circle"
                                    width="70"
                                    src={user.avatar} 
                                    alt={`${user.first_name} ${user.last_name}`} 
                            />
                                <h2
                                className="text-center d-flex justify-content-center align-items-center ms-3"
                                >
                                {`${user.first_name} ${user.last_name}`}
                                
                                </h2>
                                              
                        
                        </a>
                    ))
                }
            </div>
     
    )
}

export default UsersList
