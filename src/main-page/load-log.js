import { createAttackLine } from "./create-log-attack-line.js";
import { createDefLine } from "./create-log-def-line.js";
import { getLogContent } from "./log-container.js";

function loadLog() {
  const log = JSON.parse(localStorage.getItem("fightLog")) || [];
  const logContent = getLogContent();

  logContent.replaceChildren();

  log.forEach((entry) => {
    if (entry.type === "attack") {
      logContent.append(
        createAttackLine(
          entry.attacker,
          entry.defender,
          entry.zone,
          entry.dmg,
          entry.crit,
          entry.side
        )
      );
    } else if (entry.type === "defense") {
      logContent.append(
        createDefLine(entry.attacker, entry.defender, entry.zone, entry.side)
      );
    }
  });
}

export { loadLog };
