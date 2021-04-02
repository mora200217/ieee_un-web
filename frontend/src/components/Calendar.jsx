// Calendar 
import { React, useState,useEffect } from 'react'; 
import 'styles/Calendar.sass'
import axios from 'axios'; 

import { CalendarDay } from 'components/CalendarDay.js'; 

import { 
	getWeekDay, 
	numberToMonth, 
	djangoToDate, 
	numberOfDaysInMonth, 
	formatHour 
} from './utils/Date'; 

import { countDate } from './utils/array'; 

export const Calendar = () => {

	const [data, setData] = useState(new Array(0)); 
	const [currentDay, setCurrentDay] = useState(); 
	const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
	const [initDays, setInitDays] = useState();
	const [firstLoad, setFirstLoad] = useState();
	// const [currentDay, setCurrentDay] = useState(); 

	const getInitDays = () =>{
		// Días del mes 
			const dayActive = new Array(numberOfDaysInMonth(2021, currentMonth + 1)).fill(0).map((e, index) => {
				return( 
					<CalendarDay 
						key = {index + String(currentMonth)} 
						active = {index + 1 == currentDay} 
						setCurrentDay = {setCurrentDay} 
						amountOfEvents = { countDate(filterEvents(), index + 1) }
						name = { index + 1 } />)
			}); 

			const startDay = Math.max(new Date(2021, currentMonth, 1).getDay() - 1, 0)
			const dayNull = new Array(startDay).fill(0).map((e, index) => {return( <CalendarDay amountOfEvents = {0} key = {e + index}  />)}); 
			return(dayNull.concat(dayActive))
		}

	const getDays = () => {
		const daysName = ["L", "M", "C", "J", "V", "S", "D"].map((e, index) => {return(<div className = "item no-selectable" key = {e}> {e}</div>)})
		const finalArray = daysName.concat(initDays); // Unirmos Nombre con Días
		return (finalArray)
	}

	/*
		(API) Acceso a los eventos creados.
	*/

	const getData = () => {
		return axios.get('https://ieeeun.com/event')
			.then(res => { 
				setData(res.data); 
				setInitDays(getInitDays()); 
				setCurrentDay(new Date().getDate()); // Dia Actual 
			})
			.catch(e => {
				alert('Error')
			})
	}


	const filterEvents = () => {	
		let events = data.filter(event => {
			
			const dateFormatted = djangoToDate(event.date); 
			console.log(dateFormatted)
			return (dateFormatted.getMonth() ===  currentMonth); 

		})

		// console.log(events); 
		return events; 
	}

	const filterEventsPerDay = () => {	
		const eventsPerMonth = filterEvents(); 
		return eventsPerMonth.filter(event => {
			
			const dateFormatted = djangoToDate(event.date); 
			return (dateFormatted.getDate() ===  currentDay); 

		})
	}
	const getEvents = () => {
		if(data === undefined)
			return (<>None</>)

		// Filter 
		
		// Map 
		const events = filterEventsPerDay().map(event => { 
			const {name, hour} = event; 
			const chapter = event.chapter; 
			return(	
				<div className = "event-container my-4 ml-5 d-flex position-relative"> 
				<div>
					<h1 className = "event-name"> { name }</h1>
					<h4 className = "event-chapter"> { chapter.name }</h4>
					<h4 className = "event-hour"> { formatHour(hour) }</h4>
				</div>
					<span className = "line-event-decorator transition-short"></span>
				</div>
				)
		})
		return ( events)
	}

	const nextMonth = () => {
		setCurrentMonth(currentMonth + 1); 
	}

	const prevMonth = () => {
		setCurrentMonth(currentMonth - 1); 
	}

	// Use effects ----------------------

	/*
		Cambio en el día actual.
	*/
	useEffect(() => {
		setInitDays(getInitDays()); 
	}, [currentDay, currentMonth])

	/*
		Apenas se construye el componente.
	*/
	useEffect(() => {
		getData(); // Buscar data en la API 

		
			}, [])

	return (
		<div className = "mt-5">
		<div className = "row w-75 center m-auto mt-5  calendar-main-container">
			<div className = "col-12 col-lg-4 order-m info-container d-flex flex-column p-5 ">
				<h1 key = { String(currentDay) + String(currentMonth) }> { currentDay } de { numberToMonth(currentMonth) } </h1>
				<h5> { getWeekDay(2021, currentMonth, currentDay) } </h5>
			{/* Eventos del día */}
				<div>
					{ getEvents() }
				</div>
			</div>
			<div className = "col-12 col-lg-8 d-flex px-5 justify-content-center flex-column align-items-center">

				<div className = "month-title m-0 mb-2 "> { numberToMonth(currentMonth) } </div>

				<div className = "calendar ">
					{ getDays() }
				</div>
			</div>
			<div className = "btns-container position-absolute">
				<button onClick = { prevMonth }> Anterior </button>
				<button onClick = { nextMonth }> Siguiente </button>
			</div>
			</div>
		</div> 
		)
}