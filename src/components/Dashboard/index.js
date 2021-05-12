import React from 'react'

// import hook for checking pressed keys
import useKeyPress from '../../hooks/useKeyPress'
 
// import components
import DirectionDispay from './DirectionDisplay'
import RoverSteeringDispay from './RoverSteeringDispay'
import RoverSteeringButtons from './RoverSteeringButtons'
import RoboArmSteeringButtons from './RoboArmSteeringButtons'

// import material ui components & styles
import { makeStyles } from "@material-ui/styles"
import { styles } from '../../styles'

const useStyles = makeStyles(styles)


// return component for navigating rover
const Dashboard = ({  }) => {

  const classes = useStyles()

  const left = useKeyPress(37)
  const up = useKeyPress(38)
  const right = useKeyPress(39)
  const down = useKeyPress(40)

  return (
    <div className={classes.elevatedDiv}>
      <RoboArmSteeringButtons />
      <DirectionDispay up={up} down={down} left={left} right={right}/>
      <RoverSteeringDispay />
      <RoverSteeringButtons />
    </div>
  )
}


export default Dashboard
