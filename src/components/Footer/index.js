import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

// return header component
const Footer = () => {
  return (
    <div className="footer">
      <Typography variant="subtitle2" component="">
        <Link to='/backendLogin'>backend </Link>
        <Link to='/imprint'>imprint </Link>
        <Link to='/dataprotection'>data protection</Link>        
      </Typography>
    </div>
  )
}

export default Footer
