import React from "react";
import './portfolio.css';
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

            <div className="container portfolio_container">
                {
                    data.map(({id,image,title,repository,demo}) => {
                        return(
                            <article key={id} className="portfolio_item">
                                <div className="portfolio_item-image" >
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio_item-cta">
                                    <a href={repository} className='btn' target='_blank'  >Repositorio</a>
                                    <a href={demo} className='btn btn-primary' target='_blank' >Demo</a>
                                </div>
                            </article>
                        )
                    })
                }

            </div>
        </section>
    )
}
export default Portfolio
