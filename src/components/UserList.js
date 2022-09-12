import React from 'react'

function UserList({ people: { email, name, password, __v, _id }}) {
  return (
    <div className='list' key={_id}>
        <div>
            <span>{__v}</span>
            <p>{email}</p>
            <p>{name}</p>
            <span>{password}</span>
        </div>
    </div>
  )
}

export default UserList;