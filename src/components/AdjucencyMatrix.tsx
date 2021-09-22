import React, { useState, useEffect } from 'react'
import _ from "lodash"
import "./static/AdjucencyMatrix.scss"



function AdjucencyMatrix(props: any) {
	var n = props.n
	const [adjMatrix, setAdjMatrix] = useState<any>()
	const zeros = () => {
		var gfg = new Array(10);
		for (var i = 0; i < gfg.length; i++) {
			gfg[i] = new Array(10).fill(0);
		}
		setAdjMatrix(gfg)
	}

	useEffect(() => {
		zeros()
	}, [])

	const storeData = (e: React.FormEvent) => {
		e.preventDefault()
		var temp = adjMatrix
		for (var i = 0; i < temp.length; i++) {
			temp[i] = temp[i].slice(0, n);
		}
		temp = temp.slice(0, n)
		props.handleSubmit(e, temp)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let temp = adjMatrix
		temp[Number(e.target.name[0])][Number(e.target.name[1])] = Number(e.target.value)
		setAdjMatrix(temp)
	}

	const cellInput = (colNum: number, rowNum: number) => {
		return (
			<>
				<input key={"" + rowNum + colNum} onChange={handleChange} name={"" + rowNum + colNum} type="number" className="cell" />
			</>
		)
	}
	const rowInput = (num: number, rowNum: number) => {
		return (
			<div key={rowNum} className={`row${rowNum}`}>
				{
					_.times(num, (i) => (
						cellInput(i, rowNum)
					))
				}
			</div>
		)
	}
	return (
		<div className="adj-form">
			<form onSubmit={storeData}>
				<div className="adj-matrix">
					{
						_.times(props.n, (i) => (
							rowInput(props.n, i)
						))
					}
				</div>
				{(props.n > 0) ? <input type="submit" /> : <></>}
			</form>
		</div>
	)
}

export default AdjucencyMatrix
