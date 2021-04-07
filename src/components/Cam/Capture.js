import React from 'react'
import dummy from '../../demo_mode/dummy.gif'

import { useSelector } from 'react-redux'

import Jitsi from 'react-jitsi'

const roomName = 'LivingScratchesCopeShakily'
const userFullName = 'rover-client'

// return live stream component
const Capture = ({  }) => {

  let streamUrl = useSelector((state) => state.urls.streamUrl)
  console.log(streamUrl)
  if (streamUrl == 'demo' + ':8080/stream/video.mjpeg') {
    streamUrl = dummy
  }

  return (
    <div className="capture">
      <img alt="stream from PiCam" src={streamUrl}></img>
      <Jitsi roomName={roomName} displayName={userFullName} />
    </div>
  )
}

export default Capture
