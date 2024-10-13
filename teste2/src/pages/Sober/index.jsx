import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import './Sobre.css';
import React from "react";
import { faBootstrap, faCss3, faHtml5, faPython, faReact, faJs, faPhp } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function Sobre(){
    return (
        <div className="sobre">
            <Navbar />
            <section className="container2">
                <div className="imagem">
                    <img className="sobre-img" src="https://i.imgur.com/6ZQ5x6D.png"></img>
                </div>

                <div className="conteudo2">
                    <h1>Sobre</h1>
                    <p>
                    Olá, Sou <span> Hermeson A.</span> um Full-Stack developer and UI | UX Design.
                    Estou a mais de 2 anos na área, busco sempre aprender mais coisas sobre o maravilhoso mundo da programação.
                    Atualmente me encontro estudando ma <span>UNIRSIDADE FEDERAL DO PIAUI</span> - <span>PICOS</span>  no campos CHNB, cursando XXXXXXX                   </p>
                </div>
            </section>
            <section className="ferramentas">
                <div className="dominios">
                    <h2>Minhas Ferramentas</h2>
                    <div className="icones">
                        <i><FontAwesomeIcon icon={faHtml5}/></i>
                        <i><FontAwesomeIcon icon={faCss3}/></i>
                        <i><FontAwesomeIcon icon={faJs}/></i>
                        <i><FontAwesomeIcon icon={faBootstrap}/></i>
                        <i><FontAwesomeIcon icon={faPhp}/></i>
                        <i><FontAwesomeIcon icon={faPython}/></i>
                        <i><FontAwesomeIcon icon={faReact}/></i>
                        <i><FontAwesomeIcon icon={faDatabase}/></i>
                    
                        
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Sobre