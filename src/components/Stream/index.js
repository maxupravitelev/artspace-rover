import React from 'react'

import { useSelector } from 'react-redux'

import JitsiClient from './JitsiClient'
import MjpgStream from './MjpgStream'
import DemoStream from './DemoStream'

// return live stream component
const Stream = ({  }) => {

  // fetch set streaming mode from exhibition profile (populated with a rover profile)
  let exhibitions = useSelector((state) => state.exhibitions)
  let streamingMode = exhibitions[0].rovers[0].streamingMode

  if (streamingMode == 'jitsi') {
    return <JitsiClient />
  } else if (streamingMode == 'mjpg') {
    return <MjpgStream />
  } else {
    return <DemoStream />
  }
  
  
}

export default Stream
