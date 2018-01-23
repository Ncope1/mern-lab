import React, { Component } from 'react';
// import './App.css';
import Header from './Components/Header'
import Routines from './Components/Routines'
import {
  Route,
  Link, 
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>

        <main>
        <Routines />
{/* utilized react-router lesson for this section */}
        {/* <Switch> 
          <Route 
            path='/routines'
            render={(props) => (
              <Routines />
            )}
        //<p>Proper Makeup Removal</p>
        /> */}
        
        {/* <Routines /> */}
        {/* <RoutineDetails /> */}
        {/* </Switch> */}
        </main>
      </div>
    );
  }
}

export default App;
