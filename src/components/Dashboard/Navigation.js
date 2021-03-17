import React, { useState, useEffect } from 'react'
import { Button, Typography } from '@material-ui/core'

import useKeyPress from '../../hooks/useKeyPress'
 
import DirectionDispay from './DirectionDisplay'
import SteeringButtons from './SteeringButtons'



// return component for navigating rover
const Navigation = ({  }) => {

  const left = useKeyPress(37);
  const up = useKeyPress(38);
  const right = useKeyPress(39);
  const down = useKeyPress(40);


  return (
    <div className="app">
      <DirectionDispay up={up} down={down} left={left} right={right}/>

      <SteeringButtons />

    </div>
  )
}


export default Navigation
