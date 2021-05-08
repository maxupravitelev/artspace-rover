import React, { useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'


const Timer = ({ timelimit=30 }) => {
  
  const secondsInMinuteStartingZero = 60 - 1

  const [seconds, setSeconds] = useState(secondsInMinuteStartingZero)
  const [minutes, setMinutes] = useState(timelimit - 1)

  useEffect(() => {
    if (Number(seconds) > 0) {
      const countdown = setTimeout(() => {
      if (seconds > 10) setSeconds(seconds - 1)
      else setSeconds("0" + (Number(seconds) - 1))
    }
    , 1000)

    return () => clearTimeout(countdown);
  }
    else {
      if (Number(minutes) > 0) {
        if (minutes > 10) setMinutes(minutes - 1)
        else setMinutes("0" + (Number(minutes) - 1))
      }
      else setMinutes(timelimit - 1)
      setSeconds(secondsInMinuteStartingZero)
    }
  }, 
  [seconds])

  return (
    <div>
      <Typography 
        variant="body1"
      > 
        time left: {minutes}:{seconds}
      </Typography>
    </div>
  )
}

export default Timer
