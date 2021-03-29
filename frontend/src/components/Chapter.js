// Chapter js 
import { React, useState, useEffect } from 'react'; 
import 'styles/Chapter.sass'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import facebook from 'assets/facebook.svg'; 


import { getChapterList } from './utils/chaptersDB'; 
import Queue from './utils/Queue'; 
import initial from 'assets/chapters/AESS.png'; 

export const  Chapter = ({ changeColor }) => {

	const chaptersList = getChapterList();  // Objetc Chapter

	const [queue, _] = useState(new Queue(chaptersList)); 

	const [N, setN_] = useState(chaptersList.length); 
	const [n, setN] = useState(0); 
	const [img, setImg] = useState(''); 

	const [currentChapter, setCurrentChapter]  = useState(queue.current());  
	const [image, setImage] = useState(initial); 
	const [inactiveImage, setInactiveImage] = useState(false); 


	useEffect(() => {
		
	}, [])

	const updateImage = () => {
		import(`assets/chapters/${queue.current().name}.png`).then( image => 
			{ 
				setImage( image.default);
				setInactiveImage(false); 

			}
			).catch((e) => {
				alert('Failed'); 
			})
		
	}

	/*
		next 
		Se invoca con el click de Siguiente. Se encarga 
		de cambiar al siguiente cápitulo en el carrusel. 
	*/ 
	const next = () => {
		setInactiveImage(true); 
		setCurrentChapter(queue.next()); 
		updateImage();
		changeColor(queue.current().colorId); 

	}

	/*
		Prev 
		Se invoca con el click de Anterior. Se encarga 
		de cambiar al anterior cápitulo en el carrusel. 
	*/ 
	const prev = () => {
		setCurrentChapter(queue.prev()); 
		updateImage();
		changeColor(queue.current().colorId); 
	}

	return (
		<>			
			<div className = "d-flex"> 
				<div className = "chapter-container col-12 col-lg-5 w-100-sm px-4 py-3">
					<Row className = "p-absolute top-title py-3 ml-5 mt-3 justify-content-between">
						<Col>Capitulos</Col>
						<Col className = "d-flex flex-column justify-content-center">
							face
						</Col>
					</Row> 

					<div className = "chapter-info mt-2" key = { currentChapter.name}> 
						<h1>  {currentChapter.name} </h1>
						<h2>  {currentChapter.nameLong} </h2>
						<p> {currentChapter.info} </p> 
					</div>
					<div className = "btn-movement px-5">
						<div className = "d-flex ml-4 btn-container">
							<button onClick = { prev }> Anterior </button>
							<button onClick = { next } className = "ml-3">Siguiente</button>
						</div>
					</div>
				</div>
			{ inactiveImage || <img className = "chapter-img d-none d-lg-block" src= { image } alt="" key = { currentChapter.name}/> }	
			</div>
				{/* Imagen */}
			
		</>
		)

	}