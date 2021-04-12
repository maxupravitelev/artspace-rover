import React from 'react'



// import material ui components
import Grid from '@material-ui/core/Grid'

import { Link } from 'react-router-dom'

import Exhibition from './Exhibition'

import Infobox from '../Infobox'

import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({

  container: {
    display: "table-cell",
    textAlign: "initial"
  }
})

// return header component
const Exhibitions = () => {

  const classes = useStyles()

  const infotext = "Please select an exhibition you want to view."

  let exhibitions = [{
    id: "1",
    title: "some exhib",
    artspace: "another inst",
    rover: "basic",
    urls: {
      bannerImage: "https://brimboria.net/wp-content/uploads/2020/05/IMG_20200513_150142-2048x1536.jpg"
    }
  },
    {
      id: "2",
      title: "one mor exhib",
      artspace: "diffrent inst",
      rover: "basic",
      urls: {
        bannerImage: "https://brimboria.net/wp-content/uploads/2020/05/IMG_20200513_150142-2048x1536.jpg"
      }
    }
  ]

  // console.log(exhibitions)

  return (
    <div className="app">
      <Infobox infotext={infotext}/>
      {exhibitions.map((exhibition) => (
                <Grid className={classes.container}
                  key={exhibition.id}
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  display="table-cell"
                  >
                  <Link to={`/exhibitions/${exhibition.id}`}>
                  <img src={exhibition.urls.bannerImage} alt="exhibition banner image" width="300"/>
                    </Link>
                    <div>{exhibition.artspace}</div>
                </Grid>              
            ))
            }
    </div>
  )
}

export default Exhibitions


/**
 * 
 

            {exhibitions.map((exhibition) => (
                <Grid key={exhibition.id}>
                  <Link to={`/exhibitions/${exhibition.id}`}>
                  <img src={exhibition.urls.bannerImage} alt="exhibition banner image" width="300"/>
                    </Link>
                    <div>{exhibition.artspace}</div>
                </Grid>              
            ))
            }
            
            </TableRow>
            <TableRow>
            {exhibitions.map((exhibition) => (
                <TableCell key={"artspace" + exhibition.id}>
                  {exhibition.artspace}
                </TableCell>              
            ))
            }
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

 */