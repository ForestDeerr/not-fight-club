import { createButton } from "../utils/create-button.js";
import { fightIcon,settingsIcon, characterIcon } from "./icons.js";

function renderNavigationPanel() {
  const navigationPanel = document.createElement("div");
  navigationPanel.className = "navigation-panel";

  const fightBtn = createButton({
    type: "button",
    className: "btn",
    onClick: () => {
      console.log("клац");
    },
    iconSvg: fightIcon,
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

  const characterBtn = createButton({
    type: "button",
    className: "btn",
    onClick: () => {
      console.log("клац");
    },
    iconSvg: characterIcon,
    iconClass: "my-icon-class",
  });

  navigationPanel.append(fightBtn, characterBtn, settingBtn);

  return navigationPanel;
}

export {renderNavigationPanel}
