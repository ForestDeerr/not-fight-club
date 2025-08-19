function generationFighter(user) {
  const src = user.src;
  const maxHeals = user.healsMax;

  const fighterContainer = document.createElement("div");
  fighterContainer.className = "fighter-container";
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Боец";
  const healsBar = document.createElement("div");
  healsBar.className = "heals-bar";

  const heals = document.createElement("div");
  heals.className = "heals";
  heals.style.width = `${100}%`;

  const healsTitle = document.createElement("p");
  healsTitle.className = "heals-title";
  healsTitle.textContent = `${maxHeals}/${maxHeals}`;
  healsBar.append(heals, healsTitle);

  fighterContainer.append(img, healsBar);
  return fighterContainer;
}

export { generationFighter };
