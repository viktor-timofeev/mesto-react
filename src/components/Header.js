import React from 'react';
import logoPath from '../images/header__logo.svg';

function Header() {
  return (
    <header className="header">
    <img className="header__logo" alt="Лого" src={logoPath}/>
  </header> 
    
  );
}

export default Header;