import React from 'react';
import { connect } from 'react-redux';
import { toggleVisibility } from '../../actions';
import classnames from 'classnames';
import '../Home/Home.css';


//-----preparing props----------
const mapStateToProps = (state) => ({
  galleryVisibility: state.uiState.gallery.visibility,
  gallerys: state.gallerys.data.map((gallery) => gallery.photo),
})

const actionCreators = {
  toggleVisibility: toggleVisibility,
};


//--------Gallery view---------------------------------------------------------
class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    }
  }

  handleCloseGallery = () => {
    const { toggleVisibility } = this.props;
    toggleVisibility({ componentName: 'gallery' });
  }

  renderPhotos = (urls) => {
    const { activeIndex } = this.state;
    return urls.map((url, index) => {
      const className = classnames({
        'carousel-item': true,
        'd-flex': activeIndex === index,
        'justify-content-center': activeIndex === index,
        'active': activeIndex === index,
      });
      return (
          <div key={index} data-index={index} className={className}>
            <img src={url} className="d-block gallery__image" alt="img" />
          </div>
        );
      }
    );
  }

  handleNext = (e) => {
    e.preventDefault();
    const { gallerys } = this.props;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === gallerys.length - 1 ? 0 : activeIndex + 1;
    this.setState((state, props) => ({ activeIndex: newIndex }));
  }

  handlePrev = (e) => {
    e.preventDefault();
    const { gallerys } = this.props;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === 0 ? gallerys.length - 1 : activeIndex - 1;
    this.setState((state, props) => ({ activeIndex: newIndex }));
  }

  render() {
    const { galleryVisibility, gallerys } = this.props;
    const className = classnames({
      'row gallery fixed-top': true,
      'gallery--show': galleryVisibility === 'show',
      'gallery--hidden': galleryVisibility !== 'show',
    });

    return(
      <div className={className}>
      <div className="offset-10 col-2 pt-2 d-flex justify-content-end">
        <div className="closeButton" onClick={this.handleCloseGallery}></div>
      </div>
        <div className="col offset-md-1 col-md-10 offset-lg-3 col-lg-6">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              { this.renderPhotos(gallerys) }
            </div>
            <a onClick={this.handlePrev} className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a onClick={this.handleNext} className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Gallery);
