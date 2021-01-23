import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { YMaps } from 'react-yandex-maps';
import { BrowserRouter as Router,
  Switch, Route } from 'react-router-dom';

import Home from './Home';
import MasterPage from './MasterPage';
import ObjectPage from './ObjectPage';
import { getUser } from '../actions';

//----preparing of the props---------
const actionCreators = {
  getUser: getUser,
};


//----App Component------------------------------------------------------------
class App extends React.Component {
  componentDidMount() {
    const { getUser } = this.props;
    const token = localStorage.getItem('access');
    if (token) {
      getUser(token);
    }
  }

  render() {
    return (
      <Router>
        <YMaps query={
          {
            apikey: '218fe44e-3c81-48b4-a515-9625f10b0b65',
            load: 'package.full',
          }
        }>
          <div className="App">
            <div className="wrapper">
              <Switch>
                <Route path="/object">
                  <ObjectPage />
                </Route>
                <Route path="/master">
                  <MasterPage />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </div>
        </YMaps>
      </Router>
    );
  }
}

export default connect(null, actionCreators)(App);
