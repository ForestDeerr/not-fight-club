import { keyMap } from "../mock/players.js";
import { createButton } from "../utils/create-button.js";
import { editIcon, applyIcon } from "./icons.js";

function generationEditUserContainer() {
  const loadUser = JSON.parse(localStorage.getItem("user"));
  let inputActive = false;

  const container = document.createElement("div");
  container.className = "edit-user";

  const nameUserTitle = document.createElement("p");
  nameUserTitle.className = "name-user-title";
  nameUserTitle.textContent = "Имя:";

  const nameUser = document.createElement("p");
  nameUser.className = "name-user";
  nameUser.textContent = loadUser.name;

  const inputName = document.createElement("input");
  inputName.className = "input-name";
  inputName.type = "text";
  inputName.value = loadUser.name;

  for (let key in loadUser) {
    const characteristicsUser = document.createElement("div");
    characteristicsUser.className = "characteristics-user";

    const userKey = document.createElement("p");
    userKey.className = "user-key";
    userKey.textContent = `${keyMap[key]}: `;

    const loadUserValues = document.createElement("p");
    loadUserValues.className = "load-user-values";
    loadUserValues.textContent = loadUser[key];

    characteristicsUser.append(userKey, loadUserValues);

    if (key === "name") {
      const editNameUser = createButton({
        type: "button",
        className: "edit-user-btn",
        onClick: () => {
          if (!inputActive) {
            inputActive = true;
            editNameUser.setIcon(applyIcon);
            characteristicsUser.replaceChild(inputName, loadUserValues);
          } else {
            inputActive = false;
            editNameUser.setIcon(editIcon);
            const fighterName = inputName.value.trim();
            loadUserValues.textContent = fighterName;
            characteristicsUser.replaceChild(loadUserValues, inputName);
          }
        },
        iconSvg: editIcon,
        iconClass: "my-icon-class",
      });

      characteristicsUser.append(editNameUser);
    }

    container.append(characteristicsUser);
  }

  return container;
}

export { generationEditUserContainer };
