import { createFighterContainer } from "./fighter-container.js";
import { createRulesBlock } from "./rules.js";

const mainContainer = document.createElement("div");
mainContainer.className = "container";

const rightContainer = document.createElement("div");
rightContainer.className = "container-right";

const midContainer = document.createElement("div");
midContainer.className = "container-mid";

function getMainContainer() {
  return mainContainer;
}

function generationMainPage(user) {
  const fighterContainer = createFighterContainer("left", user);
  mainContainer.append(fighterContainer, createRulesBlock());
  fighterContainer.classList.add("show");
  document.body.append(mainContainer);
}

export { generationMainPage, getMainContainer };
