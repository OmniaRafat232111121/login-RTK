import React from 'react'
import './Logout.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../features/userSlice';
const Logout = () => {
  const dispatch=useDispatch();
  const user=useSelector(selectUser)
  const logout=(e)=>{
    dispatch(logout())
  }
  return (
    <div className='logout'>
        <h1>
            welcome <span className='user__logout'>{user.name}</span>
            <br/>
            <button className='button__logout' onClick={(e)=>logout(e)}>Logout</button>
        </h1>
      
    </div>
  )
}

export default Logout
