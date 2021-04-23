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
        <Grid item xs={12} sm={6}>
          <div className="app"> 
          <Typography variant="h5">generate timeslots</Typography>
      
        <Typography>coming soon</Typography>
      </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="app">
          <Typography variant="h5">delete timeslots</Typography>
          
          <Scheduler />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Timeslots
