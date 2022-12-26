import React from 'react'

const user = ({name, id, email , password}) => {
  return (
    <ul className='usersList'>
        <li>
            <p>{name}</p>
            <h3>{id}</h3>
            <p>{email}</p>
            <p>{password}</p>
        </li>
    </ul>
  )
}

export default user