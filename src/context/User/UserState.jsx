
import React,{useReducer} from 'react'
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import axios from "axios";

const UserState = (props) => {
    const initialState ={
        users: [],
        selectedUser: null
    }
    const[state, dispatch ]= useReducer(UserReducer, initialState);


    const getUsers= async()=>{
        const res = await axios.get('https://reqres.in/api/users');
        const data= res.data.data;
       /*  console.log(data) */
       dispatch({
           type: 'GET_USERS',
           payload: data
       })
    }
    
    const getProfile= async(id)=>{
        const res= await axios.get(`https://reqres.in/api/users/${id}`)
        const data= res.data.data;
        console.log(data)
       dispatch({
           type: 'GET_PROFILE',
           payload: data
       })
     
    }

    return (
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
        }}>

            {props.children}

        </UserContext.Provider>
    )
}

export default UserState;







