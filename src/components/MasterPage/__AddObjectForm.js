import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { toggleVisibility, updateText, updateSelect, createObject } from '../../actions';
import './MasterPage.css';

//props preparing...
const mapStateToProps = (state) => ({
  addObjectFormVisibility: state.uiState.addObjectForm.visibility,
  addObjectForm: state.forms.addObjectForm,
  categorys: state.categorys.data.map((category) => category.category_name),
  x: state.user.location.x,
  y: state.user.location.y,
});

const actionCreators = {
  toggleVisibility: toggleVisibility,
  updateSelect: updateSelect,
  updateText: updateText,
  createObject: createObject,
};


//-------AddObjectForm Component--------
class AddObjectForm extends React.Component {
  renderSelect = (categorys) => categorys.map((category) => <option key={category}>{category}</option>);

  handleUpdateSelect = (e) => {
    const { updateSelect } = this.props;
    updateSelect({
      formName: 'addObjectForm',
      controlName: e.target.name,
      text: e.target.value,
    });
   }

  handleCloseForm = () => {
    const { toggleVisibility } = this.props;
    toggleVisibility({ componentName: 'addObjectForm' });
  }

  handleAddObject = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('access');
    const { createObject, x, y, categorys, photos } = this.props;
    createObject(token, x, y, categorys, photos );
  }

  render() {
    const { addObjectFormVisibility, categorys, x, y, addObjectForm: { selectedCategorys }} = this.props;
    const className = classnames({
      'row addobjectform fixed-top': true,
      'addobjectform--show': addObjectFormVisibility === 'show',
      'addobjectform--hidden': addObjectFormVisibility !== 'show',
    });
    return (
      <div className={className}>
        <div className="offset-10 col-2">
          <button onClick={this.handleCloseForm}>x</button>
        </div>
        <div className="col"><h4>Создание нового объекта на карте</h4></div>
        <div className="col">
          <form onSubmit={this.handleAddObject}>
            <div className="form-group">
              <label htmlFor="coordX">Координаты текущего местоположения (широта):</label>
              <input name="coordX" value={x} type="text" required={true} className="form-control" id="coordX" aria-describedby="уьфшдHelp" />
            </div>
            <div className="form-group">
              <label htmlFor="coordY">Координаты текущего местоположения (долгота):</label>
              <input name="coordY" value={y} type="text" required={true} className="form-control" id="coordY" />
            </div>
            <div class="custom-file">
              <input name="photos" type="file" className="custom-file-input" id="customFile" multiple={true} />
              <label className="custom-file-label" htmlFor="customFile">Choose file</label>
            </div>
            <select onSelect={this.handleUpdateSelect} value={selectedCategorys} className="custom-select" multiple={true}>
              {this.renderSelect(categorys)}
            </select>
            <button type="submit" className="btn btn-primary">Опубликовать объект</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(AddObjectForm);
