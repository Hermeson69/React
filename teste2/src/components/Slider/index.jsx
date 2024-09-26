import React, { useState, useEffect } from 'react';
import './Slider.css'; // Certifique-se de que o caminho está correto


// // Importando as imagens
// import slide1 from './images/slide1.jpg';
// import slide2 from './images/slide2.jpg';
// import slide3 from './images/slide3.jpg';

// const AutoSlider = () => {
//   // Definindo os slides
//   const slides = [slide1, slide2, slide3];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     // Função que muda o slide a cada 3 segundos
//     const intervalId = setInterval(() => {
//       setCurrentSlide((prevSlide) => 
//         prevSlide === slides.length - 1 ? 0 : prevSlide + 1
//       );
//     }, 3000); // Tempo de 3 segundos

//     // Limpar o intervalo quando o componente desmontar
//     return () => clearInterval(intervalId);
//   }, [slides.length]);



const AutoSlider = () => {
  // Definindo os slides (pode ser um array de imagens, textos, etc.)
  const slides = [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Função que muda o slide a cada 3 segundos
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Tempo de 3 segundos


    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ display: index === currentSlide ? 'block' : 'none' }}
        >
          <img src={slide} alt={`Slide ${index + 1}`} />
        </div>
      ))}

      <div className="indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)} 
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
