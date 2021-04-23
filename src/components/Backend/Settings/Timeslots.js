import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import Scheduler from '../../../components/Scheduler/'

const Timeslots = () => {

  return (
    <div 
      className="app"
    >
      <Typography
        variant="h3"
        style={{ marginBottom: "1em", backgroundColor: "#0B4F6C", color: "#FBFBFF" }}
      >timeslots</Typography>
            <Grid
        container
        // direction="row"
        // alignItems="left"
        // spacing={0}
        justify="space-between"
      >
        <Grid
          item
          xs
        >
           <Typography
        variant="h5"
        style={{ marginBottom: "1em", backgroundColor: "#0B4F6C", color: "#FBFBFF" }}
      >generate timeslots</Typography>
      <Typography>coming soon</Typography>
        </Grid>
        <Grid
          item
          xs
        >
          <Typography
        variant="h5"
        style={{ marginBottom: "1em", backgroundColor: "#0B4F6C", color: "#FBFBFF" }}
      >delete timeslots</Typography>
          
          <Scheduler />
        </Grid>
      </Grid>
    </div>
  )
}

export default Timeslots
