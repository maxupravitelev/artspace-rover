import React from 'react'
import { Link } from 'react-router-dom'

// init redux and import reducers
import { useSelector } from 'react-redux'

// import components
import Infobox from '../Infobox'


// import material ui components
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/styles"
import { Typography } from '@material-ui/core'
import { styles } from '../../styles'


const useStyles = makeStyles(styles)

const Exhibitions = () => {

  const classes = useStyles()

  const exhibitions = useSelector((state) => state.exhibitions)

  if (exhibitions.length < 1) return <div>loading...</div>

  const infotext = "Please select an exhibition you want to view."

  return (
    <div className="app">
      <Infobox infotext={infotext}/>
      <Grid className={classes.container}
          
          container
          // direction="column"
          justify="flex"
          alignItems="center"
          display="flex"
          >
      {exhibitions.map((exhibition) => (
        <Grid
          item
          key={exhibition._id}
          // xs={12} 
          // sm={6}
          >
          <div className={classes.elevatedDiv}>
          <Link to={`/exhibitions/${exhibition._id}`}>
          <img src={exhibition.bannerImage} alt="exhibition banner image" width="300"/>
            </Link>
            <Typography variant="body2">{exhibition.artspace}</Typography>
            <Typography variant="h6">{exhibition.title}</Typography>
            <Typography>{exhibition.openingDay} - {exhibition.closingDay}</Typography>
            </div>
        </Grid>              
    ))
    }
    </Grid>
    </div>
  )
}

export default Exhibitions