import React from 'react';
import Navigation from '../Navigation';
import Burger from '../Navigation/Burger';
import LoginForm from './LoginForm';

const LoginPage = (props) =>
  <div className="container app-container">
    <Navigation />
    <Burger />
    <LoginForm />
  </div>

export default LoginPage;
