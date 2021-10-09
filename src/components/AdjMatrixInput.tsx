import React, { useState, useEffect } from 'react'
import _ from "lodash"
import "./static/AdjMatrixInput.scss"



function AdjMatrixInput(props: any) {
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
				<input key={`${rowNum.toString()}${colNum.toString()}`} onChange={handleChange} name={"" + rowNum + colNum} type="number" className="cell" style={{
					marginRight: '1.25vw',
					width: "clamp(2em, 5vw, 10em)"
				}}
				/>
			</>
		)
	}
	const rowInput = (num: number, rowNum: number) => {
		return (
			<div key={`${rowNum.toString()}`} className={`row${rowNum}`}
				style={
					{ padding: '1vh 0' }
				}>
				{
					_.times(num, (i) => (
						cellInput(i, rowNum)
					))
				}
			</div>
		)
	}
	return (
		<div key={"adj-form"} className="adj-form">
			<form key={"form"} onSubmit={storeData}>
				<div key={"Matrix"} className="adj-matrix">
					{
						_.times(props.n, (i) => (
							rowInput(props.n, i)
						))
					}
				</div>
				{(props.n > 0) ? <input className="adj-form-submit" key={"submit-button"} type="submit" /> : <></>}
			</form>
		</div>
	)
}

export default AdjMatrixInput
