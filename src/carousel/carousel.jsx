import React from 'react'
import { Carousel } from 'react-responsive-carousel';



import img1 from './assets/JEsica-Nueva.png';
import img2 from './assets/Slide-Estereo-Shocks-Jesica-Ciri.png';
import img3 from './assets/Slide-Funky.png';
import img4 from './assets/ablandador.jpg'
import img5 from './assets/prueba.png'

import "./carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const carousel_item = [
  {
    id: 1,
    title: 'ESTEREOCOLOR. COLORACIÓN EN KIT',
    text: '100% de cobertura de canas. Su fórmula es Vegana, está certificada Sin T.A.C.C. y dermatológicamente testeada.',
    image : img1
  },
  {
    id: 2,
    title: 'ESTEREOCOLOR. SHOCKS INTENSIVOS',
    text: 'La línea más completa de Tratamientos Intensivos para que tu pelo vuelva a lucir perfecto.',
    image : img2
  },
  {
    id: 3,
    title: 'ESTEREOCOLOR. FUNKY COLORS',
    text: 'Coloración Semipermanente que dura de 6 a 12 lavados para que puedas jugar y cambiar todas las veces que quieras!',
    image : img3
  },
  {
    id: 4,
    title: 'ESTEREOCOLOR. LANZAMIENTOS',
    text: 'Nuevo Ablandador de Canas!',
    image : img4
  },
  { id: 5,
    title: 'Oleos nutritivos para el cabello',
    text: 'Maxima humectacion y nutricion sin enguaje. Lacios y Rulos perfectos sin enguaje.',
    image : img5
  },
]

export default function Carousels(){
    return (
      
        <Carousel className='slider__content'
        autoPlay= 'true'
        interval='3000'
        emulateTouch='true'
        transitionTime='1000'
        swipeable='true'
        >
          {carousel_item.map( element => (
            <div key={element.id} className='slider__content--item'>
              <img src={element.image } alt={element.title} />.
              <div className='slider-description'>
                <p className=''>{element.title}</p>
                <div>
                  <span>{element.text}</span>
                </div>
              </div>
              </div>
            
          ))}
        </Carousel>
    )
      
      
    
  
}