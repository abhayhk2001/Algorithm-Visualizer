import React, { useState, useRef } from 'react'
import "./static/Floyd.scss"
import AdjMatrixInput from './AdjMatrixInput'
import RowColInput from './RowColInput'
import algo from "./algorithms/floydAlgo"
import Results from './Results'
import makeInfinite from './utils/makeInfinite'
import parseWeightedGraph from './utils/parseWeightedGraph'
import { Link } from "react-router-dom"


function Floyd() {
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
		adj = makeInfinite(adj)
		if (enableRef != null)
			if (enableRef.current != null)
				enableRef.current.enable();
		var Adj = algo(adj)
		setAdjSet(Adj)
		setElements(parseWeightedGraph(Adj[Adj.length - 1]))
		setDisplayControl(2)
	}

	return (
		<div className="warshall">
			<span className="warshall-heading">
				Floyds’s Algorithm
			</span>
			<Link className="view" to='/floyd/algorithm'>(view)</Link>
			<RowColInput ref={enableRef} showAdjucencyMatrix={showAdjucencyMatrix} />
			{displayControl === 0 ? <></> :
				displayControl === 1 ?
					<div>
						<AdjMatrixInput handleSubmit={handleSubmit} n={n} />
						Enter 0 if the nodes are not connected by an edge.
					</div> :
					<Results elements={elements} adjSet={adjSet} />
			}
		</div>
	)
}

export default Floyd