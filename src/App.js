// import react modules
import React, { useState, useEffect } from 'react'
import { Jutsu } from 'react-jutsu'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// init redux and import reducers
import { useSelector, useDispatch } from 'react-redux'

import Header from './components/Header'

import Footer from './components/Footer/'
import BackendLogin from './components/Footer/BackendLogin'
import DataProtection from './components/Footer/DataProtection'
import Imprint from './components/Footer/Imprint'
import About from './components/Footer/About'
import Contact from './components/Footer/Contact'


import Exhibition from './components/Exhibitions/Exhibition'
import Exhibitions from './components/Exhibitions'
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { setUser } from './reducers/userReducer'

import { getAllExhibitions } from './reducers/exhibitionsReducer'


const WhiteTextTypography = withStyles({
  root: {
    color: "#FBFBFF"
  }
})(Typography);

// import css and material ui components
import './App.css'
import Container from '@material-ui/core/Container'





const App = () => {
  
  const dispatch = useDispatch()

  // check if user is stored locally
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedRoverAppUser')
    if (loggedUserJSON) {
      const userLocal = JSON.parse(loggedUserJSON)
      dispatch(setUser(userLocal))
      // timeslotService.setToken(userLocal.token)
      dispatch(getAllExhibitions())
    }
  }, [dispatch])

  return (

    <Container 
      maxWidth="md"
    >

      <Router>
      <Header />

        <div>
          {/* <Notification /> */}
            <div>
              <Switch>
                <Route path="/exhibitions/:id">
                  <Exhibition />
                </Route>
                <Route path="/backendLogin">
                  <BackendLogin />
                </Route>
                <Route path="/imprint">
                  <Imprint />
                </Route>
                <Route path="/dataprotection">
                  <DataProtection />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/Contact">
                  <Contact />
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
