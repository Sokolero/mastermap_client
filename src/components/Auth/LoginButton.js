import React from 'react';
import { connect } from 'react-redux';

class LoginButton extends React.Component {
  render() {
    return (
      <div className="col-12">
        <button className="login-button">Вход</button>
      </div>
    );
  }
};

export default connect()(LoginButton);
