import React from 'react';
import _ from 'lodash';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
// import classnames from 'classnames';
import { updateSelect, createObject, getObjectsProfile } from '../../actions';
import './ObjectPage.css';


const mapStateToProps = (state) => ({
  categorys: state.categorys.data.map((category) => category.category_name),
  selectedCategorys: state.forms.addObjectForm.selectedCategorys,//it is an array
  x: state.user.location.x,
  y: state.user.location.y,
});

const actionCreators = {
  updateSelect: updateSelect,
  createObject: createObject,
  getObjectsProfile: getObjectsProfile,
};


//==========================================================================
class AddObjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  renderCategorys = (categorys) => categorys.map((category) => <option key={category}>{category}</option>);

  handleUpdateSelect = (e) => {
    const { updateSelect, selectedCategorys } = this.props;
    const { value } = e.target;
    console.log(value)
    const newSelected = selectedCategorys.includes(value) ? _.without(selectedCategorys, value) : [...selectedCategorys, value];
    console.log(newSelected);
    updateSelect({
      formName: 'addObjectForm',
      controlName: 'selectedCategorys',
      value: newSelected,
    });
   }

  handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('access');
    const { createObject, x, y,  selectedCategorys, getObjectsProfile } = this.props;
    const files = this.fileInput.current.files;
    try {
      await createObject(token, x, y, selectedCategorys, files);
      await getObjectsProfile(token);
    } catch (e) {
      console.log('failure');
    }


  }

  render() {
    const { categorys, selectedCategorys, x, y } = this.props;
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control type="text" readOnly plaintext value={x} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control type="text" readOnly plaintext defaultValue={y} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Выберите специализацию работ:</Form.Label>
          <Form.Control as="select" onChange={this.handleUpdateSelect} value={selectedCategorys} multiple>
            { this.renderCategorys(categorys) }
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Загрузите фото в галлерею объекта:" ref={this.fileInput} multiple/>
        </Form.Group>
        <Form.Group>
          <Button type="submit">Опубликовать</Button>
        </Form.Group>
      </Form>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(AddObjectForm);
