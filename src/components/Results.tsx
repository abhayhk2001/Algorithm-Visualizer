import React from 'react'
import AdjMatrixOutput from './AdjMatrixOutput';
import CytoscapeComponent from 'react-cytoscapejs';
import "./static/Results.scss"

function Results(props: any) {
	return (
		<>
			<div className="results">
				<span className="results-heading">Transitive Closure in Graphical form</span>
				<CytoscapeComponent elements={props.elements} zoomingEnabled={false} className="graph" stylesheet={[
					{
						selector: 'node',
						style: {
							'label': 'data(label)',
							"text-valign": "center",
							"text-halign": "center",
							"background-color": "rgba(132, 94, 194, 0.9)",
							"color": "white"
						}
					},
					{
						selector: 'edge[type="undirected"]',
						style: {
							'width': 2,
							'line-color': 'rgb(0,0,0)',
							'curve-style': 'bezier',
							'label': 'data(label)',
							opacity: 0.5
						}
					},
					{
						selector: 'edge[type="directed"]',
						style: {
							'width': 2,
							'line-color': 'rgba(0,0,0,0.25)',
							'target-arrow-color': 'rgba(0,0,0,0.25)',
							'target-arrow-shape': 'triangle',
							'curve-style': 'bezier',
							'label': 'data(label)',
							opacity: 0.5
						}
					}
				]} />
				<span className="results-heading">Transitive Closure in Adjacency Matrix form</span>
				<AdjMatrixOutput adj={props.adjSet[(props.adjSet.length - 1)]} />
			</div>
		</>
	)
}

export default Results
