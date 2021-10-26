import './App.css';
import Header from './components/header';
import { Link, Route, withRouter } from 'react-router-dom'
import Cart from './components/cart';
import React from 'react';

const App = (props) => {


  return (
    <div>
      <h1 className="h1">Claim your free trials</h1>
      <div className="topnav">
        <Link to="/cart"> <i class="fa fa-shopping-cart" ></i></Link>
        <Link to="/header">Home</Link>

      </div>
      <Route path="/header" component={Header} />
      <Route path="/cart" component={Cart} exact={true} />

    </div>
  )
}

export default withRouter(App);
