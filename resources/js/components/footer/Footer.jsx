import React from "react";
import './footer.css'

const  Footer = () => {
    return (
        <footer>
            <a href="#" className="footer_logo">Angela Rios</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">Acerca de mí</a></li>
                <li><a href="#experience">Habilidades</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>

            <div className="footer_copyright">
                <small> &copy; Angela Rios Software Developer</small>
            </div>
        </footer>
    )
}
export default Footer
