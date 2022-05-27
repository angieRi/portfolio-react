import React, {useEffect,useState} from "react";

/**
 * consume api local de projects
 * @returns {JSX.Element} muestra projects
 * @constructor
 */
const Projects = () => {

    const url="api/projects"
    const [projects,setProject] = useState([]);

    const fetchApi = async () => {
        const data = await fetch(url)
        const apiProjects = await data.json()
        setProject(apiProjects);
    }
    useEffect(() => {
        fetchApi()
    },[])

    return (
        <div className="container portfolio_container">
            { !projects.data ? 'Cargando...':
                projects?.data?.map((project,index ) => (
                        <article key={project.id} className="portfolio_item">
                            <div className="portfolio_item-image" >
                                <img src={'https://angeladeveloper.herokuapp.com/'+project.image } alt={project.title} className="img-project"/>
                            </div>
                            <h3>{project.title}</h3>
                            <div className="portfolio_item-cta">
                                <a href={project.repository } className='btn' target='_blank'  >Repositorio</a>
                                <a href={project.demo} className='btn btn-primary' target='_blank' >Demo</a>
                            </div>
                        </article>
                    ))
           }

        </div>
    );
}
export default Projects
