const mainContainer = document.createElement("div");
mainContainer.className = "main-container";

const inputName = document.createElement("input");
inputName.className = "input-name";
inputName.type = "text";
inputName.placeholder = "Введите имя бойца";

const agreeCheckbox = document.createElement("input");
agreeCheckbox.className = "checkbox-input";
agreeCheckbox.type = "checkbox";
agreeCheckbox.id = "agree";

const label = document.createElement("label");
label.className = "checkbox-label";
label.htmlFor = "agree";
label.textContent = "Я принимаю правила Бойцовского клуба";

const checkboxContainer = document.createElement("div");
checkboxContainer.className = "checkbox-container";
checkboxContainer.append(agreeCheckbox, label);

const startBtn = document.createElement("button");
startBtn.className = "start-btn";
startBtn.textContent = "Вступить в Бойцовский клуб";
startBtn.disabled = true;

function startGame() {
    const fighterName = inputName.value.trim();
    inputName.removeEventListener("input", validateForm);
    agreeCheckbox.removeEventListener("change", validateForm);
    startBtn.removeEventListener("click", startGame);
    localStorage.setItem("fighterName", fighterName);
    document.body.innerHTML = "";
}

function validateForm() {
    const name = inputName.value.trim();
    if (name.length <= 3) {
        checkboxContainer.style.opacity = 0;
        startBtn.disabled = true;
        agreeCheckbox.checked = false;
    } else {
        checkboxContainer.style.opacity = 1;
        startBtn.disabled = !agreeCheckbox.checked;
    }
}

inputName.addEventListener("input", validateForm);
agreeCheckbox.addEventListener("change", validateForm);
startBtn.addEventListener("click", startGame);

function generationMainPage() {
    mainContainer.append(inputName, checkboxContainer, startBtn);
    document.body.append(mainContainer);
}

export { generationMainPage };
