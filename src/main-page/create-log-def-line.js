function createDefLine(name, enemy, zone, position) {
  const container = document.createElement("div");
  container.className = "line";

  if (position === "right") {
    container.style.justifyContent = "flex-end";
  }

  const name1 = document.createElement("p");
  name1.className = "line-blue";
  name1.textContent = name;

  const text1 = document.createElement("p");
  text1.className = "line-text";
  text1.textContent = "рванул к";

  const zone1 = document.createElement("p");
  zone1.className = "line-blue";
  zone1.textContent = zone;

  const text2 = document.createElement("p");
  text2.className = "line-text";
  text2.textContent = ", но";

  const enemy1 = document.createElement("p");
  enemy1.className = "line-blue";
  enemy1.textContent = enemy;

  const text3 = document.createElement("p");
  text3.className = "line-text";
  text3.textContent = "встал, как стена из мышц и злости";

  container.append(name1, text1, zone1, text2, enemy1, text3);

  return container;
}

export { createDefLine };
