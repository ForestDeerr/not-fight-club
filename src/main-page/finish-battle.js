import { losePhrases, winPhrases } from "../mock/players.js";
import { getRandomFightPhrase } from "../utils/randomizer.js";
import { getMidContent } from "./mid-container.js";

const titleEndBattle = document.createElement("p");
titleEndBattle.className = "fight-info-title";

function getTitleEndBattle() {
  return titleEndBattle;
}

function finishBattle(side) {
  const startBtn = document.querySelector(".start-btn");
  startBtn.disabled = true;

  const startBattleBtn = document.querySelector(".startBattleBtn");
  startBattleBtn.disabled = false;

  localStorage.setItem("allDamageUser", 0);
  localStorage.setItem("allDamageEnemy", 0);
  localStorage.removeItem("enemy");
  localStorage.removeItem("fightLog");

  const win = getRandomFightPhrase(winPhrases);
  const lose = getRandomFightPhrase(losePhrases);

  if (side === "user") {
    titleEndBattle.textContent = lose;
  } else {
    titleEndBattle.textContent = win;
  }

  const midContainer = getMidContent();
  midContainer.replaceChildren();
  midContainer.append(titleEndBattle);
}

export { finishBattle, getTitleEndBattle };
