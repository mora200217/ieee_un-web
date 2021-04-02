// Form 
import { React, useEffect, useState} from 'react'; 

import 'styles/Form.sass'; 

import axios from 'axios'; 

export const Form = () => {
	const [info, setInfo] = useState(); 




	return (
	<div className = "d-flex flex-column center px-4 px-md-0">
		<h1 className = "container form-title my-5"> Contáctanos </h1>
		<form className = " container register-form " action="">
			<div className = "row my-2">
				<input className = "form-control col" type="text" id="name" name="fname" placeholder = "Nombre completo" required/><br/>
				</div>
			<div className = "row my-2">
	  			<input className = "form-control col-12 col-md my-2 mr-md-1 my-md-2" type="mail" id="email" name="fname" placeholder = "Correo Institucional" required /><br/>
	  			<input className = "form-control col-12 col-md my-2 ml-md-1 my-md-2" type="text" id="carreer" name="fname" placeholder = "Carrera" required /><br/>
  			</div>
  				
  			<div className = "row my-2">
	  			<select class="custom-select" id="validationCustom04" required>
	        		<option selected disabled value="">Capitulo...</option>
	        		<option>AESS</option>
	        		<option>RAS</option>
	        		<option>EMC</option>
	        		<option>EMB</option>
	        		<option>TEMS</option>
	        		<option>SIGHT</option>
	        		<option>EDS</option>
	        		<option>COMPUTER</option>
	        		
	      		</select>
			</div>
			<div className = "row my-4 h-25">
      			<textarea className = "form-control col text-area" type="textarea" id="name" name="fname" placeholder = "Mensaje" required /><br/>
      		</div>

      		 <button class="btn my-3 " type="submit">Enviar</button>
		</form>
	</div> 
		)

}