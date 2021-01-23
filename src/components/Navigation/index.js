import React from 'react';
import BurgerIcon from './BurgerIcon';
import Logo from './Logo';
import NavMenu from './NavMenu';
import './Navigation.css';
import User from './User';


const Navigation = (props) =>
  <div className="row align-items-center px-2 navigation">
    <BurgerIcon />
    <Logo />
    <NavMenu />
    <User />
  </div>

export default Navigation;
