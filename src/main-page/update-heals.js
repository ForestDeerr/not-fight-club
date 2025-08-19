import { finishBattle } from "./finish-battle.js";

function updateHeals(side, maxHeals, allDamage) {
  const heals = document.querySelectorAll(".heals");
  const healsTitle = document.querySelectorAll(".heals-title");

  const index = side === "user" ? 0 : 1;
  const bar = heals[index];
  const title = healsTitle[index];

  const actualHeals = maxHeals - allDamage;
  const actualHealsPercent = (actualHeals * 100) / maxHeals;

  if (actualHeals <= 0) {
    finishBattle(side);
    bar.style.width = "0%";
    title.textContent = `0/${maxHeals}`;
  } else {
    bar.style.width = `${actualHealsPercent}%`;
    title.textContent = `${Math.round(actualHeals * 10) / 10}/${maxHeals}`;
  }
}

export { updateHeals };
