import React from 'react'
import "./static/Home.scss"

function Home() {
	return (
		<div className="home">
			<div className="main-heading">
				Graph Algorithm Visualizer and Solver
			</div>
			<div className="description">
				<p className="warshal-desc"><span className="para-heading">Warshall’s Algorithm</span>: Computing the transitive closure of a directed graph using a Dynamic Programming method.</p>

				<p className="floyds-desc"><span className="para-heading">Floyd’s Algorithm:</span> Solves the All Pairs Shortest Path problem of a edge weighted directed Graph using Dynamic Programming.</p>
			</div>
		</div>
	)
}

export default Home
