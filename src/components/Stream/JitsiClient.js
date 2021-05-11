import React, { useState } from 'react'
import { Jutsu } from 'react-jutsu' 
import { Button } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { removeProtocolFromUrl } from '../../utils'

const JitsiClient = () => {
  const [call, setCall] = useState(false)
  const [password, setPassword] = useState('')

  let jitsiUrl = useSelector((state) => state.urls.jitsiUrl)

  jitsiUrl = removeProtocolFromUrl(jitsiUrl)

  const handleClick = event => {
    event.preventDefault()
    setCall(true)
  }

  let roomName = "test"
  let displayName = "test"

  return call ? (
    <Jutsu
      domain={jitsiUrl}
      roomName={roomName}
      displayName={displayName}
      password={password}
      onMeetingEnd={() => console.log('Meeting has ended')}
      loadingComponent={<p>loading ...</p>}
      errorComponent={<p>Oops, something went wrong</p>} />
  ) : (
    <form>
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