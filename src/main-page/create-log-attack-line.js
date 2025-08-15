function createAttackLine(name, enemy, zone, dmg, defDmg) {
  const user = document.createElement("p");
  user.className = "line-blue";
  user.textContent = name;

  const text = document.createElement("p");
  text.className = "line-text";
  text.textContent = "бъет";

  const enemyTitle = document.createElement("p");
  enemyTitle.className = "line-blue";
  enemyTitle.textContent = enemy;

  const text2 = document.createElement("p");
  text2.className = "line-text";
  text2.textContent = "по";

  const zoneTitle = document.createElement("p");
  zoneTitle.className = "line-blue";
  zoneTitle.textContent = zone;

  const text3 = document.createElement("p");
  text3.className = "line-text";
  text3.textContent = "и наносит";

  const dmgUser = document.createElement("p");
  dmgUser.textContent = dmg;

  const text4 = document.createElement("p");
  text4.className = "line-red";
  text4.textContent = "критического";

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

  const text5 = document.createElement("p");
  text5.className = "line-text";
  text5.textContent = "урона";

  const container = document.createElement("div");
  container.className = "line";

  container.append(
    user,
    text,
    enemyTitle,
    text2,
    zoneTitle,
    text3,
    checkDmg(),
    checkCrit() ? checkCrit() : [],
    text5
  );

  return container;
}

export { createAttackLine };
