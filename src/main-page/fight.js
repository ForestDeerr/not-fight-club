import { enemies } from "../mock/players.js";
import { getRandomFightPhrase } from "../utils/randomizer.js";
import {
  generationBattleBtn,
  generationBattleZone,
  generationInfoTitle,
} from "./fight-panel.js";
import { createFighterContainer } from "./fighter-container.js";
import { getMainContainer } from "./main-page.js";
import { getMidContent } from "./mid-container.js";

const enemy = getRandomFightPhrase(enemies);

function getEnemy() {
  return enemy;
}

function fight() {
  const midContainer = getMidContent();
  const mainContainer = getMainContainer();
  const fighterContainer = createFighterContainer(
    "right",
    enemy,
    enemy.healsMax
  );

  mainContainer.append(fighterContainer);
  midContainer.replaceChildren();
  midContainer.append(
    generationInfoTitle(),
    generationBattleZone(),
    generationBattleBtn()
  );
  fighterContainer.classList.add("show");
}

export { fight, getEnemy };
