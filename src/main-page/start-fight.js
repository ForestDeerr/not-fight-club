import { getRulesContainer } from "./rules.js";
import { getMainContainer } from "./main-page.js";
import { generationMidContent } from "./mid-container.js";

const midContainer = document.createElement("div");
midContainer.className = "container-mid";

function startFight() {
  const mainContainer = getMainContainer();
  getRulesContainer().remove();
  mainContainer.append(generationMidContent());
}

export { startFight };
