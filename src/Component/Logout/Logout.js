import React from 'react'
import './Logout.css'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectUser } from '../../features/userSlice';
import {Navigate, useNavigate} from "react-router-dom"

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const logout = (e) => {
    dispatch(login({
      name:'',
      email:'',
      password:'',
      loggedIn:false
    }))
    Navigate("/login")
    
  };

  return (
    <div className='logout'>
        <h1>
            welcome <span className='user__logout'>{user.name}😊</span>
            <br/>
            <button className='button__logout' onClick={(e) => logout(e)}>Logout</button>
        </h1>
      
    </div>
  )
}

export default Logout
