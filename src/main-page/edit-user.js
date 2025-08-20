import { generationEditUserContainer } from "./generation-edit-user-container.js";
import { getLogContent } from "./log-container.js";
import { getMainContainer } from "./main-page.js";
import { getMidContent } from "./mid-container.js";
import { getRulesContainer } from "./rules.js";

function editUser() {
  const midContainer = getMidContent();
  midContainer.replaceChildren();

  const logContainer = getLogContent();
  logContainer.replaceChildren();

  const rulesContainer = getRulesContainer();
  rulesContainer.remove();

  const fighterContainer = document.querySelector(".container-right");
  if (fighterContainer) {
    fighterContainer.remove();
  }

  const editUser = generationEditUserContainer();
  midContainer.append(editUser);

  const mainContainer = getMainContainer();

  mainContainer.append(midContainer);

  requestAnimationFrame(() => {
    midContainer.classList.add("show");
  });
}

export { editUser };
