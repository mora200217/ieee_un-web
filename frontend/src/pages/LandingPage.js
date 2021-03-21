/*
	Landing Page v0.1 (20-03-2020)
	Página principal de la aplicación. Contiene toda 
	la información del a rama. 
*/ 

import { React, useState, useEffect} from 'react'; 
import 'styles/LandingPage.sass'; 
import Button from 'react-bootstrap/Button';

import Owl from 'assets/Buho.svg'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import facebook from 'assets/facebook.svg'; 
import { NavBar } from 'components/NavBar.js'; 
import { Media } from 'components/Media.js'; 
import { Card } from 'components/Card'; 
import { Chapter } from 'components/Chapter'; 

import lamp from 'assets/lamp.svg'; 
import gear from 'assets/gear.svg'; 
import pencil from 'assets/pencil.svg'; 

export const LandingPage = () => {
	const [active, setActive] = useState(false); 
	const [color, setColor ] = useState(0); // int 
	const call = () => {
		setActive(!active); 
	}
	/*
	*/ 

	const changeColor = () => {
		setColor(color + 1); 
	}


	const getCards = () => {
			let values = [
			{
				"name": "Imagina",
				"img": lamp	
			},
			{
				"name": "Diseña",
				"img": gear
			},
			{
				"name": "Crea",
				"img": pencil	
			},
			]; 
			values = values.map(e => (<Card name = {e.name} img = { e.img }/>) ); 
			return values; 
	}

	return (
		<>

		<NavBar /> 
		<Media/>
		{/* Imagen principal */}
		<section className = "section-1"> 
			{/* Nav bar*/}
          <Row className = "w-75 title-landing-container container m-auto mr-4 center d-flex justify-content-center"> 
          <Col >
          	<div className = "title mr-5"> Ingenia tu camino </div>
          	<Row> 
          		<h3 className = "ml-4 ver-mas">Ver mas</h3> 
          	</Row>
          	</Col>

          	<Col>
          		<img className = "owl" src={Owl} alt=""/>
          	</Col>
          </Row> 
		
		</section>
		<section className = "section-2">
			<div className = "section-extension-1"/>
			<div className = "section-extension-2"/>

			{/* Card */}

			<div className = "cards-container d-flex align-items-center align-self-center justify-content-center d-column">
			{ getCards() }
			</div>
		</section>
	
	<section className = "section-3 full">
	<div className = "quienes-somos-container"> 
	<br/>
	<br/>
	<br/>
		<h1  className = "title-container align-text-center"> ¿Quienes Somos? </h1>

		<p  className = ""> 
			La Rama Estudiantil IEEE de la Universidad Nacional de Colombia es un grupo estudiantil, asociado a el Institute of Electrical and Electronics Engineers (IEEE), perteneciente a la región 9 comprendida por Latinoamérica y el Caribe, e igualmente a Sección Colombia
			</p> 

			<br/>
			<br/>

		<div  className = ""> </div> 
		<hr/> 

		<div className = "data-container row d-flex  justify-content-center align-items-center"> 
			<div className = "col d-flex justify-content-center" >
				<p className = "a" >
				+161
				</p>
				<p className = "b" >
				Miembros
				</p>
			</div>

			<div className = "col d-flex justify-content-center" >
				<p className = "a" >
				12
				</p>
				<p className = "b" >
				Capítulos
				</p>
			</div>


			<div className = "col d-flex justify-content-center" >
				<p className = "a" >
				32
				</p>
				<p className = "b" >
				Proyectos
				</p>
			</div>
		</div>
	</div>
	</section>		
		{ /* Carousel */}
	<section className = {`position-relative full transition-short ${color % 2 == 0 ? 'aess-bg-color' : 'aps-bg-color'} `}>
	<Chapter changeColor = { changeColor }/> 

	</section>
		</>
	); 
}


