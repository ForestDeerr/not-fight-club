import { user } from "../mock/players.js";
import { getEnemy } from "./fight.js";

let allDamageUser = 0;
let allDamageEnemy = 0;

function battle() {
  const enemy = getEnemy();

  let maxHealsUser = user.healsMax;
  let maxHealsEnemy = enemy.healsMax;
  const enemyDmg = enemy.damage;
  const userDmg = user.damage;

  allDamageUser = allDamageUser + enemyDmg;
  allDamageEnemy = allDamageEnemy + userDmg;

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

  const attackZones = document.querySelectorAll(
    '.attack-zones input[type="checkbox"]:checked'
  );
  const defenseZones = document.querySelectorAll(
    '.defense-zones input[type="checkbox"]:checked'
  );

  console.log(Array.from(attackZones).map((checkbox) => checkbox.value));

  healsUser.style.width = `${actualHealsUserPercent}%`;
  titleUser.textContent = `${actualHealsUser}/${maxHealsUser}`;

  healsEnemy.style.width = `${actualHealsEnemyPercent}%`;
  titleEnemy.textContent = `${actualHealsEnemy}/${maxHealsEnemy}`;

  console.log(actualHealsEnemy);
}

export { battle };
