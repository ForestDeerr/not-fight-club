const rulesContainer = document.createElement("div");

function getRulesContainer() {
  return rulesContainer;
}

function createRulesBlock() {
  const rules = [
    "1. Не рассказывать о Бойцовском клубе.",
    "2. Не рассказывать о Бойцовском клубе.",
    '3. Если кто-то сказал "стоп", потерял сознание или не может продолжать — бой окончен.',
    "4. В бою участвуют только двое.",
    "5. Один бой за раз.",
    "6. Бойцы сражаются без обуви и без рубашек.",
    "7. Бой длится столько, сколько потребуется.",
    "8. Если это твой первый вечер в Бойцовском клубе — ты должен драться.",
  ];

  rulesContainer.className = "rules-container";

  let delay = 0;
  rules.forEach((rule) => {
    const p = document.createElement("p");
    p.textContent = rule;
    p.className = "rule-text";
    p.style.animationDelay = `${delay}s`;
    rulesContainer.appendChild(p);
    delay += 2;
  });

  return rulesContainer;
}

export { createRulesBlock, getRulesContainer };
