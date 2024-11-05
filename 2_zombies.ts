function battleHorde(zombies: string, humans: string): string {
  // Represents sum(zombiePower) - sum(humanPower)
  let powerDiff: number = 0;
  for (let i = 0; i < zombies.length; i++) {
    powerDiff += Number(zombies[i]) - Number(humans[i]);
  }

  if (powerDiff === 0) {
    return "x";
  } else {
    const absDiff = Math.abs(powerDiff).toString();
    return powerDiff < 0
      ? absDiff + "h"
      : absDiff + "z";
  }
}
