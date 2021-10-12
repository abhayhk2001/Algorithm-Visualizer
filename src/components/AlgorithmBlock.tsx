import React, { useState } from 'react'
import './static/AlgorithmBlock.scss'

function AlgorithmBlock(props: any) {
	const [control,] = useState(props.state)
	var warshall = `function warshallalgo(adj: number[][]): number[][][] {
		let R = [];
		let n = adj.length;
		console.log(n);
		R[R.length] = adj;
		for (let k = 0; k < n; k++) {
		  let R1 = JSON.parse(JSON.stringify(R[k]));
		  for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
			  R1[i][j] = R1[i][j] || (R1[i][k] && R1[k][j]);
			}
		  }
		  R[R.length] = R1;
		}
		return R;
	  }`
	var floyd = `function floydalgo(adj: number[][]): number[][][] {
		let R = [];
		let n = adj.length;
		console.log(n);
		R[R.length] = adj;
		for (let k = 0; k < n; k++) {
			let R1 = JSON.parse(JSON.stringify(R[k]));
			for (let i = 0; i < n; i++) {
				for (let j = 0; j < n; j++) {
					R1[i][j] = Math.min(R1[i][j], (R1[i][k] + R1[k][j]));
				}
			}
			R[R.length] = R1;
		}
		return R;
	}`
	return (
		<pre>
			<code>
				{control === 0 ? warshall : floyd}
			</code>
		</pre>
	)
}

export default AlgorithmBlock
