// import react modules
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// init redux and import reducers
import { useSelector } from 'react-redux'



import Header from './components/Header'

import Footer from './components/Footer/'
import BackendLogin from './components/Footer/BackendLogin'
import DataProtection from './components/Footer/DataProtection'
import Imprint from './components/Footer/Imprint'


import Exhibition from './components/Exhibitions/Exhibition'
import Exhibitions from './components/Exhibitions'
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FBFBFF"
  }
})(Typography);

// import css and material ui components
import './App.css'
import Container from '@material-ui/core/Container'


const App = () => {


  return (

    <Container 
      // maxWidth="sm"
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
