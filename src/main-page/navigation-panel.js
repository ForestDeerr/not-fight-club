import { createButton } from "../utils/create-button.js";
import { editUser } from "./edit-user.js";
import { fightIcon, settingsIcon, characterIcon } from "./icons.js";
import { startFight } from "./start-fight.js";

function renderNavigationPanel() {
  const navigationPanel = document.createElement("div");
  navigationPanel.className = "navigation-panel";

  const fightBtn = createButton({
    type: "button",
    className: "startBattleBtn",
    onClick: () => {
      fightBtn.disabled = true;
      characterBtn.disabled = false;
      startFight();
    },
    iconSvg: fightIcon,
    iconClass: "my-icon-class",
  });

  const characterBtn = createButton({
    type: "button",
    className: "editUserBtn",
    onClick: () => {
      fightBtn.disabled = false;
      characterBtn.disabled = true;
      editUser();
    },
    iconSvg: characterIcon,
    iconClass: "my-icon-class",
  });

  const settingBtn = createButton({
    type: "button",
    className: "btn",
    onClick: () => {
      console.log("клац");
    },
    iconSvg: settingsIcon,
    iconClass: "my-icon-class",
  });

  navigationPanel.append(fightBtn, characterBtn, settingBtn);

  return navigationPanel;
}

export { renderNavigationPanel };
