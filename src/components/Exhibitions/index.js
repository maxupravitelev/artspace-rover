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
    artspace: "brim",
    rover: "basic"}
  ]

  // console.log(exhibitions)

  return (
    <div className="app">
      <Infobox infotext={infotext}/>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {exhibitions.map((exhibition) => (
              <TableRow key={exhibition.id}>
                <TableCell>
                  <Link to={`/exhibitions/${exhibition.id}`}>{exhibition.artspace}</Link>
                </TableCell>
                <TableCell>{exhibition.rover}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Exhibitions
