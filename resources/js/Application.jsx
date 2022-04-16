import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Porfolio from "./components/portfolio/Porfolio";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";

const  Application =() => {
    return(
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Services/>
            <Porfolio/>
            <Contact/>
            <Footer/>
        </>
    )
}
export default Application
