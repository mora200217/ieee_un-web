// Chapter js 
import { React, useState, useEffect } from 'react'; 
import 'styles/Chapter.sass'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import facebook from 'assets/facebook.svg'; 
import aess from 'assets/aess.png'; 

import { getChapterList } from './utils/chaptersDB'; 

export const  Chapter = ({ changeColor }) => {

	const chaptersList = getChapterList(); 
	
	

	const [N, setN_] = useState(chaptersList.length); 
	const [n, setN] = useState(0); 
	const [img, setImg] = useState(''); 

	let firstChapterName = chaptersList !== undefined ? chaptersList[0].name: '[Capítulo]'
	let firstChapterSubtitle = chaptersList !== undefined ? chaptersList[0].nameLong: '[Capítulo]'
	let firstChapterDescription = chaptersList !== undefined ? chaptersList[0].description: '[Capítulo]'

	const [title, setTitle] = useState(firstChapterName); 
	const [subtitle, setSubtitle] = useState(firstChapterSubtitle)
	const [description, setDescription] = useState(firstChapterDescription)


	/*
		next 
		Se invoca con el click de Siguiente. Se encarga 
		de cambiar al siguiente cápitulo en el carrusel. 
	*/ 
	const next = () => {
		changeColor(); 
		let i = (n + 1)% N; 
		setN(i); 
		setTitle(chaptersList[i].name); 
		setSubtitle(chaptersList[i].nameLong); 
		setDescription(chaptersList[i].description); 
	}

	/*
		Prev 
		Se invoca con el click de Anterior. Se encarga 
		de cambiar al anterior cápitulo en el carrusel. 
	*/ 
	const prev = () => {
		let i = (n - 1) % N < 0 ? N - 1 : (n - 1) % N;  
		setN(i); 
		
		setTitle(chaptersList[i].name); 
		setSubtitle(chaptersList[i].nameLong); 
		setDescription(chaptersList[i].description); 
	}


	return (
		<>			
			<div className = "d-flex flex-column"> 
				<div className = "chapter-container px-4 py-3">
					<Row className = "p-absolute top-title py-3 ml-5 mt-3 justify-content-between">
						<Col>Capitulos</Col>
						<Col className = "d-flex flex-colum justify-content-center">
							face
						</Col>
					</Row> 

					<div className = "chapter-info mt-2"> 
						<h1>  {title} </h1>
						<h2>  {subtitle} </h2>
						<p> {description} </p> 
					</div>
					<div className = "btn-movement px-5">
						<div className = "d-flex ml-4 btn-container">
							<button onClick = { prev }> Anterior </button>
							<button onClick = { next } className = "ml-3">Siguiente</button>
						</div>
					</div>
				</div>
				
			</div>

			<img className = "chapter-img" src={ aess } alt=""/>
		</>
		)

	}