// import react modules
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// init redux and import reducers
import { useSelector } from 'react-redux'

// import components
import UrlForm from './components/UrlForm'

import Capture from './components/Cam/Capture'
import Navigation from './components/Dashboard/Navigation'

import Header from './components/Header'
import Footer from './components/Footer'
import Infobox from './components/Infobox'
import Scheduler from './components/Scheduler'

import Exhibition from './components/Exhibitions/Exhibition'
import Exhibitions from './components/Exhibitions'


// import css and material ui components
import './App.css'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

// use media query to determine screen size
import useMediaQuery from '@material-ui/core/useMediaQuery'

const App = () => {


  return (
    <Container>
      <Router>
        <div>
          {/* <Notification /> */}
            <div>
              <Header />
              <Switch>
                <Route path="/exhibitions/:id">
                  <Exhibition />
                </Route>
                <Route path="/">
                  <Exhibitions />
                </Route>

                {/* <Route path="/users">
                  <Userlist />
                </Route> */}
              </Switch>
            </div>
          

          <Footer />
        </div>
      </Router>
    </Container>
  )

  
}

export default App
