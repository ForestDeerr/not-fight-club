import { generationMainPage } from "./main-page/main-page.js";
import { generationRegistrationPage } from "./registration-page/generation-page.js";

const name = localStorage.getItem("fighterName")

if (name) {
generationMainPage(name)
} else {
generationRegistrationPage()
}