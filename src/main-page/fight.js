import { enemy } from "../mock/players.js";
import {
  generationBattleBtn,
  generationBattleZone,
  generationInfoTitle,
} from "./fight-panel.js";
import { createFighterContainer } from "./fighter-container.js";
import { getMainContainer } from "./main-page.js";
import { getMidContent } from "./mid-container.js";

function fight() {
  const midContainer = getMidContent();
  const mainContainer = getMainContainer();

  mainContainer.append(createFighterContainer("right", enemy, enemy.healsMax));
  midContainer.replaceChildren();
  midContainer.append(
    generationInfoTitle(),
    generationBattleZone(),
    generationBattleBtn()
  );
}

export { fight };
