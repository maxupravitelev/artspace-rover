import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

// return header component
const Header = () => {
  return (
    <div className="header">
      <Link to='/'><Typography variant="h5" component="h2">
        [ artspace rover ]
      </Typography></Link>
    </div>
  )
}

export default Header
