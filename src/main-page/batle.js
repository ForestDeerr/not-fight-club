import { checkMove } from "../utils/check-move.js";
import { generateRandomMoves } from "../utils/random-moves.js";
import { createAttackLine } from "./create-log-attack-line.js";
import { createDefLine } from "./create-log-def-line.js";
import { getEnemy } from "./fight.js";
import { getLogContent } from "./log-container.js";
import { updateHeals } from "./update-heals.js";

function battle() {
  let allDamageUser = Number(localStorage.getItem("allDamageUser"));
  let allDamageEnemy = Number(localStorage.getItem("allDamageEnemy"));
  const enemy = getEnemy();
  const user = JSON.parse(localStorage.getItem("user"));
  let maxHealsUser = user.healsMax;
  let maxHealsEnemy = enemy.healsMax;
  const enemyDmg = enemy.damage;
  const userDmg = user.damage;

  const enemyMove = generateRandomMoves(enemy.attack, enemy.defense);

  const attackZones = document.querySelectorAll(
    '.attack-zones input[type="checkbox"]:checked'
  );
  const defenseZones = document.querySelectorAll(
    '.defense-zones input[type="checkbox"]:checked'
  );

  const userMove = [
    ...Array.from(attackZones).map((checkbox) => ({
      type: "attack",
      zone: checkbox.value,
    })),
    ...Array.from(defenseZones).map((checkbox) => ({
      type: "defense",
      zone: checkbox.value,
    })),
  ];

  const resultUser = checkMove(
    userMove,
    enemyMove,
    userDmg,
    user.chance,
    user.crit
  );
  const resultEnemy = checkMove(
    enemyMove,
    userMove,
    enemyDmg,
    enemy.chance,
    enemy.crit
  );

  function saveLogEntry(entry) {
    const log = JSON.parse(localStorage.getItem("fightLog")) || [];
    log.unshift(entry);
    localStorage.setItem("fightLog", JSON.stringify(log));
  }

  resultUser.forEach((hit) => {
    localStorage.setItem("allDamageEnemy", (allDamageEnemy += hit[1]));

    if (hit[1] != 0) {
      const entry = {
        type: "attack",
        attacker: user.name,
        defender: enemy.name,
        zone: hit[0],
        dmg: hit[1],
        crit: userDmg,
        side: "left",
      };
      saveLogEntry(entry);
      getLogContent().prepend(
        createAttackLine(
          entry.attacker,
          entry.defender,
          entry.zone,
          entry.dmg,
          entry.crit
        )
      );
    } else {
      const entry = {
        type: "defense",
        attacker: user.name,
        defender: enemy.name,
        zone: hit[0],
        side: "left",
      };
      saveLogEntry(entry);
      getLogContent().prepend(
        createDefLine(entry.attacker, entry.defender, entry.zone, entry.side)
      );
    }
  });

  resultEnemy.forEach((hit) => {
    localStorage.setItem("allDamageUser", (allDamageUser += hit[1]));

    if (hit[1] != 0) {
      const entry = {
        type: "attack",
        attacker: enemy.name,
        defender: user.name,
        zone: hit[0],
        dmg: hit[1],
        crit: enemyDmg,
        side: "right",
      };
      saveLogEntry(entry);
      getLogContent().prepend(
        createAttackLine(
          entry.attacker,
          entry.defender,
          entry.zone,
          entry.dmg,
          entry.crit,
          entry.side
        )
      );
    } else {
      const entry = {
        type: "defense",
        attacker: enemy.name,
        defender: user.name,
        zone: hit[0],
        side: "right",
      };
      saveLogEntry(entry);
      getLogContent().prepend(
        createDefLine(entry.attacker, entry.defender, entry.zone, entry.side)
      );
    }
  });

  updateHeals("user", maxHealsUser, allDamageUser);
  updateHeals("enemy", maxHealsEnemy, allDamageEnemy);
}

export { battle };
