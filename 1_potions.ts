// Time complexity: O(n)
function createMagicPotion(potions: number[], target: number) {
  // Maps a potion power to its first appareance
  let table: Map<number, number> = new Map();
  
  for (let i = 0; i < potions.length; i++) {
    const complement = target - potions[i];
    if (table.has(complement)) {
      return [table.get(complement), i];
    }
    if (!table.has(potions[i])) {
      table.set(potions[i], i);
    }
  }

  return undefined;
}
