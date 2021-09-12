import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.scss';
import Floyd from './components/Floyd';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Warshall from './components/Warshall';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/floyd">
            <Floyd />
          </Route>
          <Route path="/warshall">
            <Warshall />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
