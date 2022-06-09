import React from 'react';
import Navbar from './Navbar'; 
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import FarmDetail from './FarmDetail';
import Error404 from './Error404';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/farms/:id">
              <FarmDetail/>
            </Route>
            <Route path = "*">
              <Error404/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
