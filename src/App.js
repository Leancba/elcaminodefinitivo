import './App.css';

import Nav from './nav/nav'
import Carousel from './carousel/carousel'
import About from './about/About';
import Info from './info/info';
import Footer from './footer/footer'; 
import Cards from './card/Cardlist'


function App() {

  return (
    <div className="App">
     <Nav/>
     <Carousel/> 
     <About/>
     <Info/>
     <Cards/>
     <Footer/>
    </div>
  );
}



export default App;
