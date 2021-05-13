import React from 'react'

import { useSelector } from 'react-redux'

// import material ui components & styles
import { makeStyles } from "@material-ui/styles"
import { styles } from '../../styles'

const useStyles = makeStyles(styles)


const MjpgStream = ({  }) => {

  const classes = useStyles()

  let exhibitions = useSelector((state) => state.exhibitions)
  let mjpgUrl = exhibitions[0].rovers[0].mjpgUrl

  return (
    <div className={classes.elevatedDiv}>
      <img alt="mjpg stream" src={mjpgUrl}></img>
    </div>
  )
}

export default MjpgStream
