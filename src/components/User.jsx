import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams();
  return (
    <div>
      User is {params.username}
    </div>
  )
}

export default User
