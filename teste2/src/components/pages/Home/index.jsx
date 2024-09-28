import './Home.css'
import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer'

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
          <img src="https://66.media.tumblr.com/306f5f99679539f16da869ef187f5699/tumblr_p1dyscS7rC1rqe0rbo1_500.gif" alt="Profile" />
        </figure>
      </section>
      <Footer/>
    </div>
    )
}


export default Home
