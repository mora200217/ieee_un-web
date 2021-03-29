// Cards List 
import { React, useState} from 'react'; 
import 'styles/CardsList.sass'; 

import { MemberCard } from './MemberCard.jsx'; 
import membersList from 'components/utils/Members.json'; 


export const CardsList = () => {

	const getCard = () => {
		console.log(membersList); 
		const members = membersList.map(e => {
			let photo; 
			try{
				photo = require(`assets/${e.id}.jpg`); 
			}catch(error){
				photo = require(`assets/${e.id}.jpeg`); 
			}
		return (<MemberCard name = {e.name} role = {e.role} img = {photo.default} />)
		})
		
		return members; 
	}
	return (
		<>
			<div className = "card-list d-flex justify-content-center flex-wrap transition-short">
				{ getCard() }

			</div>
		</> 
		)

}