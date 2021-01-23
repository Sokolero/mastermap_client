import React from 'react';
import { connect } from 'react-redux';
import { createMaster, updateText, updateSelect } from '../../actions';


//----------prepare props------------
const mapStateToProps = (state) => ({
  token: state.auth.access,
  categorys: state.categorys.data.map((category) => category.category_name),
  createMasterForm: state.forms.createMasterForm,
});

const actionCreators = {
  createMaster: createMaster,
  updateText: updateText,
  updateSelect: updateSelect,
};

//--------------Create Master Component ----------------------------------------
class CreateMasterForm extends React.Component {

  renderSelect = (categorys) => categorys.map((category) => <option>{category}</option>);

  handleInput = (e) => {
    const { updateText } = this.props;
    updateText({
      formName: 'createMasterForm',
      controlName: e.target.name,
      text: e.target.value
    });
  }

  handleSelect = (e) => {
    const { updateSelect } = this.props;
    updateSelect({
      formName: 'createMasterForm',
      controlName: 'categorys',
      value: e.target.value
    });
  }

  handleCreateMaster = (e) => {
    e.preventDefault();
    const { createMasterForm: { first_name, last_name, phone, selectedCategorys }, createMaster, token } = this.props;
    createMaster(token, first_name, last_name, phone, selectedCategorys);
  }

  render() {
    const { categorys, createMasterForm: { first_name, last_name, phone, selectedCategorys } } = this.props;
    return(
      <form onSubmit={this.handleCreateMaster}>
        <div className="form-group">
          <label htmlFor="name">Ваше Имя:</label>
          <input onChange={this.handleInput} name="first_name" value={first_name} type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Ваша Фамилия:</label>
          <input onChange={this.handleInput} name="last_name" value={last_name} type="text" className="form-control" id="lastname" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Номер телефона:</label>
          <input onChange={this.handleInput} name="phone" value={phone} type="text" className="form-control" id="phone" />
        </div>
        <select onSelect={this.handleSelect} value={selectedCategorys} className="custom-select" multiple>
          {this.renderSelect(categorys)}
        </select>
        <button type="submit" className="btn btn-primary">Создать профиль мастера</button>
      </form>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(CreateMasterForm);
