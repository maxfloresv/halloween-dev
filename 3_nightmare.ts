// Time complexity: O(n * m), space complexity: O(m)
function findSafestPath(dream: number[][]): number {
  const rows = dream.length;
  const cols = dream[0].length;

  let currRow: number[] = new Array(cols).fill(Infinity);

  // The first row is a base case: we can't get to those cells moving down
  currRow[0] = dream[0][0];
  for (let j = 1; j < cols; j++) {
    currRow[j] = dream[0][j] + currRow[j - 1];
  }

  for (let i = 1; i < rows; i++) {
    // Border cells can only be reached moving down from previous row
    currRow[0] += dream[i][0];
    for (let j = 1; j < cols; j++) {
      // This value doesn't change yet because of the invariant
      const topCell = currRow[j];
      // This is already updated for the current row
      const leftCell = currRow[j - 1];
      // Check the best way to reach the current cell: moving down or right
      currRow[j] = dream[i][j] + Math.min(topCell, leftCell);
    }
  }

  return currRow[cols - 1];
}
