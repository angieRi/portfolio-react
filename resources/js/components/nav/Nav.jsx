import React from "react"
import './nav.css'
import {AiOutlineHome} from "react-icons/ai";
import {RiUserLine} from "react-icons/ri";
import {BiBook} from "react-icons/bi";
import {GoProject} from "react-icons/go";
import {BiMailSend} from "react-icons/bi";
import {useState} from "react";

const  Nav =() => {
    const [activeNav,setActiveNav] =useState('#')
    return(
        <nav>
            <a href="#" onClick={() =>setActiveNav('#')} className={activeNav ==='#' ? 'active' :''}><AiOutlineHome/></a>
            <a href="#about" onClick={() =>setActiveNav('#about')} className={activeNav ==='#about' ? 'active' :''}><RiUserLine/></a>
            <a href="#experience" onClick={() =>setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active' :''}><BiBook/></a>
            <a href="#portfolio" onClick={() =>setActiveNav('#portfolio')} className={activeNav ==='#portfolio' ? 'active' :''}><GoProject/></a>
            <a href="#contact" onClick={() =>setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' :''}><BiMailSend/></a>
        </nav>
    )
}
export default Nav
