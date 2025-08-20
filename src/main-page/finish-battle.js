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

  const loadUser = JSON.parse(localStorage.getItem("user"));

  localStorage.setItem("allDamageUser", 0);
  localStorage.setItem("allDamageEnemy", 0);
  localStorage.removeItem("enemy");
  localStorage.removeItem("fightLog");

  const win = getRandomFightPhrase(winPhrases);
  const lose = getRandomFightPhrase(losePhrases);

  if (side === "user") {
    titleEndBattle.textContent = lose;
    loadUser.loses = loadUser.loses + 1;
    localStorage.setItem("user", JSON.stringify(loadUser));
  } else {
    titleEndBattle.textContent = win;
    loadUser.wins = loadUser.wins + 1;
    localStorage.setItem("user", JSON.stringify(loadUser));
  }

  const midContainer = getMidContent();
  midContainer.replaceChildren();
  midContainer.append(titleEndBattle);
}

export { finishBattle, getTitleEndBattle };
