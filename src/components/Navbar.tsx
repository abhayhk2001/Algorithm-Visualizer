import React from 'react'
import { Link } from "react-router-dom"
import github_logo from "./resources/github.svg"
import "./static/Navbar.scss"

function Navbar() {
	return (
		<div className="navbar-container">
			<div className="logo"></div>
			<div className="navigation">
				<Link className="link" to='/'>Home</Link>
				<Link to='/floyd'>Floyd's</Link>
				<Link to='/warshall'>Warshall's</Link>
			</div>
			<div className="github-logo">
				<a href="https://github.com/abhayhk2001/Algorithm-Visualizer">
					<img src={github_logo} alt="#" />
				</a>
			</div>
			<a href="https://github.com/abhayhk2001/Algorithm-Visualizer" className="contribute">Contribute</a>
		</div>
	)
}

export default Navbar
