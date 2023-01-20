import React from "react";
import "./info.css"

import Aos from "aos";
import 'aos/dist/aos.css';


export default function Info(){

    return(
        
        <section className="info" id="Info">
            <div data-aos="fade-left" className="info-center">
                <h2 className="info-text">
                Envios a 
              <span className="info-span" > todo </span>
                el pais
                 </h2>
                 
                 <p className="text">
                 Realizamos envíos a toda Argentina por Correo Argentino. Ofrecemos el envío a domicilio o la sucursal cercana de Correo Argentino.
                 </p>
                 <h3 className="sub-title">
                    ¿Cuanto demora en llegar mi pedido?
                 </h3>
                 <p className="text">
                 La demora de entrega es de 3 a 6 días hábiles aproximadamente, como asi el costo de envio, depende siempre de la localidad de destino.
                 </p>
                 <h3 className="sub-title">
                    ¿Cuanto puedo realizar un pedido, ver el catalogo de productos y ofertas?
                 </h3>
                 <p className="text" >                
                 Para realizar un pedido, simplemente ponte en contacto con nosotros haciendo click en logo de WhatsApp o instagram que se encuentra abajo a la derecha. Tambien podes conocer las promociones disponible en la seccion de "CATALOGO"
                 </p>          
             </div>
            
        </section>


    )


}