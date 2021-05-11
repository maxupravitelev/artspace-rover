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
    return (
      <div className="capture">
        <JitsiClient />
      </div>
    )
  } else if (streamingMode == 'mjpg') {
    return (
      <div className="capture">
        <MjpgStream />
      </div>
    )
  } else {
    return (
      <div className="capture">
        <DemoStream />
      </div>
    )
  }
  
  
}

export default Stream
