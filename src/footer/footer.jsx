import React from "react";
import './footer.css'

import img from './assets/elcamino.png'

export default function(){
    return(
    
      <div className="map" >          
          <iframe
                width="100%"
                height="300"
                loading="lazy" 
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDq3gsUzoN7XO0NxOgqyPlvQU2-4YL0A_E&q=-31.42544999943748,-64.22901809500121">
         </iframe>
       
        <footer className="footer">
            <div className="legend">
              <img className="logo-footer" src={img} height= "200" />
            </div>
            <div className="bottom">
              <span> Maestro Vidal 1496 (5010), Córdoba, Argentina. // +543513289063 </span>  
            </div>
        </footer>
        </div>
        
  
    )
}