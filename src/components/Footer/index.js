import React from 'react'
import { Link } from 'react-router-dom'

// import material ui components & styles
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"
import { styles } from '../../styles'

const useStyles = makeStyles(styles)


const Footer = () => {

  const classes = useStyles()

  return (
    <div className={classes.footer}>
      <Typography variant="subtitle2" component="">
        <Link to='/about'>about</Link><span> </span>
        <Link to='/contact'>contact</Link><span> </span>
        
        <Link to='/imprint'>imprint</Link><span> </span>
        <Link to='/dataprotection'>data protection</Link><span> | </span>
        <Link to='/backend'>backend</Link>
  
      </Typography>
    </div>
  )
}

export default Footer
