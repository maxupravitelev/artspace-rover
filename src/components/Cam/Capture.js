import React from 'react'

import { useSelector } from 'react-redux'

import JitsiClient from './JitsiClient'

import demoBackground from '../../images/demo_background.jpg'

// return live stream component
const Capture = ({  }) => {

  let streamUrl = useSelector((state) => state.urls.streamUrl)

  if (streamUrl == 'demo' + ':8080/stream/video.mjpeg') {
    streamUrl = dummy
  }

  return (
    <div className="capture">
      {/* <img alt="demo image" src={demoBackground}></img> */}
      <JitsiClient />
    </div>
  )
}

export default Capture
