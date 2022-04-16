import React from "react";
import './header.css';
import ME from '../../assets/yo.png';
import CVD from "./CVD";
import HeaderSocial from "./HeaderSocial";

const  Header =() => {
    return(
        <header>
            <div className="container header_container">
                <h5>Hola soy</h5>
                <h1>Angela Rios</h1>
                <h5 className="text-light">Desarrolladora de Software</h5>

                <CVD />
                <HeaderSocial/>
                <div className="me">
                    <img src={ME} alt="me"/>
                </div>
                <a href="#contact" className="scroll_down">Scroll Bajar</a>
            </div>
        </header>
    )
}
export default Header
