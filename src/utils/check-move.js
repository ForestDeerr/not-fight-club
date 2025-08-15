import { applyCriticalDamage } from "./critical-damage.js";

function checkMove(attack, protection, dmg, chance, crit) {
  let result = [];

  attack.forEach((attackMove) => {
    if (attackMove.type === "attack") {
      const blocked = protection.some(
        (defenseMove) =>
          defenseMove.type === "defense" && defenseMove.zone === attackMove.zone
      );

      if (blocked) {
        result.push([attackMove.zone, 0]);
      } else {
        result.push([attackMove.zone, applyCriticalDamage(dmg, chance, crit)]);
      }
    }
  });

  return result;
}

export { checkMove };
