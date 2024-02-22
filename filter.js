const number = [1, 2, 4, 5, 1, 472, 5, 1, 5, 2, 5];
const player = [75, 65, 67, 75, 72, 55, 59];
const selected = player.filter((p) => p > 70);
const selected2 = player.filter((p) => p % 2 == 1);
console.log(selected);
console.log(selected2);

const friends = ["Shawon", "Srabon", "Siyam", "Sumi", "Sopon"];
const result = friends.filter((l) => l.length > 4);
console.log(result)