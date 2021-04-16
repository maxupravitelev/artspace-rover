import React from 'react'

// init redux and import reducers
import { useSelector } from 'react-redux'


// import material ui components
import Grid from '@material-ui/core/Grid'

import { Link } from 'react-router-dom'


import Infobox from '../Infobox'

import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({

  container: {
    display: "table-cell",
    textAlign: "initial"
  }
})

const Exhibitions = () => {

  const classes = useStyles()

  const exhibitions = useSelector((state) => state.exhibitions)

  if (!exhibitions) return <div>loading...</div>

  const infotext = "Please select an exhibition you want to view."

  return (
    <div className="app">
      <Infobox infotext={infotext}/>
      {exhibitions.map((exhibition) => (
                <Grid className={classes.container}
                  key={exhibition._id}
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  display="table-cell"
                  >
                  <Link to={`/exhibitions/${exhibition._id}`}>
                  <img src={exhibition.bannerImage} alt="exhibition banner image" width="300"/>
                    </Link>
                    <div>{exhibition.artspace}</div>
                </Grid>              
            ))
            }
    </div>
  )
}

export default Exhibitions