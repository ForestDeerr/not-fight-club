function applyCriticalDamage(baseDamage, critChance, critMultiplier) {
  if (Math.random() < critChance) {
    return baseDamage * critMultiplier;
  }
  return baseDamage;
}

export { applyCriticalDamage };
