import React from 'react'
import { Link } from 'react-router-dom'

// init redux and import reducers
import { useSelector } from 'react-redux'

// import components
import Infobox from '../Infobox'

// import material ui components & styles
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"
import { styles } from '../../styles'

// converter between date formats
import { germanDateToUSDate } from '../../utils'

// import texts for textareas
import componentsTexts from '../../text/components'


const useStyles = makeStyles(styles)


const Exhibitions = () => {

  const classes = useStyles()

  let exhibitions = useSelector((state) => state.exhibitions)

  // sort exhibitions by opening date
  exhibitions.sort((a,b) => germanDateToUSDate(a.openingDay) - germanDateToUSDate(b.openingDay))

  // return loading info if exhibitions are not loaded yet
  if (exhibitions.length < 1) return <div>loading...</div>

  return (
    <div className="app">
      <Infobox infotext={componentsTexts.Exhibitions.infotext}/>
      <Grid className={classes.container}
          
          container
          // direction="column"
          justify="flex-start"
          alignItems="center"
          display="flex"
          >
      {exhibitions.map((exhibition) => (
        <Grid
          item
          key={exhibition._id}
          xs={12} 
          sm={6}
          >
          <div className={classes.elevatedDiv}>
          <Link to={`/exhibitions/${exhibition._id}`}>
          <img src={exhibition.bannerImage} alt="exhibition banner image" width="100%" height="auto"/>
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