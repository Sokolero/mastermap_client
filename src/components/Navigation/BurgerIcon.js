import React from 'react';
import { connect } from 'react-redux';
import { toggleVisibility } from '../../actions';

//-------
const mapStateToProps = (state) => ({
  burgerVisibility: state.uiState.burger.visibility,
});

const actionCreators = {
  toggleVisibility: toggleVisibility,
}

class BurgerIcon extends React.Component {
  handleOpenBurger = () => {
    const { toggleVisibility } = this.props;
    toggleVisibility({ componentName: 'burger' });
  }

  render() {
    const { burgerVisibility } = this.props;
    if (burgerVisibility === 'show') {
      return(
        <div onClick={this.handleOpenBurger} className="col-2 d-md-none d-flex justify-content-end align-items-center burger__icon">
          <img className="burger__img" src="/images/BurgermenuClose.png" alt="burgericon" />
        </div>
      )
    }
    return (
      <div onClick={this.handleOpenBurger} className="col-2 d-md-none d-flex justify-content-end align-items-center burger__icon">
        <img className="burger__img" src="/images/Burgermenu0.png" alt="burgericon" />
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(BurgerIcon);
