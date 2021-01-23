import React from 'react';
import { Placemark } from 'react-yandex-maps';
import { connect } from 'react-redux';
import { getGallerysByObjectId, toggleVisibility } from '../../actions';


//-------preparing props----------
const actionCreators = {
  getGallerysByObjectId: getGallerysByObjectId,
  toggleVisibility: toggleVisibility,
};

const mapStateToProps = (state) => ({
  gallerys: state.gallerys.data.map((gallery) => gallery.photo),
});


// -------- custom Placemark Component represents object information------------
class CustomPlacemark extends React.Component {
  handleGetGallery = async (e) => {
    const { object, getGallerysByObjectId, toggleVisibility } = this.props;
    await getGallerysByObjectId(object.id);
    await toggleVisibility({ componentName: 'gallery' });
  }

  getBallonContent = (id) => {
    const clicker_id = `clicker_${id}`;
    return `<button onclick="
     const clicker = document.getElementById('${clicker_id}');
     clicker.click();
     console.log(clicker);
    ">Открыть Галлерею объекта</button>`
  }

  render() {
    const { object, categorys, master } = this.props;
    const id = `clicker_${object.id}`;
    const ballonContent = this.getBallonContent(object.id);
    return(
      <div>
        <div onClick={this.handleGetGallery} id={id}></div>
        <Placemark
          geometry={[object.X, object.Y]}
          properties={{
             hintContent: `Создано ${object.date_of_creation}`,
             balloonContentHeader: [master.first_name, master.last_name].join(" "),
             balloonContent: ballonContent,
             balloonContentFooter: categorys.join(' '),
          }}
          options={{
            preset: 'islands#dotIcon',
            iconColor: 'black'
          }}
          modules={[
            "geoObject.addon.balloon", "geoObject.addon.hint"
          ]}
        />
      </div>
    );
  }
}


export default connect(mapStateToProps, actionCreators)(CustomPlacemark);
