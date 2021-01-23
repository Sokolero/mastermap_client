import React from 'react';

import Burger from '../Navigation/Burger';
import Navigation from '../Navigation';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import LoginForm from '../Auth/LoginForm';
import RegistrationForm from '../Auth/RegistrationForm';
import Gallery from '../Gallery';
import './Home.css';

const Home = (props) => {
  return (
    <>
      <div className="wrapper-navigation fixed-top">
        <div className="container">
          <Navigation />
        </div>
      </div>
      <div className="container app-container">
        <Burger />
        <LoginForm />
        <RegistrationForm />
        <Header />
        <Main />
        <Gallery />
      </div>
      <div className="wrapper-footer">
        <div className="container">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
