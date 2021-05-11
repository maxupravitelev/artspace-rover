import React from 'react'

import { useSelector } from 'react-redux'

import JitsiClient from './JitsiClient'
import MjpgStream from './MjpgStream'
import DemoStream from './DemoStream'

// return live stream component
const Stream = ({  }) => {

  let user = useSelector((state) => state.user)
  let streamingMode = user.rovers[0].streamingMode

  if (streamingMode == 'jitsi') {
    return <JitsiClient />
  } else if (streamingMode == 'mjpg') {
    return <MjpgStream />
  } else {
    return <DemoStream />
  }
  
  
}

export default Stream
