import React from "react";
import './header.css';
import ME from '../../assets/foto.jpg';
import CVD from "./CVD";
import HeaderSocial from "./HeaderSocial";

const  Header =() => {
    return(
        <header>
            <div className="container header_container">
                <h5></h5>
                <h1>Angela Rios</h1>
                <h5 className="text-light">Desarrolladora de Software</h5>

                <CVD />
                <HeaderSocial/>
                <div className="me">
                    <img src={ME} alt="me"/>
                    <div className="perfil">
                        <p  >Desarrolladora de aplicaciones web y estudiante de Ingeniería en
                            Computación, actualmente continuo incorporando nuevas tecnologías a
                            mis conocimientos, desarrollar mis habilidades,
                            aportar mi experiencia es muy importan para crecer en la profesión que elegí y me gusta.
                        </p>
                    </div>

                </div>

                <a href="#contact" className="scroll_down">Scroll Bajar</a>
            </div>
        </header>
    )
}
export default Header
