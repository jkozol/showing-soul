import React from 'react';
import Home from './Home';
import Gallery from './Gallery';
import Work from './Work';
import About from './About';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

// const App = () => (
//   <div>
//     <Main />
//   </div>
// );
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/about' component={About}/>
          <Route path='/work' component={Work}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
