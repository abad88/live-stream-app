import React from 'react'
import { useLocation,useParams } from 'react-router'

const Room = () => {
    const { roomId } = useParams()
    const location = useLocation()
    const {name,role} = location.state || {}
  return (
    <div>
      <h1>{roomId} {name} {role}</h1>
    </div>
  )
}

export default Room
