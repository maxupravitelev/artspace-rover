import React from 'react'
import Scheduler from '../../../components/Scheduler/'

// import component text elements
import componentsTexts from '../../../text/components'

// import material ui components & styles
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { styles } from '../../../styles'

const useStyles = makeStyles(styles)


const Timeslots = () => {
  const classes = useStyles()

  return (
    <div className={classes.elevatedDiv}>
      <Typography variant="h3" className={classes.sectionHeadline}>
      {componentsTexts.Backend.Timeslots.headline}
      </Typography>
      <Grid
        container
        // direction="row"
        // alignItems="left"
        // spacing={0}
        justify="space-between"
      >
        <Grid item xs={12} sm={6}>
          <div className={classes.elevatedDiv}>
            <Typography variant="h5">{componentsTexts.Backend.Timeslots.generate}</Typography>
            <Typography>coming soon</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.elevatedDiv}>
            <Typography variant="h5">{componentsTexts.Backend.Timeslots.delete}</Typography>
            <Scheduler />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Timeslots
