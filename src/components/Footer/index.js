import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

// return header component
const Footer = () => {
  return (
    <div className="footer">
      <Typography variant="subtitle2" component="">
        <Link to='/about'>about </Link>        
        <Link to='/contact'>contact </Link> 
        
        <Link to='/imprint'>imprint </Link>
        <Link to='/dataprotection'>data protection </Link>
        <Link to='/backendLogin'>| backend login </Link>
  
      </Typography>
    </div>
  )
}

export default Footer
