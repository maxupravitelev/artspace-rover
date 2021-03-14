import React, { useState } from 'react'
import { Button, Typography } from '@material-ui/core'

import { useSelector } from 'react-redux'

import { keyPressed, keyReleased} from '../services/controls' 

// return component for navigating rover
const Navigation = ({  }) => {

  const [direction, setDirection] = useState("idle")


  console.log(direction)
  document.addEventListener('keydown', (event) => {
    let pressed_direction = keyPressed(event);
    setDirection(pressed_direction)
  })
  document.addEventListener('keyup', (event) => {
    keyReleased(event);
    setDirection("idle")
  })

  return (
    <div className="app">
      <Typography>{direction}</Typography>

    </div>
  )
}

export default Navigation
