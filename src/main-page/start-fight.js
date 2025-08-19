import { getRulesContainer } from "./rules.js";
import { getMainContainer } from "./main-page.js";
import { generationMidContent } from "./mid-container.js";
import { getTitleEndBattle } from "./finish-battle.js";
import { getLogContent } from "./log-container.js";
import { enemies } from "../mock/players.js";
import { getRandomFightPhrase } from "../utils/randomizer.js";

const midContainer = document.createElement("div");
midContainer.className = "container-mid";

function startFight() {
  const mainContainer = getMainContainer();
  const midContainer = generationMidContent();

  getRulesContainer().remove();
  mainContainer.append(midContainer);

  requestAnimationFrame(() => {
    midContainer.classList.add("show");
  });

  const getFighterContainer = document.querySelector(".container-right");
  if (getFighterContainer) {
    getFighterContainer.remove();
  }

  getTitleEndBattle().remove();
  getLogContent().replaceChildren();

  const loadEnemy = JSON.parse(localStorage.getItem("enemy"));
  if (!loadEnemy) {
    let enemy = getRandomFightPhrase(enemies);
    localStorage.setItem("enemy", JSON.stringify(enemy));
  }
}

export { startFight };
