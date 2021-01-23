import React from 'react';
import { NavLink } from 'react-router-dom';

class NavMenu extends React.Component {

  render() {
    return (
      <div className="col col-md d-none d-md-flex navmenu">
        <ul className="nav flex-row">
          <li className="nav-item mx-2">
            <NavLink exact to="/" activeStyle={{
              fontWeight: "bold",
              color: "black",
            }}>Главная</NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink to="/master"  activeStyle={{
              fontWeight: "bold",
              color: "black",
            }}>Профиль</NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink to="/object"  activeStyle={{
              fontWeight: "bold",
              color: "black",
            }}>Мои работы</NavLink>
          </li>
        </ul>
        </div>
    );
  }
}

export default NavMenu;
