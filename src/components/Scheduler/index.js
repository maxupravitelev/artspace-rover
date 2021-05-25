import React from 'react'

// init redux and import reducers
import { useSelector } from 'react-redux'

import Timeslot from './Timeslot'
import Togglable from '../../components/Togglable'

// import material ui components
import { Grid } from '@material-ui/core'


const Scheduler = () => {

  let timeslots = useSelector((state) => state.timeslots)

  return (
    <div>
      <Togglable buttonLabel="show available timeslots">
        <Grid
          container
          direction="row"
          justify="space-around"
        // alignItems="stretch"
        >
          {timeslots.map(timeslot => {
            if (timeslot.available) return (
              <Grid
                item
                key={timeslot._id}
                xs={12}
                sm={4}
              >
                <Timeslot key={timeslot._id} timeslot={timeslot} />
              </Grid>
            )
          }
          )}
        </Grid>
      </Togglable>
    </div>
  )

}

export default Scheduler