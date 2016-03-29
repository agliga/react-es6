/**
 *
 * Created by agliga on 3/29/16.
 */

// import React from 'react';
import ReactDom from 'react-dom';
import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Dashboard
        </h1>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

function isAuthenticated(...args) {
  console.log(args);
}

console.log(ReactDom);
ReactDom.render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={App} onEnter={isAuthenticated}>
        <IndexRoute component={Dashboard}/>
      </Route>
    </Router>
  ),
  document.getElementById('app')
);
