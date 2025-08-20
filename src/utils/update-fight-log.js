function updateFightLog(oldName, newName) {
  const fightLog = JSON.parse(localStorage.getItem("fightLog")) || [];

  const updatedLog = fightLog.map((entry) => {
    const newEntry = { ...entry };

    if (newEntry.attacker === oldName) {
      newEntry.attacker = newName;
    }
    if (newEntry.defender === oldName) {
      newEntry.defender = newName;
    }

    return newEntry;
  });

  localStorage.setItem("fightLog", JSON.stringify(updatedLog));
}

export { updateFightLog };
