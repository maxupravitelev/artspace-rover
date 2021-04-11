import React from 'react'
import dummy from '../../demo_mode/dummy.gif'

import { useSelector } from 'react-redux'

import JitsiClient from './JitsiClient'

// return live stream component
const Capture = ({  }) => {

  let streamUrl = useSelector((state) => state.urls.streamUrl)

  if (streamUrl == 'demo' + ':8080/stream/video.mjpeg') {
    streamUrl = dummy
  }

  return (
    <div className="capture">
      {/* <img alt="stream from PiCam" src={streamUrl}></img> */}
      <JitsiClient />
    </div>
  )
}

export default Capture
