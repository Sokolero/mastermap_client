import React from 'react';
import { connect } from 'react-redux';


class Header extends React.Component {

  render() {
    return (
      <div className="row header d-flex align-items-start justify-content-center">
        <div className="col pt-4 pb-4">
          <h1 className="header__title">Карта Мастеров</h1>
          <p className="header__p">
            Открытый каталог фото работ мастеров по строительным
            и ремонтным работам с
            с привязкой к вашей геолокации
          </p>
          <hr />
          <p className="header__p pt-2">
            Публикуйте фото своих работ и клиенты сами найдут вас
          </p>
        </div>
      </div>
    );
  }
}



export default connect()(Header);
