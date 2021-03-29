// Card jsx 

import { React } from 'react'; 
import "styles/Card.sass"; 

export const Card = ({ name, img, id }) => {
	return (
		<div className = {`card-container flex-column  justify-content-center d-lg-block align-items-center ${id > 0 ? `d-none ` : ``}`}>
		<img src= { img } alt=""/>
		<h2> { name } </h2>
		</div>
		)
}