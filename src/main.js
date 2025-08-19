import { generationMainPage } from "./main-page/main-page.js";
import { generationRegistrationPage } from "./registration-page/generation-page.js";

const loadUser = JSON.parse(localStorage.getItem("user"));

if (loadUser) {
  generationMainPage(loadUser);
} else {
  generationRegistrationPage();
}
