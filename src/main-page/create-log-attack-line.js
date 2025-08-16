function createAttackLine(name, enemy, zone, dmg, defDmg, position) {
  const user = document.createElement("p");
  user.className = "line-blue";
  user.textContent = name;

  const text = document.createElement("p");
  text.className = "line-text";
  text.textContent = " целится в";

  const enemyTitle = document.createElement("p");
  enemyTitle.className = "line-blue";
  enemyTitle.textContent = enemy;

  const text2 = document.createElement("p");
  text2.className = "line-text";
  text2.textContent = "кулак пробивает";

  const zoneTitle = document.createElement("p");
  zoneTitle.className = "line-blue";
  zoneTitle.textContent = zone;

  const text3 = document.createElement("p");
  text3.className = "line-text";
  text3.textContent = "единиц боли.";

  const dmgUser = document.createElement("p");
  dmgUser.textContent = dmg;

  const text4 = document.createElement("p");
  text4.className = "line-red";
  text4.textContent = "критических";

  function checkDmg() {
    if (dmg > defDmg) {
      dmgUser.className = "line-red";
    } else {
      dmgUser.className = "line-black";
    }
    return dmgUser;
  }

  function checkCrit() {
    if (dmg > defDmg) {
      return text4;
    }
    return null;
  }

  const container = document.createElement("div");
  container.className = "line";

  if (position === "right") {
    container.style.justifyContent = "flex-end";
  }

  container.append(
    user,
    text,
    zoneTitle,
    enemyTitle,
    text2,
    checkDmg(),
    checkCrit() ? checkCrit() : [],
    text3
  );

  return container;
}

export { createAttackLine };
