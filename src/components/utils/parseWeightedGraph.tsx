interface Node {
	data?: {
		id?: String | number,
		label?: String
	},
	position?: {
		x: number,
		y: number
	}
}

type Edge = {
	data?: {
		source?: String | number
		target?: String | number
		label?: String
		type?: String
	}
}

function parseWeightedGraph(adj: number[][]): Node[] | Edge[] {
	//setting up the nodes
	var elements: Node[] | Edge[] = []
	var n = adj.length;
	var theta = (2 * Math.PI) / n;
	var center_x = 325;
	var center_y = 225;
	var r = 100;
	for (let i = 0; i < n; i++) {
		let obj: Node = {}
		obj.data = {
			id: i + 1,
			label: `${(i + 1).toString()}`
		}
		obj.position = {
			x: center_x + (r * Math.cos(i * theta)),
			y: center_y + (r * Math.sin(i * theta))
		}
		elements.push(obj)
	}
	//connecting the nodes
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (adj[i][j] !== 0 && adj[i][j] !== Number.MAX_SAFE_INTEGER) {
				let obj: Edge = {}
				obj.data = {
					source: i + 1,
					target: j + 1,
					// label: `Edge from ${(i + 1).toString()} to ${(j + 1).toString()}`
					label: `${adj[i][j]}`,
					type: "directed"
				}
				elements.push(obj)
			}
		}
	}
	return elements
}

export default parseWeightedGraph