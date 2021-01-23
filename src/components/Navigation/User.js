import React from 'react';
import { connect } from 'react-redux';
import { toggleVisibility, logout } from '../../actions';
import { Button } from 'react-bootstrap';

//-----preparing props...----
const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  userIcon: state.user.icon,
})


const actionCreators = {
  toggleVisibility: toggleVisibility,
  logout: logout,
};


//--------Anonimous User Icon Component-----------------------------------------
class User extends React.Component {
  logout = () => {
    const { logout } = this.props;
    localStorage.clear();
    logout();
  }

  openLoginForm = () => {
    const { toggleVisibility } = this.props;
    toggleVisibility({ componentName: 'loginForm' });
  }

  openRegistrationForm = () => {
    const { toggleVisibility } = this.props;
    toggleVisibility({ componentName: 'registrationForm' });
  }

  render() {
    const { userEmail, userIcon } = this.props;
    if (userEmail) {
      const src = userIcon ? userIcon : "/images/no_photo.png";
      return(
        <>
          <div onClick={this.handleClickUser} className="col-2 col-md-2 d-flex justify-content-md-end user">
            <img src={src} className="user__icon" alt="usericon" />
          </div>
          <div className="d-none d-md-block col-1">
            <Button onClick={this.logout}>Выйти</Button>
          </div>
        </>
      )
    }
    return (
      <>
        <div onClick={this.openLoginForm} className="col-2 col-md-1 d-flex justify-content-md-end user">
          <img src="/images/user_icon.png" className="user__icon" alt="usericon" />
        </div>
        <div className="d-none d-md-block col-md-1 mr-md-2">
          <Button onClick={this.openLoginForm}>Вход</Button>
        </div>
        <div className="d-none d-md-block col-md-2">
          <Button onClick={this.openRegistrationForm}>Регистрация</Button>
        </div>
      </>
    );
  }
}


export default connect(mapStateToProps, actionCreators)(User);
