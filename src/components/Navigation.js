import React from 'react'
import { Button, Typography } from '@material-ui/core'

import { useSelector } from 'react-redux'

import { keyPressed, keyReleased} from '../services/controls' 

// return component for navigating rover
const Navigation = ({  }) => {


  document.addEventListener('keydown', keyPressed)
  document.addEventListener('keyup', keyReleased)

  return (
    <div className="app">

    </div>
  )
}

export default Navigation
