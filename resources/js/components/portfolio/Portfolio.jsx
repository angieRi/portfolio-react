import React from "react";
import './portfolio.css';
import Projects from "./Projects";


import IMG1 from '../../assets/display.png'
import IMG2 from '../../assets/display.png'
import IMG3 from '../../assets/display.png'
import IMG4 from '../../assets/display.png'
import IMG5 from '../../assets/display.png'
import IMG6 from '../../assets/display.png'
import IMG7 from '../../assets/display.png'


const  Portfolio =() => {
    return(
        <section id='portfolio'>
            <h5>Lo mas reciente</h5>
            <h2>Portfolio</h2>
            <Projects/>
        </section>
    )
}
export default Portfolio
