// import react modules
import React, { useEffect } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// init redux and import reducers
import { useDispatch } from 'react-redux'

import Header from './components/Header'
import Footer from './components/Footer/'
import Backend from './components/Backend/'
import DataProtection from './components/Footer/DataProtection'
import Imprint from './components/Footer/Imprint'
import About from './components/Footer/About'
import Contact from './components/Footer/Contact'
import Exhibition from './components/Exhibitions/Exhibition'
import Exhibitions from './components/Exhibitions'

// import action creators
import { setUser } from './reducers/userReducer'
import { getAllExhibitions } from './reducers/exhibitionsReducer'
import {  getAllTimeslots } from './reducers/timeslotsReducer'

// import css and material ui components
import './App.css'
import Container from '@material-ui/core/Container'


const App = () => {
  
  const dispatch = useDispatch()

  useEffect(() => {
    // fetch all exhibitions data
    dispatch(getAllExhibitions())

    // check if user is stored locally
    const loggedUserJSON = window.localStorage.getItem('loggedRoverAppUser')
    if (loggedUserJSON) {
      const userLocal = JSON.parse(loggedUserJSON)
      dispatch(setUser(userLocal))
      dispatch(getAllExhibitions())
      dispatch(getAllTimeslots())
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
                <Route path="/backend">
                  <Backend />
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
              </Switch>
            </div>
          <Footer />
        </div>
      </Router>
    </Container>
  )
}

export default App
