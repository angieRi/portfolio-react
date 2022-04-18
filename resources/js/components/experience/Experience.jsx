import React from "react"
import './experience.css'
import {BsPatchCheckFill} from "react-icons/bs";

const  Experience =() => {
    return(
        <section id='experience'>
            <h5>Las habilidad y conocimientos que tengo</h5>
            <h2>Mi Experiencia</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Desarrollo Frontend</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill  className="experience_details-icon"/>
                            <div><h4>HTML5</h4></div>
                            <small className="text-light">Intermedio</small>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div><h4>CSS3</h4></div>
                            <small className="text-light">Básico</small>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div> <h4>JavaScript</h4></div>
                            <small className="text-light">Intermedio</small>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div><h4>Boostrap</h4></div>
                            <small className="text-light">Intermedio</small>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div> <h4>Uikit</h4></div>
                            <small className="text-light">Básico</small>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div> <h4>React</h4></div>
                            <small className="text-light">Básico</small>
                        </article>
                    </div>
                </div>
                <div className="experience_backend">
                    <h3>Desarrollo Backend</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div><h4>PHP</h4></div>
                            <small className="text-light">Intermedio</small>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div><h4>Java</h4></div>
                            <small className="text-light">Intermedio</small>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div> <h4>C++</h4></div>
                            <small className="text-light">Básico</small>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div><h4>Python</h4></div>
                            <small className="text-light">Básico</small>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div><h4>MySql</h4></div>
                            <small className="text-light">Intermedio</small>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div><h4>SQL Serve</h4></div>
                            <small className="text-light">Básico</small>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div><h4>Laravel</h4></div>
                            <small className="text-light">Intermedio</small>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div><h4>Sprint Boot</h4></div>
                            <small className="text-light">Básico</small>
                        </article>

                    </div>
                </div>
                <div className="experience_import">
                    <h3>Conocimientos Importantes</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div><h4>POO</h4></div>
                            <small className="text-light">Intermedio</small>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon-e" />
                            <div><h4>Estructuras de datos</h4></div>
                            <small className="text-light">Intermedio</small>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon-e"/>
                            <div><h4>Estructuras de Control</h4></div>
                            <small className="text-light">Intermedio</small>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon-e"/>
                            <div> <h4>Manejo de Archivos</h4></div>
                            <small className="text-light">Básico</small>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div><h4>Regex</h4></div>
                            <small className="text-light">Intermedio</small>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div><h4>GIT</h4></div>
                            <small className="text-light">Intermedio</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>

)
}
export default Experience
