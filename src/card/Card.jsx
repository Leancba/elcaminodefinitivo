import React from "react";
import "./cards.css";

export default function Card({ id, title, description, image , setSelected, setPromotion}) {
  
    const clickHandler = () => {
        setPromotion(undefined)
        setSelected(id);
        
      };

    const clickPromotion = () => {
      setPromotion(true)
      setSelected(id)
      
    }  

    
      return (

    <div  data-aos="flip-left" className="card text-center bg-dark animate__animated animate__fadeInUp" id="contenedor" >
            <div className="overflow">
                 <img src={image} alt="a wallpaper" className="card-img-top" />
            </div>
            <div className="card-body">
                 <h4 className="card-title">{title}</h4>
                 <div className="card-info" >
                    <ul class="slide-foot">
									    <li>
                        <a href="/#" onClick={clickHandler} >
                          <i className="fa-plus"   class="fa fa-plus "></i> 
                          <span>Más informacion</span>
                        </a>
                      </li>
									    <li>
                        <a href="/#" onClick={clickPromotion} >
                          <i class="fa fa-smile-o "  ></i> 
                          <span>Promociones</span>           
                        </a>
                        
                      </li>
				            </ul>
                 </div>
  
            </div>
    </div>
    
    
  );
}
