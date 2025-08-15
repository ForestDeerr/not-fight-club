import { user } from "../mock/players.js";
import { checkMove } from "../utils/check-move.js";
import { generateRandomMoves } from "../utils/random-moves.js";
import { createAttackLine } from "./create-log-attack-line.js";
import { createDefLine } from "./create-log-def-line.js";
import { getEnemy } from "./fight.js";
import { generationLogContainer, getLogContent } from "./log-container.js";

let allDamageUser = 0;
let allDamageEnemy = 0;

function battle() {
  const enemy = getEnemy();

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

  resultUser.forEach((hit) => {
    allDamageEnemy += hit[1];
    if (hit[1] != 0) {
      getLogContent().prepend(
        createAttackLine(user.name, enemy.name, hit[0], hit[1], userDmg)
      );
    } else {
      getLogContent().prepend(createDefLine(user.name, enemy.name, hit[0]));
    }
  });

  resultEnemy.forEach((hit) => {
    allDamageUser += hit[1];
  });

  const heals = document.querySelectorAll(".heals");
  const healsTitle = document.querySelectorAll(".heals-title");

  const healsUser = heals[0];
  const titleUser = healsTitle[0];
  const actualHealsUser = maxHealsUser - allDamageUser;
  const actualHealsUserPercent = (actualHealsUser * 100) / maxHealsUser;

  const healsEnemy = heals[1];
  const titleEnemy = healsTitle[1];
  const actualHealsEnemy = maxHealsEnemy - allDamageEnemy;
  const actualHealsEnemyPercent = (actualHealsEnemy * 100) / maxHealsEnemy;

  healsUser.style.width = `${actualHealsUserPercent}%`;
  titleUser.textContent = `${actualHealsUser}/${maxHealsUser}`;

  healsEnemy.style.width = `${actualHealsEnemyPercent}%`;
  titleEnemy.textContent = `${actualHealsEnemy}/${maxHealsEnemy}`;

  console.log(actualHealsEnemy);
}

export { battle };
