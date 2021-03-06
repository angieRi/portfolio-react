import React from "react";
import './about.css';
import DISPLAY from '../../assets/display.png';
import {FaLaptopCode} from 'react-icons/fa'
import {HiOutlineAcademicCap} from 'react-icons/hi'
import {RiGitRepositoryLine} from 'react-icons/ri'


const  About =() => {
    return(
        <section id='about'>
            <h5></h5>
            <h2>Acerca de mí</h2>
            <div className="container about_container">
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                        <FaLaptopCode className="about_icon"/>
                            <h5>Experiencia</h5>
                            <small>2+ Años de experiencia laboral</small>
                        </article>
                        <article className="about_card">
                            <HiOutlineAcademicCap className="about_icon"/>
                            <h5>Formación Académica</h5>
                            <small>Estudiante de Ing. en Computación</small>
                        </article>
                        <article className="about_card">
                            <RiGitRepositoryLine className="about_icon"/>
                            <h5>Proyectos</h5>
                            <small>++ repositorios con mis habilidades</small>
                        </article>
                    </div>
                    <div>
                        <p>Como desarrolladora de aplicaciones web me interesa trabajar donde pueda
                            aportar mis habilidades y experiencia a un equipo de trabajo grato y profesional,
                            me considero una persona proactiva, organizada, responsable que se mantiene
                            actualizada que incorpora constantemente nuevas tecnologías, sin temor a los
                            retos o cambios que puedan surgir.
                        </p>
                    </div>
                </div>
                </div>
            </section>
    )
}
export default About
