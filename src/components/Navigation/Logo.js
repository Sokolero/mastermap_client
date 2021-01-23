import React from 'react';
import { Link } from 'react-router-dom';

const Logo = (props) =>
  <div className="col-8 col-md-2 d-flex logo">
    <Link to="/">MasterMap</Link>
  </div>;

export default Logo;
