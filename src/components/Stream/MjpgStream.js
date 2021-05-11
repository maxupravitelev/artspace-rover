import React from 'react'

import { useSelector } from 'react-redux'


const MjpgStream = ({  }) => {

  let streamUrl = useSelector((state) => state.urls.streamUrl)

  return (
    <div className="capture">
      <img alt="demo image" src={streamUrl}></img>
    </div>
  )
}

export default MjpgStream
