import React from 'react'

import demoBackground from '../../images/demo_background.jpg'

// import material ui components & styles
import { makeStyles } from "@material-ui/styles"
import { styles } from '../../styles'

const useStyles = makeStyles(styles)


const DemoStream = ({  }) => {

  const classes = useStyles()

  return (
    <div className={classes.elevatedDiv}>
      <img alt="demo image" src={demoBackground} width="100%" height="auto"></img>
    </div>
  )
}

export default DemoStream
