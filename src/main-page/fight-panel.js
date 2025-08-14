import { fightPhrases, zonesList } from "../mock/players.js";
import { createButton } from "../utils/create-button.js";
import { getRandomFightPhrase } from "../utils/randomizer.js";
import { battle } from "./batle.js";

const infoTitle = document.createElement("p");
infoTitle.className = "fight-info-title";
infoTitle.textContent = getRandomFightPhrase(fightPhrases);

function generationInfoTitle() {
  return infoTitle;
}

function createAttackZones(zones) {
  const container = document.createElement("div");
  container.className = "attack-zones";

  const title = document.createElement("h3");
  title.textContent = "Attack Zones";
  container.appendChild(title);

  zones.forEach((zone) => {
    const label = document.createElement("label");

    const checkbox = document.createElement("input");
    checkbox.className = "checkbox-input";
    checkbox.type = "checkbox";
    checkbox.name = "defense-zone";
    checkbox.value = zone;

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(zone));

    container.appendChild(label);
  });

  // Логика ограничения до 2-х чекбоксов
  container.addEventListener("change", () => {
    const checked = container.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    if (checked.length > 1) {
      checked[1].checked = false; // снимаем 3-й выбор
    }
  });

  return container;
}

function createDefenseZones(zones) {
  const container = document.createElement("div");
  container.className = "defense-zones";

  const title = document.createElement("h3");
  title.textContent = "Defense Zones";
  container.appendChild(title);

  zones.forEach((zone) => {
    const label = document.createElement("label");

    const checkbox = document.createElement("input");
    checkbox.className = "checkbox-input";
    checkbox.type = "checkbox";
    checkbox.name = "defense-zone";
    checkbox.value = zone;

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(zone));

    container.appendChild(label);
  });

  // Логика ограничения до 2-х чекбоксов
  container.addEventListener("change", () => {
    const checked = container.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    if (checked.length > 2) {
      checked[2].checked = false; // снимаем 3-й выбор
    }
  });

  return container;
}

function generationBattleZone() {
  const container = document.createElement("div");
  container.className = "zone-container";
  container.append(createAttackZones(zonesList), createDefenseZones(zonesList));

  return container;
}

function generationBattleBtn() {
  const fightBtn = createButton({
    type: "button",
    className: "start-btn",
    text: "ударить",
    onClick: () => {
      battle();
    },
  });

  return fightBtn;
}

export { generationInfoTitle, generationBattleZone, generationBattleBtn };
