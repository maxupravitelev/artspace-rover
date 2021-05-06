import React from 'react'
import { Typography, Grid } from '@material-ui/core'


const ExhibitionInfo = ({ exhibition }) => {
  return (
    <div className="app">
    <Typography
      variant="h3"
      style={{
        marginBottom: '1em',
        backgroundColor: '#0B4F6C',
        color: '#FBFBFF',
      }}
    >
     about exhibition
    </Typography>
    <Grid
      container
      // direction="row"
      // alignItems="center"
      // spacing={0}
      justify="space-between"
    >
      <Grid item xs={4} sm={4}>
        <img
          src={exhibition.bannerImage}
          alt="exhibition banner image"
          width="300"
        />
        <Typography variant="body2">{exhibition.artspace}</Typography>
        <Typography variant="h6">{exhibition.title}</Typography>
        <Typography>
          {exhibition.openingDay} - {exhibition.closingDay}
        </Typography>
      </Grid>
      <Grid item xs={8} sm={8}>
        <div>{exhibition.description}</div>
      </Grid>
    </Grid>
  </div>
  )
}

export default ExhibitionInfo
