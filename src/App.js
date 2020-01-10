import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from "./containers/HomeContainer";
import CustomersContainer from "./containers/CustomersContainer";
import CustomerContainer from './containers/CustomerContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/customers' component={CustomersContainer} />
        <Switch>
          <Route path='/customers/new' component={NewCustomerContainer} />
          <Route path='/customers/:dni' render={props => <CustomerContainer dni={props.match.params.dni} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;