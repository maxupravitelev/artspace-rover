import React from 'react'
import { Button } from '@material-ui/core'


// init redux and import reducers
import { useSelector } from 'react-redux'

import Timeslot from './Timeslot'
import Togglable from '../../components/Togglable'


const Scheduler = () => {

  let timeslots = useSelector((state) => state.timeslots)

    return (
      <div 
        // className="app"
      >
        <Togglable buttonLabel="show available timeslots">
        {timeslots.map(timeslot => {
          if (timeslot.available) return (
          <Timeslot key={timeslot._id} timeslot={timeslot}/>
        )}
        )}
        </Togglable>
      </div>
    ) 

}

export default Scheduler