const makeInfinite = (adj: number[][]) => {
	for (let i = 0; i < adj.length; i++)
		for (let j = 0; j < adj[0].length; j++)
			if (adj[i][j] === 0 && i !== j)
				adj[i][j] = Number.MAX_SAFE_INTEGER
	return adj
}

export default makeInfinite