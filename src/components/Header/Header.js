import React from "react";
import "./Header.scss"
import Logo from "../../assets/images/logo.png"
import ButtonIco from "../../assets/images/button-ico.png"
import CartIco from "../../assets/images/icon-cart.png"
const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <img src={Logo} alt="logo"/>
                    </div>
                    <nav className="header__nav">
                        <a href="#home" className="header__nav-link">Home</a>
                        <a href="#menu" className="header__nav-link">Menu</a>
                        <a href="#reservation" className="header__nav-link">Reservation</a>
                        <a href="#recipe" className="header__nav-link">Recipe</a>
                        <a href="#blog" className="header__nav-link">Blog</a>
                        <a href="#pages" className="header__nav-link">Pages</a>
                        <a href="#contact" className="header__nav-link">Contact</a>
                        <a href="#cart" className="header__nav-link header__nav-link--cart ">
                            <img src={CartIco} alt="cart"/>
                            <span> 0 </span>
                        </a>
                        <div href="#memu" className="header__nav-link header__nav-link--btn">
                            <a href="#memu"><img src={ButtonIco} alt="button"/>Book Your Table</a>
                        </div>
                    </nav>
                </div>

            </div>
        </div>
    );
};
export default Header