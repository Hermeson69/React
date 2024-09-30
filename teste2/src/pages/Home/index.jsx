import './Home.css'
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'

function Home(){
    return(
      <div id='home'>
      <Navbar />
      <section className='container'>
        <div className='conteudo'>
          <p>
            Hi 👋! My name is,
            <br />
            <span>
              Hermeson Alves and 
            </span>
            <br />
            I'm a Full-Stack Programmer, from Brazil
          </p>
          <button className='btn btn-red'>
            Saiba mais
          </button>
        </div>
        <figure className='figure'>
          <img src="../../public/Home.svg" alt="Profile" />
        </figure>
      </section>
      <Footer/>
    </div>
    )
}


export default Home
