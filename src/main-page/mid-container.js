import { createButton } from "../utils/create-button.js";
import { fight } from "./fight.js";

const midContainer = document.createElement("div");
midContainer.className = "container-mid";

const startFightBtn = createButton({
  type: "button",
  className: "start-btn",
  text: "Начать Бой",
  onClick: () => {
    fight();
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
