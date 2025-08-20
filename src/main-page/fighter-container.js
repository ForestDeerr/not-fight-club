import { generationFighter } from "./generation-fighter.js";
import { renderNavigationPanel } from "./navigation-panel.js";

let fighterNameGlobal = null;

function getFighterName() {
  return fighterNameGlobal;
}

function createFighterContainer(position, user) {
  const name = user.name;
  let container;

  if (position === "left") {
    container = document.createElement("div");
    container.className = "container-left";
  }
  if (position === "right") {
    container = document.createElement("div");
    container.className = "container-right";
  }

  const headBar = document.createElement("div");
  headBar.className = "head-bar";

  const fighterName = document.createElement("p");
  fighterName.textContent = name;
  headBar.append(fighterName);

  fighterNameGlobal = fighterName;

  if (position === "left") {
    headBar.append(renderNavigationPanel());
  }

  container.append(headBar, generationFighter(user));
  return container;
}

export { createFighterContainer, getFighterName };
