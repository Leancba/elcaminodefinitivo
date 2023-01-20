import React from "react";
import Card from "./Card";



import image1 from "./assets/Kit.png"
import image2 from "./assets/Pouchera.png"
import image3 from "./assets/Funky.png"
import image4 from "./assets/shock.png"
import image5 from "./assets/oleos.png"
import image6 from "./assets/Ablandador.png"
import image7 from "./assets/silver.png"
import image8 from "./assets/black.png"

import Carta_colores from "./download/Tonos-Estereo-Kit-y-Exhibidor_23-2-2022_compressed.pdf"
import Carta_funky from "./download/Carta de Funkys.pdf"
import catalogo_shock from "./download/CATALOGO-OLEOS.pdf"
import catalogo_oleos from "./download/CATALOGO-SHOCKS.pdf"

import './cards.css'
import './popup.css'


import { useState } from "react";





const Json = [
    {
        id: 1,
        title: 'COLORACIÓN PERMANENTE EN KIT',
        description:'Fórmula en crema que logra un 100% de cobertura de canas obteniendo tonos perdurables e intensos hasta la siguiente aplicación. Su exclusiva fórmula con extracto de Aloe Vera cuida la  fibra capilar logrando brillo y suavidad extrema. Contiene: 1 Coloración crema x 47grs. / 1.66 Oz., 1 Oxidante crema x 47 grs. /1.66 Oz., 1 Par de guantes y 1 Tratamiento post-coloración (Acide) ',
        image: image1,
        catalog_type:'Carta de colores',
        catalog: Carta_colores,
        promotion: [
            {   numero: 1,
                promo: '30 unidades x $7830'
            },
            {   
                numero: 2,
                promo: '60 unidades x $1550'
            },
            {   
                numero: 3,
                promo: '90 unidades x $23200'
            },
            {   
                numero: 4,
                promo: '120 unidades x $31000'
            }
        ]
       
        
    },
    {
        id: 2,
        title: 'COLORACIÓN PERMANENTE EN PACKS',
        description:'Fórmula en crema que logra un 100% de cobertura de canas obteniendo tonos perdurables e intensos hasta la siguiente aplicación. Su exclusiva fórmula con extracto de Aloe Vera cuida la  fibra capilar logrando brillo y suavidad extrema.',
        image: image2,
        catalog_type:'Carta de colores',
        catalog: Carta_colores,
        promotion: [
            {   numero: 1,
                promo: '30 unidades x $6900'
            },
            {   
                numero: 2,
                promo: '60 unidades x $13800'
            },
            {   
                numero: 3,
                promo: '90 unidades x $20700'
            },
            {   
                numero: 4,
                promo: '120 unidades x $27600'
            }
        ]
        
        
    },
    {
        id:3,
        title: 'ESTEREOCOLOR. FUNKY COLORS',
        description:'Colores semipermanentes sin oxidantes ni amoniacos. FUNKY COLORS colores intensos y únicos sin dañar tu pelo. Duran de 6 a 12 lavados. Aplicacion directa. ',
        image: image3,
        catalog_type: 'Carta de colores',
        catalog: Carta_funky,
        promotion: [
            {   numero: 1,
                promo: '30 unidades x $7020'
            },
            {   
                numero: 2,
                promo: '60 unidades x $14040'
            },
            {   
                numero: 3,
                promo: '90 unidades x $21060'
            },
            {   
                numero: 4,
                promo: '120 unidades x $28080'
            }
        ]
       
        
    },
    {
        id:4,
        title:'ESTEREOCOLOR. SHOCKS INTENSIVOS',
        description:'La línea más completa de Tratamientos Intensivos para que tu pelo vuelva a lucir perfecto.',
        image: image4,
        catalog_type: 'Catalogo del producto',
        catalog: catalogo_shock,
        promotion: [
            {   numero: 1,
                promo: '30 unidades x $5160'
            },
            {   
                numero: 2,
                promo: '60 unidades x $10320'
            },
            {   
                numero: 3,
                promo: '90 unidades x $15480'
            },
            {   
                numero: 4,
                promo: '120 unidades x $20640'
            }
        ]
        
        
    },
    {
        id:5,
        title:'OLEOS HIDRATANTES',
        description:'Oleos Hidratantes para una maxima humectacion, para rulos definidos, lacios perfectos y nutricion profunda, sin enguajes.',
        image:image5,
        catalog_type: 'Catalogo del producto',
        catalog: catalogo_oleos,
        promotion: [
            {   numero: 1,
                promo: '30 unidades x $2130'
            },
            {   
                numero: 2,
                promo: '60 unidades x $4260'
            },
            {   
                numero: 3,
                promo: '90 unidades x $6390'
            },
            {   
                numero: 4,
                promo: '120 unidades x $8520'
            }
        ]
       
        
    },
    {
        id:6,
        title:'ABLANDADOR DE CANAS',
        description:'Mejora el cubrimiento de las canas más rebeldes y logra una mejor fijación del color. Es el complemento ideal para nuestra línea de coloración EstereoColor, en todas sus presentaciones. - Fórmula Vegan - Dermatológicamente Testeado - Sin T.A.C.C Contenido: caja exhibidora de 40 pouches de 4 ml. ',
        image:image6,
        promotion: [
            {   numero: 1,
                promo: '1 caja x 40 unidades x $2600'
            },
            {   
                numero: 2,  
                promo: '2 cajas x 40 unidades x 5200'
            },
            {   
                numero: 3,
                promo: '3 cajas x 40 unidades x $7800'
            },
            {   
                numero: 4,
                promo: '4 cajas x 40 unidades x $10400'
            }
        ]
       
    },
    {
        id:7,
        title:'SHAMPOO SILVER',
        description:'Línea para cabellos rubios muy claros. Contiene pigmentos negros que eliminan los reflejos amarillos y anaranjados y tonalizan los rubios muy claros. Acondicionador que prolonga el color gris plata y aporta nutrición e hidratación. ',
        image:image7,
        promotion: [
            {   numero: 1,
                promo: '3 unidades x $3090'
            },
            {   
                numero: 2,  
                promo: '6 unidades x $6180'
            },
            {   
                numero: 3,
                promo: '9 unidades x $9270'
            },
            {   
                numero: 4,
                promo: '12 unidades x $12360'
            }
        ]
       
    },
    {
        id:7,
        title:'SHAMPOO BLACK',
        description:'Línea para cabellos rubios, grises o blancos. Fórmula desarrollada con pigmentos color violeta, elimina gradualmente los reflejos amarillos del cabello gris, blanco o rubio',
        image:image8,
        promotion: [
            {   numero: 1,
                promo: '3 unidades x $3456'
            },
            {   
                numero: 2,  
                promo: '6 unidades x $6912'
            },
            {   
                numero: 3,
                promo: '9 unidades x $10368'
            },
            {   
                numero: 4,
                promo: '12 unidades x $13824'
            }
        ]
       
    }
]




export default function Cardlist() {

  const [selected, setSelected] = useState("");
  const [promotion, setPromotion] = useState('')


  const selectedCard = Json.filter((card) => card.id === selected);
  const promotionCard = selectedCard[0]?.promotion



  
  const clearSelected = (e) => {
    e.preventDefault();
    
    setSelected(undefined);
  };


    return (
    <section className="section-card" id="Cards" >
        <div className="card-center">
          <h2 className="catalog-title"> Catalogo de productos </h2>
               <div className="container d-flex justify-content-center align-items-center h-100" >
                
                    <div className="row mb-5">
                    
                        {Json.map(( cardData ) => (
                        
                            
                        <div className="col-md-4 mt-5" > 

                             <Card  {...cardData} key={cardData.id} setSelected={setSelected} setPromotion={setPromotion} />
                             
                        </div>
                        ))}

                    </div>
               </div>
               <div className={selectedCard.length > 0 ? "overlay active" : "overlay"} >        
                    <div className={selectedCard.length > 0 ? "popup active" : "popup"} >
                        <a href="#"  onClick={clearSelected} className="btn-cerrar-popup">X</a>
                        <div className="container" >
                            <img src={selectedCard[0]?.image} className="image" />
                            <div className="info1">
                                <h3>{ promotion? 'Lista de combos': selectedCard[0]?.title}</h3>
                                
                                 { promotion? 
                                 <div> 
                                   {promotionCard?.map((card) => 
                                   
                                   <div className="promotion"> 
                                        <h3> Promo {card.numero} </h3>
                                        <p>{card.promo} </p>          
                                   </div>
                                   )}
                                <p id="consultas"><i class="fas fa-exclamation"></i>Consulte por combos personalizados</p>
                                 </div> 
                                 
                                 : 
                                 
                                 <div> 
                                    <p>{selectedCard[0]?.description}</p>
                                    {selectedCard[0]?.catalog ? <div>
                                        <a download href = {selectedCard[0]?.catalog}>
                                            <button class="btn">
                                                <i class="fas fa-download"/> <span>{selectedCard[0]?.catalog_type}</span>
                                            </button>
                                        </a>
                                    </div>  
                                    :
                                    <div>
                                        
                                    </div> }
                                    
                                </div>
                                } 
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
               
        </div>
    </section>
    )}