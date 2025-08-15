const container = document.createElement("div");
container.className = "container-log";

const content = document.createElement("div");
content.className = "log-content";

const gradient = document.createElement("div");
gradient.className = "gradient-log";

container.append(content, gradient);

function generationLogContainer() {
  return container;
}

function getLogContent() {
  return content;
}

export { generationLogContainer, getLogContent };
