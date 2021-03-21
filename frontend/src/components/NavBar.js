// Nav bar 
import { React } from 'react'
import 'styles/NavBar.sass'
import logo from 'assets/logo.svg'; 
import menu from 'assets/menu.png'; 
export const NavBar = () => {
	return(
		<nav className = "main-navbar navbar-expand-md mt-3 ">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <img className = "logo-small" src={menu} alt=""/>
          </button>

          <a className = "navbar-brand logo-container ml-5"> 
               <img className = "p-2 logo-small" src= {logo} alt=""/> 
            </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            
            <ul className = "  collapse-navbar" id = "supportedContent">
              <li className = "nav-link">
                <a>Quienes Somos</a>
                <span></span>
              </li>

              <li className = "nav-link">
                <a>Capítulos</a>
                <span></span>
              </li>

              <li className = "nav-link">
                <a>Equipo</a>
                <span></span>
              </li>

              <li className = "nav-link">
                <a>Eventos</a>
                <span></span>
              </li>

              <li className = "nav-link">
                <a>Contáctanos</a>
                <span></span>
              </li>

            </ul>	

          </div>
		</nav>		
		)
}