import React from 'react';
import Home from './Home';
import Gallery from './Gallery';
import Projects from './Projects';
import About from './About';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/about' component={About}/>
          <Route path='/projects' component={Projects}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
