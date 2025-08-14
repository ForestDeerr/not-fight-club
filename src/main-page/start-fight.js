import { getRulesContainer } from "./rules.js";
import { getMainContainer } from "./main-page.js";
import { generationMidContent } from "./mid-container.js";

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
}

export { startFight };
