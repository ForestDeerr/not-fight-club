import { createButton } from "../utils/create-button.js";
import { fight } from "./fight.js";
import { updateHeals } from "./update-heals.js";

const midContainer = document.createElement("div");
midContainer.className = "container-mid";

const startFightBtn = createButton({
  type: "button",
  className: "start-btn",
  text: "Начать Бой",
  onClick: () => {
    fight();
    const loadUser = JSON.parse(localStorage.getItem("user"));
    const loadEnemy = JSON.parse(localStorage.getItem("enemy"));
    let allDamageUser = Number(localStorage.getItem("allDamageUser"));
    let allDamageEnemy = Number(localStorage.getItem("allDamageEnemy"));

    updateHeals("user", loadUser.healsMax, allDamageUser);
    updateHeals("enemy", loadEnemy.healsMax, allDamageEnemy);
  },
});

function generationMidContent() {
  midContainer.append(startFightBtn);
  return midContainer;
}

function getMidContent() {
  return midContainer;
}

export { generationMidContent, getMidContent };
