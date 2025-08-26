import { generationRegistrationPage } from "../registration-page/generation-page.js";

function resetGameData() {



  const isConfirmed = confirm("Сотрёшь память боёв — будто тебя никогда не существовало!");

  if (isConfirmed) {
  document.body.replaceChildren();
  localStorage.clear();
  window.location.reload();
  generationRegistrationPage();
  }
}



export { resetGameData };
