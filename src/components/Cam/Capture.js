import React from 'react'
import dummy from '../../demo_mode/dummy.gif'

import { useSelector } from 'react-redux'


// return live stream component
const Capture = ({  }) => {

  let streamUrl = useSelector((state) => state.urls.streamUrl)

  if (streamUrl == 'dummy_url') {
    streamUrl = dummy
  }

  return (
    <div className="capture">
      <img alt="stream from PiCam" src={streamUrl}></img>

    </div>
  )
}

export default Capture
