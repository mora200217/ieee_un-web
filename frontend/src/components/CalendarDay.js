
import { React, useEffect, useState } from 'react'; 
import 'styles/Calendar.sass'; 

export const CalendarDay = (props) => {
	const [day, _] = useState(props.name); 
	
	const [active , setActive] = useState(props.active); 
	const [events, setEvents] = useState([]); 
	const [amountOfEvents, setAmountOfEvents] = useState(props.amountOfEvents); 

	useEffect(() => {
		setActive(props.active)
	}, [props.active])  

	useEffect(() => {
		setAmountOfEvents(props.amountOfEvents); 
	},
		[props.amountOfEvents])

	const changeState = () => {
		// setActive(!active); 
		props.setCurrentDay(day); 
	}

	const getEventsIndicator = () => {
		if(amountOfEvents <= 0)
			return (<> </> )
		const indicators = new Array(Math.min(amountOfEvents,3)).fill(0).map(e => (<span className = {`circle-indicator ${active ? 'active' : ''}`} />))
		return (indicators)
	}


	return (
		<div 
			className = {`d-flex flex-column position-relative justify-content-center align-items-center item ${active ? 'active' : ''}`} 
			onClick = { changeState } 
			key = {day}>

			<p>{ day }</p>
			<div className = "events-badge position-absolute mt-3 d-flex justify-content-center align-items-center">
				{ getEventsIndicator() }
			</div>
		</div>
		)
}
