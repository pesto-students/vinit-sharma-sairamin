//Problem 8.6: All Path from source to target


let v; //for vertices

let adjList;

function Graph(vertices)
{
	// initialise vertex count
		v = vertices;

		// initialise adjacency list
		initAdjList();
}

//initializing adjcency list
function initAdjList()
{
	adjList = new Array(v);

		for (let i = 0; i < v; i++) {
			adjList[i] = [];
		}
}

// add edge from u to v
function addEdge(u,v)
{
	// Add v to u's list.
		adjList[u].push(v);
}

// Prints all paths from 's' to 'd'
function printAllPaths(s,d)
{
	let isVisited = new Array(v);
	for(let i=0;i<v;i++)
		isVisited[i]=false;
		let pathList = [];

		// add source to path[]
		pathList.push(s);

		// Call recursive utility
		printAllPathsUtil(s, d, isVisited, pathList);
}

// A recursive function to print all paths from 'u' to 'd'.
function printAllPathsUtil(u,d,isVisited,localPathList)
{
	if (u == (d)) {
			console.log(localPathList); 
			// no need to traverse more till depth if match found then
			return;
		}

		// Mark the current node
		isVisited[u] = true;

		// Recur for all the vertices
		// adjacent to current vertex
		for (let i=0;i< adjList[u].length;i++) {
			if (!isVisited[adjList[u][i]]) {
				// store current node
				// in path[]
				localPathList.push(adjList[u][i]);
				printAllPathsUtil(adjList[u][i], d,
				isVisited, localPathList);

				// remove current node
				// in path[]
				localPathList.splice(localPathList.indexOf
				(adjList[u][i]),1);
			}
		}

		// Mark the current node
		isVisited[u] = false;
}

// testing the other program
Graph(4);
addEdge(0, 1);
addEdge(0, 2);
addEdge(0, 3);
addEdge(2, 0);
addEdge(2, 1);
addEdge(1, 3);


let s = 2;
let d = 3;

printAllPaths(s, d); // [ 2, 0, 1, 3 ] [ 2, 0, 3 ] [ 2, 1, 3 ]
	
//time complexity is O(N^2)
//space complexity is O(N) 
