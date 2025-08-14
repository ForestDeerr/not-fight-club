function checkMove(attack, protection, dmg) {
  let allDamage = 0;
  attack.forEach((attackMove) => {
    if (attackMove.type === "attack") {
      const blocked = protection.some(
        (defenseMove) =>
          defenseMove.type === "defense" && defenseMove.zone === attackMove.zone
      );
      if (!blocked) {
        allDamage += dmg;
      }
    }
  });
  return allDamage;
}

export { checkMove };
