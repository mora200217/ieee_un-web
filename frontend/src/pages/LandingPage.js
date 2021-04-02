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
import { CardsList } from 'components/CardsList'
import { Form } from 'components/Form'; 
import { Calendar} from 'components/Calendar'; 

import lamp from 'assets/lamp.svg'; 
import gear from 'assets/gear.svg'; 
import pencil from 'assets/pencil.svg'; 
import team from 'assets/team.png'

export const LandingPage = () => {
	const [active, setActive] = useState(false); 
	const [color, setColor ] = useState('aess');

	const call = () => {
		setActive(!active); 
	}
	/*
	*/ 

	const changeColor = (id) => {
		console.log(id)
		setColor(id); 
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
			values = values.map((e, index) => (<Card name = {e.name} key = {index} id = {index}img = { e.img }/>) ); 
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

          	<Col className = "">
          		<img className = "owl" src={Owl} alt=""/>
          	</Col>
          </Row> 
		<img className = "owl-sm" src={Owl} alt=""/>
		</section>
		<section className = "section-2">
			<div className = "section-extension-1"/>
			<div className = "section-extension-2"/>

			{/* Card */}

			<div className = "cards-container d-flex align-items-center align-self-center justify-content-center">
			{ getCards() }
			</div>
		</section>
	
	<section className = "section-3 mt-5  pt-5 full-width d-flex flex-column justify-content-center">
	<div className = "quienes-somos-container center"> 
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
	<section className = {`position-relative full mt-5 transition-short ${color}-bg-color `}>
		<Chapter changeColor = { changeColor }/> 
	</section>


		{ /* Users */ }
		<section className = "position-relative full-width pt-5" style = {{ height: 'fit-content'}}>
			<div className = "team-div d-flex flex-column align-items-center mt-5">
				<img className = "team-icon" src= { team } alt=""/ >
				<div className = "row mt-3 align-items-center">
					<div className = "col"><span className = "line-title" /></div>
					<div className = "col team-title">Nuestro Equipo</div>
					<div className = "col"><span className = "line-title" /></div>
				</div>

			
			</div>
			<div className = "w-100 position-relative" style = {{ height: 'fit-content'}}>
				<div className = "arrow-up"> </div>
				<div className = "card-container-team position-relative">
					<CardsList /> 
				</div>
			</div>
		</section> 


		

		{ /* Calendar */}
		<section className = "full-width height-fc  position-relative">
			<Calendar/> 
		</section>

		{ /* Users */ }
		<section className = "position-relative full">
			<Form /> 
		</section> 


			<footer className = "footer">
				<div className = "container d-flex py-3 justify-content-center">
					Hecho con &lt;3 por el equipo de IEEE UN 
				</div>
			</footer> 	


		
		</>


	
	); 
}


