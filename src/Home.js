import React,{ useState } from 'react'
import { useNavigate } from 'react-router';

const Home = () => {
    const [name, setName] = useState("");
    const [role, setRole] = useState("Audiance");
    const [roomId, setRoomId] = useState("");
    const navigate = useNavigate()

    const navigateToRoom = () =>{
        navigate(`/room/${roomId}`,{
            state:{name:name,role:role},
        })
    }

  return (
    <div>
      <h1>Join Room</h1>
      <input type='text' placeholder='Enter Your Name' onChange={e=>setName(e.target.value)}/>Name<br/>
      <input type='text' placeholder='Enter Room Id' onChange={e=>setRoomId(e.target.value)}/>Room Id
      <div>
        <label>
            <input type='Radio' value={"Host"} checked={role==="Host"} onChange={e=>setRole(e.target.value)}/>Host
        </label>
        <label>
            <input type='Radio' value={"Audiance"} checked={role==="Audiance"} onChange={e=>setRole(e.target.value)}/>Audiance
        </label>
      </div>
      <button onClick={navigateToRoom}>Join Room</button>
    </div>
  )
}

export default Home
