
import { React }  from 'react'
import 'styles/media.sass'

// logos 
import facebook from 'assets/facebook.svg'
import linkedin from 'assets/linkedin.svg'
import instagram from 'assets/instagram.svg'
import youtube from 'assets/Youtube.svg'

export const Media = () => {
	return (
		<div className = "mb-4 ml-2 media-container container d-flex flex-column"> 
			<a target = "blank_" href="https://www.facebook.com/ieeeunbog"><img src={facebook} alt=""/></a>
			<a href="https://www.linkedin.com/company/rama-estudiantil-ieee-un"><img src={linkedin} alt=""/></a>
			<a href="https://www.youtube.com/channel/UCeTZBxrApbe3yn7-R8ovALA"><img src={youtube} alt=""/></a>
			<a href="https://www.instagram.com/ramaieeeun/"><img src={instagram} alt=""/></a>
			
		</div>
		) 

}