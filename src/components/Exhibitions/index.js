import React from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@material-ui/core'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Exhibition from './Exhibition'

import Infobox from '../Infobox'

// return header component
const Exhibitions = () => {

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
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
          <TableRow >
            {exhibitions.map((exhibition) => (
                <TableCell key={"banner" + exhibition.id}>
                  <Link to={`/exhibitions/${exhibition.id}`}>
                  <img src={exhibition.urls.bannerImage} alt="exhibition banner image" width="300"/>
                    </Link>
                </TableCell>
            //    <TableCell>{exhibition.rover}</TableCell>
              
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
    </div>
  )
}

export default Exhibitions
