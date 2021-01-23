import React from 'react';
import Navigation from '../Navigation';
import Burger from '../Navigation/Burger';
import LoginForm from '../Auth/LoginForm';
import RegistrationForm from '../Auth/RegistrationForm';
import MasterProfile from './MasterProfile';
import CreateMasterForm from './CreateMasterForm';
import RedirectToLogin from './RedirectToLogin';
import Footer from '../Home/Footer';
import { connect } from 'react-redux';
import './MasterPage.css';

//------prepare props--------
const mapStateToProps = (state) => ({
  authorization_status: state.user.authorization_status,
  role: state.user.is_master,
});

//------------A manager-page for users to have status 'is_master=True'----------
class MasterPage extends React.Component {

  switchForm = (authorization_status, role) => {
    if (authorization_status !== 'success') {
      return <RedirectToLogin />;
    }
    if (!role) {
      return <CreateMasterForm />;
    }
    return <MasterProfile />;
  }

  render() {
    const { authorization_status, role } = this.props;
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
          { this.switchForm(authorization_status, role) }
        </div>
        <div className="wrapper-footer">
          <div className="container">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps)(MasterPage);
