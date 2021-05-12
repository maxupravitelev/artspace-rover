import React from 'react'

// import hook for checking pressed keys
import useKeyPress from '../../hooks/useKeyPress'

// import components
import DirectionDispay from './DirectionDisplay'
import RoverSteeringDispay from './RoverSteeringDispay'
import RoverSteeringButtons from './RoverSteeringButtons'
import RoboArmSteeringButtons from './RoboArmSteeringButtons'
import Stream from '../Stream'


// import material ui components & styles
import { Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"
import { styles } from '../../styles'

const useStyles = makeStyles(styles)


// return component for navigating rover
const Dashboard = ({ }) => {

  const classes = useStyles()

  const left = useKeyPress(37)
  const up = useKeyPress(38)
  const right = useKeyPress(39)
  const down = useKeyPress(40)

  return (
    <div>
      <RoboArmSteeringButtons />
      <Stream />
      <div className={classes.elevatedDiv}>

        <Grid
          container
          direction="column"
          justify="space-around"
        // alignItems="stretch"
        >

          <Grid >
            <DirectionDispay up={up} down={down} left={left} right={right} />
            <Grid >
              <RoverSteeringDispay />
            </Grid>
            <Grid >
              <RoverSteeringButtons />
            </Grid>

          </Grid>

        </Grid>
      </div>

    </div>
  )
}


export default Dashboard
