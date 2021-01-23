import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { toggleVisibility, createUser, updateText } from '../../actions';
import './Auth.css';


//----preparing props
const mapStateToProps = (state) => ({
  registrationFormVisibility: state.uiState.registrationForm.visibility,
  registrationForm: state.forms.registrationForm,
});

const actionCreators = {
  toggleVisibility: toggleVisibility,
  createUser: createUser,
  updateText: updateText,
}


//------RegistrationForm Component-------
class RegistrationForm extends React.Component {
  handleCloseForm = () => {
    const { toggleVisibility } = this.props;
    toggleVisibility({ componentName: 'registrationForm' });
  }

  handleCreateUser = (e) => {
    e.preventDefault();
    const { createUser, registrationForm: { email, password } } = this.props;
    createUser(email, password);
  }

  handleUpdateText = (e) => {
    const { updateText } = this.props;
    updateText({
      formName: 'registrationForm',
      controlName: e.target.name,
      text: e.target.value,
    });
  }

  render() {
    const { registrationForm: { email, password, confirmationPassword }, registrationFormVisibility } = this.props;
    const className = classnames({
      'row loginform fixed-top': true,
      'loginform--show': registrationFormVisibility === 'show',
      'loginform--hidden': registrationFormVisibility !== 'show',
    });
    return (
      <div className={className}>

        <div className="offset-10 col-2 pt-2 d-flex justify-content-end">
          <div className="closeButton" onClick={this.handleCloseForm}></div>
        </div>

        <div className="col text-center">
          <h3>Регистрация</h3>
          <div className="d-flex justify-content-center">
            <form className="loginform__form" onSubmit={this.handleCreateUser}>
              <div className="form-group">
                <input onChange={this.handleUpdateText} name="email"
                  type="email" value={email} required={true} className="form-control"
                  id="inputEmail" aria-describedby="emailHelp"
                  placeholder="Адрес электронной почты" />
              </div>
              <div className="form-group">
                <input onChange={this.handleUpdateText} name="password"
                    type="password" value={password} required={true}
                   className="form-control" id="password" aria-describedby="passwordHelp"
                   placeholder="Пароль"/>
                   <p className="note">*В пароле должны быть цифры и буквы, не менее 6 символов</p>
              </div>
              <div className="form-group">
                <input onChange={this.handleUpdateText} name="confirmationPassword"
                  type="password" value={confirmationPassword} required={true}
                  className="form-control" id="confirmationPassword"
                  placeholder="Повторите пароль"/>
              </div>
              <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
            </form>
          </div>
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(RegistrationForm);
