import React from 'react'
import { Link } from "react-router-dom"
import github_logo from "./resources/github.svg"
import "./static/Navbar.scss"

function Navbar() {
	return (
		<header className="navbar-container">
			<div className="left-align">
				<div className="logo"></div>
				<div className="navigation">
					<Link className="link" to='/'>Home</Link>
					<Link to='/warshall'>Warshall's</Link>
					<Link to='/floyd'>Floyd's</Link>
				</div>
			</div>

			<div className="github-logo">
				<a href="https://github.com/abhayhk2001/Algorithm-Visualizer" target="_blank" rel="noreferrer">
					<img className="navbar-logo " src={github_logo} alt="#" />
				</a>
			</div>
			<a href="https://github.com/abhayhk2001/Algorithm-Visualizer" className="contribute" target="_blank" rel="noreferrer">Contribute</a>
		</header>
	)
}

export default Navbar
