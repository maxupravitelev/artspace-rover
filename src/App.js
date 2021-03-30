// import react modules
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// init redux and import reducers
import { useSelector } from 'react-redux'



import Header from './components/Header'
import Footer from './components/Footer'
import Infobox from './components/Infobox'
import Scheduler from './components/Scheduler'

import Exhibition from './components/Exhibitions/Exhibition'
import Exhibitions from './components/Exhibitions'


// import css and material ui components
import './App.css'
import Container from '@material-ui/core/Container'


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
