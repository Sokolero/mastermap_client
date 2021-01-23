import React from 'react';
import { connect } from 'react-redux';
import ObjectCard from './ObjectCard';
import AddObjectModal from './AddObjectModal';
import { Row, Col, Button, Card } from 'react-bootstrap';
import './ObjectPage.css';
import { getObjectsProfile, toggleObjectModal } from '../../actions';

//-----prepare
const mapStateToProps = (state) => ({
  objects: state.profile.objects,
})

const actionCreators = {
  getObjectsProfile: getObjectsProfile,
  toggleObjectModal: toggleObjectModal,
}

//--------Component------------------------------------------------------------
class Objects extends React.Component {
  componentDidMount() {
    const { getObjectsProfile } = this.props;
    const token = localStorage.getItem('access');
    getObjectsProfile(token);
  }

  openAddObjectModal = () => {
    const { toggleObjectModal} = this.props;
    toggleObjectModal();
  }

  renderObjectCards = (objects) => {
    console.log(objects.categorys)
    return objects
      .map((object) =>
        <ObjectCard
          key={object.id}
          id={object.id}
          X={object.X}
          Y={object.Y}
          user={object.user}
          categorys={object.categorys}
          gallerys={object.gallerys.map((gallery) => gallery.photo)}
         />);
  }

  render() {
    const { objects } = this.props;
    if (objects.length === 0) {
      return (
        <>
          <Row className="empty-page justify-content-center align-items-center">
            <Col xs="10" lg="4" className="text-center">
              У Вас еще нет опубликованных объектов
              <Button onClick={this.openAddObjectModal}>Опубликовать объект</Button>
            </Col>
          </Row>
          <AddObjectModal />
        </>
      );
    }
    return(
      <>
        <Row>
          { this.renderObjectCards(objects) }
          <Col className="py-2 d-flex justify-content-center">
            <Card style={{ width: '18rem', height: '24rem' }}>
              <div onClick={this.openAddObjectModal} className="addIcon d-flex justify-content-center align-items-center">
                <img src="/images/AddIcon.png" alt="addIcon"/>
              </div>
            </Card>
          </Col>
        </Row>
        <AddObjectModal />
      </>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Objects);
