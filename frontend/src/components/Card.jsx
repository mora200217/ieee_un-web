// Card jsx 

import { React } from 'react'; 
import "styles/Card.sass"; 

export const Card = ({ name, img }) => {
	return (
		<div className = "card-container d-flex flex-column justify-content-center align-items-center">
		<img src= { img } alt=""/>
		<h2> { name } </h2>
		</div>
		)
}