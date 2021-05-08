import React from 'react'

// import material ui components & styles
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"
import { styles } from '../styles'

const useStyles = makeStyles(styles)


const Infobox = ({ infotext, backgroundColor }) => {

  const classes = useStyles()

  const style = {
    backgroundColor: backgroundColor
  }

  return (
    <div 
      className={classes.elevatedDiv}
      style={style}

    >
      <Typography 
        variant="body1"
      >
        {infotext}
      </Typography>
    </div>
  )
}

export default Infobox
