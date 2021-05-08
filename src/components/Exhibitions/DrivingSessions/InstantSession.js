import React from 'react'
import StatusLight from './StatusLight'

// import material ui components & styles
import { Typography, Button } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"
import { styles } from '../../../styles'

const useStyles = makeStyles(styles)


const InstantSession = ({ checkIfInstantSessionPossible }) => {

  const classes = useStyles()

  return (
    <div className={classes.elevatedDiv}>
      <Typography variant="h5">instant ride</Typography>
      <StatusLight />
      <Button
        // type="submit"
        onClick={checkIfInstantSessionPossible}
        variant="outlined"
      >
        start
      </Button>
    </div>
  )
}

export default InstantSession
