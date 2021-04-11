import React, { useState } from 'react'
import { Jutsu } from 'react-jutsu' // Component
import { Button } from '@material-ui/core'



const JitsiClient = () => {
  // const [room, setRoom] = useState('')
  // const [name, setName] = useState('')
  const [call, setCall] = useState(false)
  const [password, setPassword] = useState('')

  const handleClick = event => {
    event.preventDefault()
    // if (room && name) setCall(true)
    setCall(true)
  }

  let roomName = "test"
  let displayName = "test"

  return call ? (
    <Jutsu
      domain='meet.brimboria.net'
      roomName={roomName}
      displayName={displayName}
      password={password}
      onMeetingEnd={() => console.log('Meeting has ended')}
      loadingComponent={<p>loading ...</p>}
      errorComponent={<p>Oops, something went wrong</p>} />
  ) : (
    <form>
      {/* <input id='room' type='text' placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
      <input id='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} /> */}
      {/* <input id='password' type='text' placeholder='Password (optional)' value={password} onChange={(e) => setPassword(e.target.value)} /> */}
      <Button 
        variant="outlined"
        onClick={handleClick} 
        // type='submit'
        >
        start stream
      </Button>
    </form>
  )
}

export default JitsiClient