import React from 'react';
import _ from 'lodash';
import {
  getObjects,
  getCategorys,
  getMasters,
  getGallerysByObjectId,
  setUserLocation,
} from '../../actions';
import { connect } from 'react-redux';
import { Map } from 'react-yandex-maps';
import CustomPlacemark from '../YMapsComponents/CustomPlacemark';

//-----preparing props...-------
const mapStateToProps = (state) => ({
  objects: state.objects.data,
  categorys: state.categorys.data,
  masters: state.masters.data,
  userLocation: state.user.location,
});

const actionCreators = {
  getObjects: getObjects,
  getCategorys: getCategorys,
  getMasters: getMasters,
  getGallerysByObjectId: getGallerysByObjectId,
  setUserLocation: setUserLocation,
};


//-----------Main Map rendered Component----------------------------------------
class Main extends React.Component {
  async componentWillMount() {
    const { setUserLocation } = this.props;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          const coords = [position.coords.latitude, position.coords.longitude]
          console.log(coords);
          setUserLocation({ x: coords[0], y: coords[1] });
        }
      )
    }
  }

  async componentDidMount() {
    const { getObjects, getCategorys, getMasters } = this.props;
    await getObjects();
    await getCategorys();
    await getMasters();
  }

  renderPlaceMarks = (objects, categorys, masters) => {
    if (objects.length === 0 || categorys.length === 0 || masters.length === 0) {
      return null;
    }
    return objects.map((object) => {
      return(
        <CustomPlacemark
          key={object.id}
          object={object}
          categorys={categorys.filter((cat) => object.categorys.includes(cat.id)).map((cat) => cat.category_name)}
          master={_.find(masters, (m) => m.id === object.user)}
        />
      );
    });
  }

  render() {
    const { objects, categorys, masters, userLocation } = this.props;
    return (
      <div className="row">
        <div className="col main">
          <Map
            onLoad={this.handleMapLoad}
            className="main__map"
            instanceRef
            defaultState={{
              center: [55.8, 37.7],
              zoom: 9,
              controls: ['zoomControl', 'geolocationControl']
            }}
            state={{
              center: [userLocation.x, userLocation.y],
              zoom: 9,
              controls: ['zoomControl', 'geolocationControl']
            }}>
              { this.renderPlaceMarks(objects, categorys, masters) }
            </Map>
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, actionCreators)(Main);
