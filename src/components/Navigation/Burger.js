import React from 'react';
import { connect } from 'react-redux';
import { toggleVisibility }from '../../actions';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './Navigation.css';

//-----preparing props...
const mapStateToProps = (state) => ({
  burgerVisibility: state.uiState.burger.visibility,
});

const actionCreators = {
  toggleVisibility: toggleVisibility,
};


//------------Burger Menu Component-----------
class Burger extends React.Component {
  handleCloseBurger = () => {
    const { toggleVisibility } = this.props;
    toggleVisibility({ componentName: 'burger' });
  }

  getBurgerMenu = (classname) => {
    return (
        <div className={classname}>
            <ul className="nav flex-column">
              <li onClick={this.handleCloseBurger} className="nav-item">
                <Link className="link" to="/">Главная</Link>
              </li>
              <li onClick={this.handleCloseBurger} className="nav-item">
                <Link to="/master">Профиль</Link>
              </li>
              <li onClick={this.handleCloseBurger} className="nav-item">
                <Link to="/object">Мои работы</Link>
              </li>
            </ul>
        </div>
    );
  }

  render() {
    const { burgerVisibility } = this.props;
    const classname = classnames({
      'row fixed-top burger-menu': true,
      'burger-menu--show': burgerVisibility === 'show',
      'burger-menu--hidden': burgerVisibility !== 'show',
    });
    return this.getBurgerMenu(classname);
  }
}

export default connect(mapStateToProps, actionCreators)(Burger);
