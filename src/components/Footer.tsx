import React from 'react'
import "./static/Footer.scss"
import github_footer from "./resources/github_footer.svg"
import medium from "./resources/medium.svg"
import linkedin from "./resources/linkedin.svg"

function Footer() {
	return (
		<div className="footer">
			<div className="footer-left-align">
				<div className="name">
					Project By: Abhay H Kashyap
				</div>
			</div>
			<div className="contact">
				<div>
					<a href="https://github.com/abhayhk2001" target="_blank" rel="noreferrer">
						<img className="footer-logo" src={github_footer} alt="#" />
					</a>
				</div>
				<div>
					<a href="https://medium.com/@abhayhkashyap01" target="_blank" rel="noreferrer">
						<img className="footer-logo" src={medium} alt="#" />
					</a>
				</div>
				<div>
					<a href="https://www.linkedin.com/in/abhay-h-kashyap/" target="_blank" rel="noreferrer">
						<img className="footer-logo" src={linkedin} alt="#" />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
