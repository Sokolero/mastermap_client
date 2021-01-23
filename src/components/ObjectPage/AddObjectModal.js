import React from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
// import classnames from 'classnames';
import { toggleObjectModal } from '../../actions';
import './ObjectPage.css';
import AddObjectForm from './AddObjectForm';

const mapStateToProps = (state) => ({
  visibility: state.uiState.objectModal.visibility,
});

const actionCreators = {
  toggleObjectModal: toggleObjectModal,
}

class AddObjectModal extends React.Component {
  handleClose = () => {
    const { toggleObjectModal } = this.props;
    toggleObjectModal();
  }

  render() {
    const { visibility } = this.props;
    return(
      <Modal show={visibility} onHide={this.handleClose}>
        <Modal.Header>
          <Modal.Title>Публикация объекта</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddObjectForm />
        </Modal.Body>
      </Modal>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(AddObjectModal);
