import { enemies } from "../mock/players.js";
import { getRandomFightPhrase } from "../utils/randomizer.js";
import {
  generationBattleBtn,
  generationBattleZone,
  generationInfoTitle,
} from "./fight-panel.js";
import { createFighterContainer } from "./fighter-container.js";
import { generationLogContainer } from "./log-container.js";
import { getMainContainer } from "./main-page.js";
import { getMidContent } from "./mid-container.js";

function getEnemy() {
  const enemy = JSON.parse(localStorage.getItem("enemy"));
  return enemy;
}

function fight() {
  const loadEnemy = JSON.parse(localStorage.getItem("enemy"));
  let enemy;

  if (loadEnemy) {
    enemy = loadEnemy;
  } else {
    enemy = getRandomFightPhrase(enemies);
    localStorage.setItem("enemy", JSON.stringify(enemy));
  }

  const fighterContainer = createFighterContainer("right", enemy);

  const midContainer = getMidContent();
  const mainContainer = getMainContainer();
  const logContainer = generationLogContainer();

  mainContainer.append(fighterContainer);
  midContainer.replaceChildren();
  midContainer.append(
    generationInfoTitle(),
    generationBattleZone(),
    generationBattleBtn()
  );
  document.body.append(logContainer);
  fighterContainer.classList.add("show");
}

export { fight, getEnemy };
