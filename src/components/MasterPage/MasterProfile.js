import React from 'react';
import { connect } from 'react-redux';
import './MasterPage.css';
import { getCategorys, toggleVisibility, toggleObjectModal } from '../../actions';

//---------preparing of the props--------
const mapStateToProps = (state) => ({
  categorys: state.categorys.data,
  email: state.user.email,
  first_name: state.user.first_name,
  last_name: state.user.last_name,
  phone: state.user.phone,
  category_ids: state.user.categorys,
});

const actionCreators = {
  getCategorys: getCategorys,
  toggleVisibility: toggleVisibility,
  toggleObjectModal: toggleObjectModal,
};


//--------------Master Profile Component----------------------------------------
class MasterProfile extends React.Component {
  componentDidMount() {
    const { getCategorys } = this.props;
    getCategorys();
  }

  renderCategoryList = (categorys, ids) => {
    if (categorys.length === 0) {
      return null;
    }
    return categorys
      .filter((category) => ids.includes(category.id))
      .map((category) => <li key={category.category_name}><span className="masterprofile__category">{category.category_name}</span><span className="masterprofile__delete">x</span></li>);
  }

  render() {
    const { email, first_name, last_name, phone, category_ids, categorys } = this.props;
    return (
      <div className="row masterprofile pb-4">
        <div className="col-12 text-center masterprofile__title">Профиль мастера</div>

        <div className="col-12 border-bottom masterprofile__group">
          <p className="masterprofile__label">Имя:</p>
          <p className="masterprofile__value">{first_name}</p>
          <div className="masterprofile__form-link"><span className="masterprofile__form-link">Изменить</span></div>
        </div>

        <div className="col-12 border-bottom masterprofile__group">
          <p className="masterprofile__label">Фамилия:</p>
          <p className="masterprofile__value">{last_name}</p>
          <div className="masterprofile__form-link"><span className="masterprofile__form-link">Изменить</span></div>
        </div>

        <div className="col-12 border-bottom masterprofile__group">
          <p className="masterprofile__label">Email:</p>
          <p className="masterprofile__value">{email}</p>
          <div className="masterprofile__form-link"><span className="masterprofile__form-link">Изменить</span></div>
        </div>

        <div className="col-12 border-bottom masterprofile__group">
          <p className="masterprofile__label">Номер телефона:</p>
          <p className="masterprofile__value">{phone}</p>
          <div className="masterprofile__form-link"><span className="masterprofile__form-link">Изменить</span></div>
        </div>

        <div className="col-12 border-bottom masterprofile__group">
          <p className="masterprofile__label">Специальности:</p>
          <ul className="masterprofile__value">
            { this.renderCategoryList(categorys, category_ids) }
          </ul>
          <div className="masterprofile__form-link">
            <span className="masterprofile__form-link">Изменить</span>
          </div>
        </div>

      </div>
    )
  }
}

export default connect(mapStateToProps, actionCreators)(MasterProfile);
