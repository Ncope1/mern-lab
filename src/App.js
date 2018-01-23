import React, { Component } from 'react';
// import './App.css';
import Header from './Components/Header'
import Routine from './Components/Routine'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Header />
        </nav>
        <main>
        <Switch> //utilized react-router lesson for this section
        <Link to ='/proper-makeup-removal'>Proper Makeup Removal</Link>
        <Route 
          path='/proper-makeup-removal'
          render={(props) => (
            <Routine />
          )}
        // <p>Proper Makeup Removal</p>
        />
        
        {/* <Routines /> */}
        {/* <RoutineDetails /> */}
        </Switch>
        </main>
      </div>
    );
  }
}

export default App;
