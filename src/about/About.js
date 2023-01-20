import React, { useEffect } from "react";
import "./About.css"

import Aos from "aos";
import 'aos/dist/aos.css';



export default function About(){
    useEffect(() => {
        Aos.init({ duration: 2000 });
    },[]);
    
    return(
        <section  className="about" id="About" >
            <div data-aos="fade-right"  className="center" >
                    <h2  className="title">
                    Quienes somos
                    </h2>
                    <p className="text">
                    Desde 2005, somos una PYME familiar ubicada en Córdoba Capital, que se dedica a la comercializacion y distribucion de productos de peluqueria, para negocios comerciales o salones de belleza 
                    </p>
                    <h3 className="sub-title">
                    Nuestra mision
                    </h3>
                    <p className="text">
                    Nuestra mision principal es poder distribuir a todos los puntos del pais, los productos de la marca Estereo-Color y Bonmetique, que gracias a su precio/calidad van tomando mas relevancia en el mundo del cuidado capilar
                    </p>
                    <h3 className="sub-title">
                    Contactanos
                    </h3>
                    <p className="text">
                    Si quieres ponerte en contacto o saber mas sobre nosotros, te invitamos a que nos sigas en nuestro perfil de <a target="_blank" href="https://www.facebook.com/ElCaminoCosmetica" className="facebook" ><span  >Facebook</span></a>, <a className="instagram" href="https://www.instagram.com/estereocolorvidal/" target="_blank" ><span >Instagram</span></a> o puedes ponerte en contacto directo con un representante, haz click en el siguiente enclace para comenzar una conversacion via <a className="whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone=5493513289063"  ><span >Whatsapp</span></a>
                    </p>
                 
            </div>
            <a href="https://www.instagram.com/estereocolorvidal/" class="btn-ins" target="_blank"> 
	                <i className="fa fa-instagram icono"></i>
	            </a>
                <a href="https://api.whatsapp.com/send?phone=5493513289063" class="btn-wsp" target="_blank"> 
	                <i className="fa fa-whatsapp icono"></i>
	            </a>
        </section>

    )


}