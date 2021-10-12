function floydalgo(adj: number[][]): number[][][] {
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
}

export default floydalgo;
