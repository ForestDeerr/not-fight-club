import { avatars, avatarsMap, keyMap } from "../mock/players.js";
import { createButton } from "../utils/create-button.js";
import { updateFightLog } from "../utils/update-fight-log.js";
import { getFighterName } from "./fighter-container.js";
import { editIcon, applyIcon } from "./icons.js";

function generationEditUserContainer() {
  const loadUser = JSON.parse(localStorage.getItem("user"));
  let inputActive = false;

  const container = document.createElement("div");
  container.className = "edit-user";

  const editUserName = document.createElement("p");
  editUserName.className = "edit-user-name";

  const editUserNameValue = document.createElement("p");
  editUserNameValue.className = "edit-user-name-value";

  const inputName = document.createElement("input");
  inputName.className = "input-name";
  inputName.type = "text";
  inputName.value = loadUser.name;

  for (let key in loadUser) {
    if (key === "name") {
      const characteristicsUser = document.createElement("div");
      characteristicsUser.className = "characteristics-user";

      const oldName = loadUser[key];
      const editNameUser = createButton({
        type: "button",
        className: "edit-user-btn",
        onClick: () => {
          if (!inputActive) {
            inputActive = true;
            editNameUser.setIcon(applyIcon);
            characteristicsUser.replaceChild(inputName, editUserNameValue);
          } else {
            inputActive = false;
            editNameUser.setIcon(editIcon);
            const fighterName = inputName.value.trim();

            editUserNameValue.textContent = fighterName;
            loadUser.name = fighterName;
            localStorage.setItem("user", JSON.stringify(loadUser));
            getFighterName().textContent = fighterName;

            characteristicsUser.replaceChild(editUserNameValue, inputName);

            updateFightLog(oldName, fighterName);
          }
        },
        iconSvg: editIcon,
        iconClass: "my-icon-class",
      });
      editUserName.textContent = keyMap[key];
      editUserNameValue.textContent = loadUser[key];

      characteristicsUser.append(editUserName, editUserNameValue, editNameUser);
      container.append(characteristicsUser);
    }

    const editUserSrc = document.createElement("p");
    editUserSrc.className = "edit-user-name";

    const select = document.createElement("select");
    select.className = "select-avatar";

    if (key === "src") {
      const characteristicsUser = document.createElement("div");
      characteristicsUser.className = "characteristics-user";
      editUserSrc.textContent = keyMap[key];

      avatars.forEach((avatar) => {
        const option = document.createElement("option");
        option.className = "option-avatar";
        option.value = avatar.src;
        option.textContent = avatarsMap[avatar.face];
        if (loadUser.src === avatar.src) option.selected = true;
        select.appendChild(option);
      });

      const editAvatarUser = createButton({
        type: "button",
        className: "edit-user-btn",
        onClick: () => {
          select.showPicker();
        },
        iconSvg: editIcon,
        iconClass: "my-icon-class",
      });

      select.addEventListener("change", () => {
        const loadUsers = JSON.parse(localStorage.getItem("users"));
        const loadUser = JSON.parse(localStorage.getItem("user"));
        const selectedUser = loadUsers.find((u) => u.src === select.value);
        const unSelectedUser = loadUsers.find((u) => u.src != select.value);
        const enemy = JSON.parse(localStorage.getItem("enemy"));

        unSelectedUser.wins = loadUser.wins;
        unSelectedUser.loses = loadUser.loses;

        loadUser.wins = selectedUser.wins;
        loadUser.loses = selectedUser.loses;

        const avatarUser = document.querySelector(".avatar");
        avatarUser.src = selectedUser.src;
        loadUser.src = selectedUser.src;

        if (enemy) {
          const fightLog = JSON.parse(localStorage.getItem("fightLog"));
          const allDamageUser = Number(localStorage.getItem("allDamageUser"));
          const allDamageEnemy = Number(localStorage.getItem("allDamageEnemy"));

          unSelectedUser.log = fightLog;
          unSelectedUser.enemy = enemy;
          localStorage.removeItem("fightLog");
          unSelectedUser.dmgE = allDamageEnemy;
          unSelectedUser.dmgU = allDamageUser;

          localStorage.setItem("allDamageUser", 0);
          localStorage.setItem("allDamageEnemy", 0);
          localStorage.setItem("users", JSON.stringify(loadUsers));
        }

        if (selectedUser.enemy && Object.keys(selectedUser.enemy).length > 0) {
          localStorage.setItem("fightLog", JSON.stringify(selectedUser.log));
          localStorage.setItem("enemy", JSON.stringify(selectedUser.enemy));
          localStorage.setItem("allDamageUser", selectedUser.dmgU);
          localStorage.setItem("allDamageEnemy", selectedUser.dmgE);
        } else {
          localStorage.removeItem("enemy");
        }

        const editUserHealsMaxValue = container.querySelector(
          ".edit-user-heals-max-value"
        );
        editUserHealsMaxValue.textContent = selectedUser.healsMax;
        loadUser.healsMax = selectedUser.healsMax;

        const editUserDamageValue = container.querySelector(
          ".edit-user-damage-value"
        );
        editUserDamageValue.textContent = selectedUser.damage;
        loadUser.damage = selectedUser.damage;

        const editUserChanceValue = container.querySelector(
          ".edit-user-chance-value"
        );
        editUserChanceValue.textContent = selectedUser.chance;
        loadUser.chance = selectedUser.chance;

        const editUserWinsValue = container.querySelector(
          ".edit-user-wins-value"
        );
        editUserWinsValue.textContent = selectedUser.wins;
        loadUser.wins = selectedUser.wins;

        const editUserLosesValue = container.querySelector(
          ".edit-user-loses-value"
        );
        editUserLosesValue.textContent = selectedUser.loses;
        loadUser.loses = selectedUser.loses;

        const editUserCritValue = container.querySelector(
          ".edit-user-crit-value"
        );
        editUserCritValue.textContent = selectedUser.crit;
        loadUser.crit = selectedUser.crit;

        const heals = document.querySelector(".heals");
        heals.style.width = `${100}%`;

        const healsTitle = document.querySelector(".heals-title");
        healsTitle.textContent = `${selectedUser.healsMax}/${selectedUser.healsMax}`;

        localStorage.setItem("user", JSON.stringify(loadUser));
      });

      characteristicsUser.append(editUserSrc, select, editAvatarUser);
      container.append(characteristicsUser);
    }

    const editUserWins = document.createElement("p");
    editUserWins.className = "edit-user-name";

    const editUserWinsValue = document.createElement("p");
    editUserWinsValue.className = "edit-user-wins-value";

    if (key === "wins") {
      const characteristicsUser = document.createElement("div");
      characteristicsUser.className = "characteristics-user";

      editUserWins.textContent = keyMap[key];
      editUserWinsValue.textContent = loadUser[key];
      characteristicsUser.append(editUserWins, editUserWinsValue);
      container.append(characteristicsUser);
    }

    const editUserLoses = document.createElement("p");
    editUserLoses.className = "edit-user-name";

    const editUserLosesValue = document.createElement("p");
    editUserLosesValue.className = "edit-user-loses-value";

    if (key === "loses") {
      const characteristicsUser = document.createElement("div");
      characteristicsUser.className = "characteristics-user";

      editUserLoses.textContent = keyMap[key];
      editUserLosesValue.textContent = loadUser[key];
      characteristicsUser.append(editUserLoses, editUserLosesValue);
      container.append(characteristicsUser);
    }

    const editUserHealsMax = document.createElement("p");
    editUserHealsMax.className = "edit-user-name";

    const editUserHealsMaxValue = document.createElement("p");
    editUserHealsMaxValue.className = "edit-user-heals-max-value";

    if (key === "healsMax") {
      const characteristicsUser = document.createElement("div");
      characteristicsUser.className = "characteristics-user";

      editUserHealsMax.textContent = keyMap[key];
      editUserHealsMaxValue.textContent = loadUser[key];
      characteristicsUser.append(editUserHealsMax, editUserHealsMaxValue);
      container.append(characteristicsUser);
    }

    const editUserDamage = document.createElement("p");
    editUserDamage.className = "edit-user-name";

    const editUserDamageValue = document.createElement("p");
    editUserDamageValue.className = "edit-user-damage-value";

    if (key === "damage") {
      const characteristicsUser = document.createElement("div");
      characteristicsUser.className = "characteristics-user";

      editUserDamage.textContent = keyMap[key];
      editUserDamageValue.textContent = loadUser[key];
      characteristicsUser.append(editUserDamage, editUserDamageValue);
      container.append(characteristicsUser);
    }

    const editUserChance = document.createElement("p");
    editUserChance.className = "edit-user-name";

    const editUserChanceValue = document.createElement("p");
    editUserChanceValue.className = "edit-user-chance-value";

    if (key === "chance") {
      const characteristicsUser = document.createElement("div");
      characteristicsUser.className = "characteristics-user";

      editUserChance.textContent = keyMap[key];
      editUserChanceValue.textContent = loadUser[key];
      characteristicsUser.append(editUserChance, editUserChanceValue);
      container.append(characteristicsUser);
    }

    const editUserCrit = document.createElement("p");
    editUserCrit.className = "edit-user-name";

    const editUserCritValue = document.createElement("p");
    editUserCritValue.className = "edit-user-crit-value";

    if (key === "crit") {
      const characteristicsUser = document.createElement("div");
      characteristicsUser.className = "characteristics-user";

      editUserCrit.textContent = keyMap[key];
      editUserCritValue.textContent = loadUser[key];
      characteristicsUser.append(editUserCrit, editUserCritValue);
      container.append(characteristicsUser);
    }
  }

  return container;
}

export { generationEditUserContainer };
