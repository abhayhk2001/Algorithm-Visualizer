import React, { useState, forwardRef, useImperativeHandle } from 'react'

const RowColInput = forwardRef((props: any, ref) => {
	const [n, setN] = useState('')
	const [disabled, setDisabled] = useState(false)
	const sendData = (e: React.FormEvent) => {
		e.preventDefault()
		props.showAdjucencyMatrix(n)
		setDisabled(true)
	}
	useImperativeHandle(ref, () => ({
		enable() {
			setDisabled(false)
			setN('')
		}
	}))
	return (
		<div className="row-col-form">
			<form onSubmit={sendData}>
				<input
					type="text"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						e.preventDefault();
						setN(e.target.value);
					}}
					pattern="[0-9]{1,}"
					placeholder="Number of nodes"
					className="n-input"
					value={n}
					autoComplete="off"
					disabled={disabled}
					title="Number greater than or equal to 0"
				/>
				<input type="submit" className="form-submit" disabled={disabled} />
			</form>
		</div>
	)
})

export default RowColInput
