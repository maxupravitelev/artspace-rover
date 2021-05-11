import React from 'react'

import { useSelector } from 'react-redux'

// import material ui components & styles
import { makeStyles } from "@material-ui/styles"
import { styles } from '../../styles'

const useStyles = makeStyles(styles)


const MjpgStream = ({  }) => {

  const classes = useStyles()

  let streamUrl = useSelector((state) => state.urls.streamUrl)

  return (
    <div className={classes.elevatedDiv}>
      <img alt="demo image" src={streamUrl}></img>
    </div>
  )
}

export default MjpgStream
