import React from 'react';
import { connect } from 'react-redux';

class RegistrationButton extends React.Component {
  render() {
    return (
      <div className="col-12">
        <button className="registration-button">Регистрация</button>
      </div>
    );
  }
};

export default connect()(RegistrationButton);
