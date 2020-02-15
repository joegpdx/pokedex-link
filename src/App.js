import React, { Component } from 'react'
import Header from './Header.js';
import List from './List.js';
import Detail from './Detail.js';
import About from './About.js';
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';

export default class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Link to="/">List Pokemon</Link><br />
          <Link to="/about/">about</Link>
          <Switch>
            <Route exact path="/:pokemon?" component={List} />  
            <Route exact path="/about/" component={About} />
            <Route exact path="/pokemon/:pokeId" component={Detail} />
          </Switch>

        </div>
      </Router>
    )
  }
}
