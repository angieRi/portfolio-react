import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiGitlab} from 'react-icons/fi'

const HeaderSocial = () => {
    return (
        <div className='header_social'>
            <a href="www.linkedin.com/in/angela-rios29/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/angieRi" target="_blank"><BsGithub/></a>
            <a href="https://gitlab.com/angie_ri" target="_blank"><FiGitlab/></a>
        </div>
    )
}
export default HeaderSocial
