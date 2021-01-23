import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { toggleVisibility, getToken, updateText } from '../../actions';
import './Auth.css';

//props preparing...
const mapStateToProps = (state) => ({
  loginFormVisibility: state.uiState.loginForm.visibility,
  loginForm: state.forms.loginForm,
});

const actionCreators = {
  toggleVisibility: toggleVisibility,
  login: getToken,
  updateText: updateText,
};


//-------LoginForm Component--------
class LoginForm extends React.Component {
  handleCloseForm = () => {
    const { toggleVisibility } = this.props;
    toggleVisibility({ componentName: 'loginForm' });
  }

  handleLogin = (e) => {
    e.preventDefault();
    const { login, toggleVisibility, loginForm: { email, password }} = this.props;
    try {
      login(email, password);
      toggleVisibility({ componentName: 'loginForm' });
    } catch (e) {
      console.log(e);
    }
  }

  handleUpdateText = (e) => {
    const { updateText } = this.props;
    updateText({
      formName: 'loginForm',
      controlName: e.target.name,
      text: e.target.value,
    });
  }

  openRegistrationForm = () => {
    const { toggleVisibility } = this.props;
    toggleVisibility({ componentName: 'loginForm' });
    toggleVisibility({ componentName: 'registrationForm' });
  }

  render() {
    const { loginForm: { email, password }, loginFormVisibility } = this.props;
    const className = classnames({
      'row loginform fixed-top': true,
      'loginform--show': loginFormVisibility === 'show',
      'loginform--hidden': loginFormVisibility !== 'show',
    });
    return (
      <div className={className}>
        <div className="offset-10 col-2 pt-2 d-flex justify-content-end">
          <div className="closeButton" onClick={this.handleCloseForm}></div>
        </div>

        <div className="col text-center">
          <h3>Вход в вашу учетную запись</h3>
          <div className="d-flex justify-content-center">
            <form className="loginform__form" onSubmit={this.handleLogin}>
              <div className="form-group">
                <input name="email" value={email} onChange={this.handleUpdateText}
                      type="text" required={true} className="form-control" id="inputEmail"
                     aria-describedby="emailHelp"
                     placeholder="Адрес электронной почты" />
              </div>
              <div className="form-group">
                <input name="password" value={password} onChange={this.handleUpdateText}
                  type="password" required={true} className="form-control"
                  id="inputPassword" placeholder="Введите пароль"/>
              </div>
              <div className="pb-4">
                <a className="forgot-password" href="#">Забыли пароль?</a>
              </div>
              <button type="submit" className="btn btn-primary">Войти</button>
              <p className="or-text">или</p>
              <button onClick={this.openRegistrationForm} className="btn btn-secondary">Создать аккаунт</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(LoginForm);
