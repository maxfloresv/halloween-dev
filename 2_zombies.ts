function battleHorde(zombies: string, humans: string): string {
  let humanPower: number;
  let zombiePower: number;

  let humanBonus: number = 0;
  let zombieBonus: number = 0;

  const iterations = zombies.length;
  let answer: string = "x";

  for (let i = 0; i < iterations; i++) {
    humanPower = Number(humans[i]) + humanBonus;
    zombiePower = Number(zombies[i]) + zombieBonus;

    if (zombiePower < humanPower) {
      humanBonus = humanPower - zombiePower;
      zombieBonus = 0;
      answer = humanBonus.toString() + "h";
    } else if (zombiePower > humanPower) {
      humanBonus = 0;
      zombieBonus = zombiePower - humanPower;
      answer = zombieBonus.toString() + "z";
    } else {
      humanBonus = zombieBonus = 0;
      answer = "x";
    }
  }

  return answer;
}
