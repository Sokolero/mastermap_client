import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
  objectForm: state.forms.objectForm,
});

const actionCreators = {
  toggleForm: actions.toggleForm,
  submitForm: actions.submitForm,
  updateText: actions.updateText,
  updateSelect: actions.updateSelect,
};

class ObjectForm extends React.Component {

  handleInput = (e) => {
    const { name, value } = e.target;
    const { updateText } = this.props;
    updateText({ name, text: value });
  }

  handleSelect = (e) => {
    const { value } = e.target;
    const { updateSelect } = this.props;
    updateSelect({ value });
  }

  handleHideForm = () => {
    const { toggleForm } = this.props;
    toggleForm();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { submitForm } = this.props;
    submitForm()
  }

  renderForm = (objectForm) => {
    const { firstname, lastname, category } = objectForm;
    return (
      <div className="row object-form fixed-top">
        <div className="col">
            <button onClick={this.handleHideForm}>Закрыть</button>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="nameField">Имя:</label>
                <input onChange={this.handleInput} name="name" value={firstname} type="text" className="form-control" id="nameField" placeholder="Введите ваше имя" data-controls="name"/>
              </div>
              <div className="form-group">
                <label htmlFor="lastNameField">Фамилия:</label>
                <input onChange={this.handleInput} name="lastname" value={lastname} type="text" className="form-control" id="lastNameField" placeholder="Введите ваше имя" data-controls="last_name" />
              </div>
              <div className="form-group">
                <label htmlFor="category">Профессия:</label>
                <select onChange={this.handleSelect} value={category} className="form-control" id="category">
                  <option>Concrete</option>
                  <option>Roofs</option>
                  <option>Electrical</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="loadFileField">Добавьте фото</label>
                <input type="file" className="form-control-file" id="loadFileField" />
              </div>
              <button type="submit" className="btn btn-primary">Публиковать</button>
            </form>
        </div>
      </div>
    );
  }

  render() {
    const { objectForm } = this.props;
    const { state } = objectForm;
    return state === 'show' ? this.renderForm(objectForm) : null;
  }
}

export default connect(mapStateToProps, actionCreators)(ObjectForm);
