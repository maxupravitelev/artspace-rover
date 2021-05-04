import React from 'react'
import { Link } from 'react-router-dom'

// import texts for textareas
import componentsTexts from '../text/components'

// import material ui components & styles
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"
import { styles } from '../styles'

const useStyles = makeStyles(styles)


const Header = () => {

  const classes = useStyles()

  return (
    <div className={classes.header}>
      <Link to='/'><Typography variant="h4" component="h2">
        [ artspace rover ]
      </Typography></Link>
      <Typography 
        style={{ marginTop: "0.5em" }}
      >{componentsTexts.Header.tagline}</Typography>
    </div>
  )
}

export default Header
