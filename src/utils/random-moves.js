import { zonesList } from "../mock/players.js";

function generateRandomMoves(attackCount, defenseCount) {

  function getRandomZones(zones, count) {
    const copy = [...zones];
    const result = [];
    for (let i = 0; i < count && copy.length > 0; i++) {
      const index = Math.floor(Math.random() * copy.length);
      result.push(copy.splice(index, 1)[0]);
    }
    return result;
  }

  const attacks = getRandomZones(zonesList, attackCount).map((zone) => ({
    type: "attack",
    zone,
  }));

  const defenses = getRandomZones(zonesList, defenseCount).map((zone) => ({
    type: "defense",
    zone,
  }));

  return [...attacks, ...defenses];
}

export { generateRandomMoves };
