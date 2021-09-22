import React, { useState, useRef } from 'react'
import "./static/Warshall.scss"
import AdjucencyMatrix from './AdjucencyMatrix'
import RowColInput from './RowColInput'
import algo from "./algorithms/warshallAlgo"
import Results from './Results'
import makeUnWeighted from './utils/makeUnWeighted'



function Warshall() {
	const [n, setN] = useState(0)
	const [displayControl, setDisplayControl] = useState(0)
	const [elements, setElements] = useState([])
	const enableRef = useRef<any>()
	const showAdjucencyMatrix = (n: number) => {
		setN(n)
		setDisplayControl(1)
	}
	const handleSubmit = (e: React.FormEvent, adj: number[][]) => {
		setN(0)
		adj = makeUnWeighted(adj)
		if (enableRef != null)
			if (enableRef.current != null)
				enableRef.current.enable();
		console.log(algo(adj))
		setDisplayControl(2)
	}
	const elements1 = [
		{ data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 300 } },
		{ data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 300 } },
		{ data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
	];
	return (
		<div className="warshall">
			<span className="warshall-heading">
				Warshall’s Algorithm
			</span>
			<button className="view">
				(view)
			</button>
			<RowColInput ref={enableRef} showAdjucencyMatrix={showAdjucencyMatrix} />
			{displayControl === 0 ? <></> :
				displayControl === 1 ?
					<AdjucencyMatrix handleSubmit={handleSubmit} n={n} /> :
					<Results elements={elements1} />
			}
		</div>
	)
}

export default Warshall
