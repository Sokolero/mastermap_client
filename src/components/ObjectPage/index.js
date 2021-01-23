import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation';
import Burger from '../Navigation/Burger';
import Objects from './Objects';
import Footer from '../Home/Footer';
import RedirectToLogin from '../MasterPage/RedirectToLogin';
import { Map } from 'react-yandex-maps';
import { setUserLocation } from '../../actions';

const mapStateToProps = (state) => ({
  authorization_status: state.user.authorization_status,
});

const actionCreators = {
  setUserLocation: setUserLocation,
}


class ObjectPage extends React.Component {
  switchComponent = (authorization_status) =>
    authorization_status !== 'success' ? <RedirectToLogin /> : <Objects />;

  handleMapLoad = (ymaps) => {
    const { setUserLocation } = this.props;
    ymaps.geolocation.get({
      provider: 'yandex',
    }).then((result) => {
      console.log(result);
      setUserLocation({ x: result.geoObjects.position[0], y: result.geoObjects.position[1] });
    });
  }

  render() {
    const { authorization_status } = this.props;
    return(
      <>
        <div className="d-none"><Map
          onLoad={this.handleMapLoad}
          className="masterprofile__map"
          instanceRef
          state={{
            center: [55.57, 37.57],
            zoom: 9,
            controls: ['zoomControl', 'geolocationControl']
           }}/></div>

        <div className="wrapper-navigation fixed-top">
          <div className="container">
            <Navigation />
          </div>
        </div>
        <div className="container app-container">
          <Burger />
          { this.switchComponent(authorization_status) }
        </div>
        <div className="wrapper-footer">
          <div className="container">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}


export default connect(mapStateToProps, actionCreators)(ObjectPage);
