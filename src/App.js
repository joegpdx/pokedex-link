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
          <Link to="/about/other">about</Link>
          <Switch>
            {/* anything without a question mark is assumed to be required in the URL */}
            {/* if routes are like functions, colons indicate what is the 'parameter' of the route */}
            <Route exact path="/:pokemon?" component={List} />
            {/* adding the `about-me` piece prevents collisions with the :pokemon? route */}  
            <Route exact path="/about/:other" component={About} />
            {/* adding the `detail` piece prevents collisions with the :pokemon? route */}
            <Route exact path="/pokedex/pokemon/:pokeId" component={Detail} />
          </Switch>
        </div>
      </Router>
    )
  }
}
