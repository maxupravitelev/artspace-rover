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
  // fetch urls from store to check if setting up url is necessary

  let socket = useSelector((state) => state.socket)
  let streamUrl = useSelector((state) => state.urls.streamUrl)

  // console.log(streamUrl)
  // determine screen size
  const checkScreenWidth = useMediaQuery('(max-width:600px)')

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

  // // return url form if streamUrl is not set yet
  // if (!streamUrl)
  //   return (
  //     <div>
  //     <Grid
  //       container
  //       direction="column"
  //       alignItems="center"
  //       spacing={1}
  //       justify="center"
  //     >
  //       <Grid>
  //         <Header />
  //       </Grid>
  //       <Grid>
  //         <UrlForm />
  //       </Grid>
  //       <Grid>
  //         <Scheduler />
  //       </Grid>
  //     </Grid>
  //     <Footer />
  //     </div>
  //   )
  // else {
  //   // render main app based on screen size
  //   if (!checkScreenWidth) {
  //     return (
  //       <div>
  //       <Grid container spacing={2} justify="center" alignItems="center">
  //         <Grid item xs={4} sm={4} zeroMinWidth>
  //           <Capture />
  //           <Navigation />
  //         </Grid>

  //         {/* <Grid item xs={4} sm={4} zeroMinWidth>
  //           <ConfigList />
  //         </Grid>

  //         <Grid item xs={4} sm={4} >
  //           <NavBar />
  //         </Grid> */}
  //       </Grid>
  //       <Footer />
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div>
  //         <Capture />
  //         <Navigation />
  //         <Footer />
  //       </div>
  //     )
  //   }
  // }
}

export default App
