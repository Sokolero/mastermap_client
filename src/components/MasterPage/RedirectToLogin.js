import React from 'react';
import { connect } from 'react-redux';
import { toggleVisibility } from '../../actions';


//------prepare props-------
const actionCreators = {
  toggleVisibility: toggleVisibility,
}


//--------------RedirectToLogin Master Component -------------------------------
class RedirectToLogin extends React.Component {
  handleLogin = () => {
    const { toggleVisibility } = this.props;
    toggleVisibility({ componentName: 'loginForm' });
  }

  render() {
    return(
      <div className="row">
        <div className="col d-flex flex-column justify-content-center redirect-page">
          <div className="text-center">Пожалуйста, войдите в свою учетную запись</div>
          <div className="text-center">
            <button onClick={this.handleLogin} className="btn btn-primary">Войти в учетную запись</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actionCreators)(RedirectToLogin);
