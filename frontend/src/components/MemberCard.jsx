// Member card .
import { React, useState, useEffect } from 'react'; 
import 'styles/MemberCard.sass'; 
import andres from 'assets/andres.jpg'; 
export const  MemberCard = ({name, role, img}) => {
	const [name_, setName] = useState(name); 
	const [photo_, setPhoto] = useState(img); 
	const [role_, setRole] = useState(role); 

	console.log(photo_)

	return (
			<div className = "member-card transition-short align-items-center ">
				<div className ="img-container position-relative">
					<img className = "position-relative" src= { photo_ } alt="" />
				</div>
				<h1 className = "position-relative ml-0 mr-0 align-self-center mb-1"> { name } </h1>
				<h2> { role } </h2>
			</div>
		); 
}