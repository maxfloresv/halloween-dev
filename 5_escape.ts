function escapePyramidHead(room: string[][]): number {
  const n = room.length;
  let visited: number[] = Array(n * n).fill(0);
  let dist: number[] = Array(n * n).fill(Infinity);

  const dirX = [-1, 0, 1, 0];
  const dirY = [0, -1, 0, 1];

  function getPosition(x: number, y: number): number {
    return n * x + y;
  }

  function getCoordinates(position: number): [number, number] {
    const x = Math.floor(position / n);
    const y = position % n;
    return [x, y];
  }

  // Initialize queue as an array with a head pointer
  let queue: number[] = [];
  let queueHead = 0;

  function bfs(sourceX: number, sourceY: number): void {
    const source = getPosition(sourceX, sourceY);
    queue.push(source);
    visited[source] = 1;

    while (queueHead < queue.length) {
      const front = queue[queueHead];
      queueHead++;
      const [x, y] = getCoordinates(front);

      for (let dir = 0; dir < 4; dir++) {
        const newX = x + dirX[dir];
        const newY = y + dirY[dir];

        // The result node is outside the grid
        if (newX < 0 || newX >= n || newY < 0 || newY >= n) {
          continue;
        }

        const neighbor = getPosition(newX, newY);
        dist[neighbor] = Math.min(dist[neighbor], 1 + dist[front]);

        const isVisitable = (x: number, y: number): boolean => {
          return [".", "T"].includes(room[x][y]);
        } 

        if (isVisitable(newX, newY) && !visited[neighbor]) {
          visited[neighbor] = 1;
          queue.push(neighbor);
        }
      }
    }
  }

  // Tracks the target node in the implicit graph
  let target: number | null = null;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (room[i][j] === "▲") {
        // This is the source node
        dist[getPosition(i, j)] = 0;
        bfs(i, j);
      } else if (room[i][j] === "T") {
        target = getPosition(i, j);
      }
    }
  }

  return dist[target] !== Infinity ? dist[target] : -1;
}
