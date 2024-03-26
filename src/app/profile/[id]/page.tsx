import React from 'react'

const UserProfile = ({params}:any) => {
  return (
    <div>Profile page with id: {params.id}</div>
  )
}

export default UserProfile