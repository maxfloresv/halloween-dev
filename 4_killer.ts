function findTheKiller(whisper: string, suspects: string[]): string | string[] {
  let index: number = 0;
  let unknownCount: number = 0;
  let searchPattern: string = "^";

  while (index < whisper.length) {
    if (whisper[index] !== "~") {
      searchPattern += whisper[index];
      index++;
      continue;
    }

    while (whisper[index] === "~") {
      unknownCount++;
      index++;
    }

    searchPattern += `[^~]{${unknownCount}}`;
    unknownCount = 0;
  }

  const regex = new RegExp(searchPattern, "i");
  const candidates = suspects.filter((suspect) => regex.test(suspect));

  return candidates.length === 0 ? "" : candidates.join(",");
}
