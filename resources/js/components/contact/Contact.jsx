import React from "react"
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const  Contact =() => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_o5q5kkc', 'template_s3sz9uq', form.current, 'YdWyOPbleDUV4DELl')
        e.target.reset()
    };
    return(
        <section id='contact'>
            <h5></h5>
            <h2>Contacto</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className="contact_option-icon"/>
                        <h4>Email</h4>
                        <h5>arios.valdera@gmail.com</h5>
                        <a href="mailto:arios.valdera@gmail.com" target="_blank">Envía un correo</a>
                    </article>
                    <article className="contact_option">
                        <ImWhatsapp className="contact_option-icon"/>
                        <h4>Whatsapp</h4>
                        <h5></h5>
                        <a href="https://api.whatsapp.com/send?phone=+541155122355" target="_blank">Envía un mensaje</a>
                    </article>
                </div>
                {/*fin contacto opciones*/}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Ingrese su nombre" required />
                    <input type="email" name="email" placeholder="Ingrese su correo" required />
                    <textarea name="message" placeholder="Escriba su mensaje" rows="7" required ></textarea>
                    <button type="submit" className="btn btn-primary" >Envíar Mensaje</button>
                </form>
            </div>
        </section>

    )
}
export default Contact
