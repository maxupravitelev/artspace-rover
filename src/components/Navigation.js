import React, { useState, useEffect } from 'react'
import { Button, Typography } from '@material-ui/core'

import useKeyPress from '../hooks/useKeyPress'
 




// return component for navigating rover
const Navigation = ({  }) => {

  const KEY_LEFT_ARROW = useKeyPress(37);
  const KEY_UP_ARROW = useKeyPress(38);
  const KEY_RIGHT_ARROW = useKeyPress(39);
  const KEY_DOWN_ARROW = useKeyPress(40);


  if (KEY_UP_ARROW) {
      console.log("up")
      return (
      <div className="app">
          <div>up</div>
      </div>)
  }

  return (
    <div className="app">

    </div>
  )
}



export default Navigation
