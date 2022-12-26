import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import User from '../Components/User'
import * as userActions from '../Store/Action/user'

const Users = () => {
    const users = useSelector((state) => {return state.users})
    const dispatch = useDispatch()
    const removeUser = () => {dispatch(userActions.removeUser())}

  return (
    <div className='Users'>Users
        {users.map((user) => {
            return <User name={user.name} id={user.id} email={user.email} password={user.password}/>
        })}
        <button onClick={removeUser} className="remove">remove users</button>
    </div>
  )
}

export default Users