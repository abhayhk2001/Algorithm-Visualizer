import React, { useState, useRef } from 'react'
import "./static/Warshall.scss"
import AdjMatrixInput from './AdjMatrixInput'
import RowColInput from './RowColInput'
import algo from "./algorithms/warshallAlgo"
import Results from './Results'
import makeUnWeighted from './utils/makeUnWeighted'
import parseGraph from './utils/parseGraph'
import { Link } from "react-router-dom"


function Warshall() {
	const [n, setN] = useState(0)
	const [displayControl, setDisplayControl] = useState(0)
	const [elements, setElements] = useState<any[]>([])
	const [adjSet, setAdjSet] = useState<number[][][]>([[[]]])
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
		var Adj = algo(adj)
		setAdjSet(Adj)
		setElements(parseGraph(Adj[Adj.length - 1]))
		setDisplayControl(2)
	}

	return (
		<div className="warshall">
			<span className="warshall-heading">
				Warshall’s Algorithm
			</span>
			<Link className="view" to='/warshall/algorithm'>(view)</Link>
			<RowColInput ref={enableRef} showAdjucencyMatrix={showAdjucencyMatrix} />
			{displayControl === 0 ? <></> :
				displayControl === 1 ?
					<AdjMatrixInput handleSubmit={handleSubmit} n={n} /> :
					<Results elements={elements} adjSet={adjSet} />
			}
		</div>
	)
}

export default Warshall
