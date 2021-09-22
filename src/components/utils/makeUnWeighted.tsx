const makeUnWeighted = (adj: number[][]) => {
	for (let i = 0; i < adj.length; i++)
		for (let j = 0; j < adj[0].length; j++)
			if (adj[i][j] !== 0)
				adj[i][j] = 1
	return adj
}

export default makeUnWeighted