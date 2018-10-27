import React from 'react';
import Home from './Home';
import Works from './Works';
import About from './About';
import Resume from './Resume';
import Gallery from './Gallery';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/works' component={Works}/>
          <Route path='/resume' component={Resume}/>
          <Route path='/gallery' component={Gallery}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
