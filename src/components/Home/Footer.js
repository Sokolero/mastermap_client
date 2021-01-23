import React from 'react';

const Footer = (props) => {
  return (
    <div className="row pt-4 pb-4 footer">
      <div className="col text-center">
        <p>Техническая поддержка: <span className="font-weight-bold">support@masteram.ru</span></p>
        <hr />
        <p>Социальные сети: </p>
        <div>
          <span className="icon-container px-2">
            <img className="social-icon" src="/images/tg.png" alt="telegramm" />
          </span>
          <span className="icon-container px-2">
            <img className="social-icon" src="/images/wtsp.png" alt="whatsapp" />
          </span>
          <span className="icon-container px-2">
            <img className="social-icon" src="/images/vk.png" alt="vk" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer;
