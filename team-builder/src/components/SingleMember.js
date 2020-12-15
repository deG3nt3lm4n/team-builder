import React from 'react'

function SingleMember({name, email, role}) {
  return (
    <div>
        <h2>{name}</h2>
        <h6>{email}</h6>
        <h3>{role}</h3>
    </div>
  )
}

export default SingleMember
