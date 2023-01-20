import { useRef, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import "./nav.css"
import logo from "./assets/logo-prueba.png"


export default function Navbar() {
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	const [section, setsection] = useState([])
	const [navList, setnavLi] = useState([])

	useEffect(() => {
        const sections = document.querySelectorAll('section');
		const navLi = document.querySelectorAll('nav ul li')
		setsection(sections)
		setnavLi(navLi)	
    },[]);

	
	window.addEventListener('scroll', () => {
		let current = '';
		
		section.forEach(sections => {
			const sectionTop = sections.offsetTop;
			const sectonHeight = sections.clientHeight;
			// eslint-disable-next-line no-restricted-globals
			if(scrollY >= (sectionTop - sectonHeight / 3) ){
				current = sections.getAttribute('id')
			}
		})
		navList.forEach( li => {
			li.classList.remove('active');
			if(li.classList.contains(current)){
				li.classList.add('active')
			}
		})
	})

	window.onscroll = function() {
		if (document.documentElement.scrollTop > 50) {
			document.getElementById("header").style.height = "70px";
			document.getElementById("logo").style.height = "55px";
			document.getElementById("nav").style.top="70px"
			
		} else {
			document.getElementById("header").style.height = "120px";
			document.getElementById("logo").style.height = '';
			document.getElementById("nav").style.top='';
		}
	}

	return (
		<header className="nav-header" id="header" >
				<figure className="figure" >
					<img alt="logo estereocolor" src={logo} className="logo" id="logo" />
				</figure>	
				<nav className="nav-menu" ref={navRef} id="nav" >
					<ul className="nav-ul">
						<li  className="About">
							<a onClick={showNavbar} href="#About">Sobre Nosotros </a> 
						</li>
						<li className="Info" >
							<a onClick={showNavbar} href="#Info">Metodos de envio</a>
						</li>
						<li className="Cards" >
							<a onClick={showNavbar} href="#Cards">Catalogo</a>
						</li>
					</ul>
				</nav>
				<button className="nav-btn" onClick={showNavbar}>
					<FaBars />
				</button>
		</header>
	);
}

