import React from 'react'
import footerLogo from '../img/footer-logo.png'

const Footer = () => {
  return (
    <div className='wrap'>
        <div className="footer-area">
            <img src={footerLogo} alt="footer 로고" />
            <p>&copy;Copyright 만개의 레시피 Inc. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer