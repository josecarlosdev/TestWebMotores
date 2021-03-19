import React from "react";
import '../../App.css'
import Logo from "../../assets/imgs/Captura-de-tela-de-2021-03-16-19-15-12.svg";

const Header = () => {
    return (
        <header className="header" >
            <img className="header__logo" src={Logo} alt="Logo Speak up Tech" />
        </header>
    )
}

export default Header;