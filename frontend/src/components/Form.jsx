// Form 
import { React, useEffect, useState} from 'react'; 
import 'styles/Form.sass'; 
import axios from 'axios'; 

export const Form = () => {
	const [info, setInfo] = useState(); 


	const getData = () => {
		console.log('Info'); 
		console.log(info);
		const infoToReturn = info.map(e => {
			return(
			<div className = "container" key = {e.name}>
				<h1> { e.name }</h1>
				<p className = "p-2"> { e.info }</p>
			</div>
			)
		})
		console.log(infoToReturn)
		return infoToReturn; 
	}

	useEffect(() => {
		axios.get('https://ieeeun.com/event')
			.then(e => {
				// alert('Conseguido')
				console.log(e.data); 
				const data = e.data; 
				setInfo(data); 
			})
			.catch( e => {
				alert('noks perro'); 
			})
	}, [])


	return (
	<>
		{ info === undefined ? '' : getData() }	
	</> 
		)

}