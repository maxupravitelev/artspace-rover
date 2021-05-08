import React from 'react'

// import material ui components & styles
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"
import { styles } from '../../styles'

const useStyles = makeStyles(styles)


const Contact = () => {

  const classes = useStyles()

  return (
    <div className={classes.elevatedDiv}>
      <Typography variant="subtitle2" component="">
        contact
      </Typography>
    </div>
  )
}

export default Contact
