import { generationFighter } from "./generation-fighter.js";
import { renderNavigationPanel } from "./navigation-panel.js";

function createFighterContainer(position, user, actualHeals) {
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

  if (position === "left") {
    headBar.append(renderNavigationPanel());
  }

  container.append(headBar, generationFighter(user, actualHeals));
  return container;
}

export { createFighterContainer };
