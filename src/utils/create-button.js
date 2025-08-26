function createButton({
  type,
  text,
  className,
  onClick,
  disabled = false,
  iconSvg,
  iconClass,
}) {
  const button = document.createElement("button");
  button.type = type;
  if (text) {
    button.textContent = text;
  }
  button.className = className;
  button.disabled = disabled;
  if (onClick) button.addEventListener("click", onClick);

  let iconWrapper = null;

  if (iconSvg) {
    iconWrapper = document.createElement("span");
    if (iconClass) iconWrapper.className = iconClass;

    if (
      iconSvg.endsWith(".png") ||
      iconSvg.endsWith(".jpg") ||
      iconSvg.endsWith(".jpeg") ||
      iconSvg.endsWith(".gif")
    ) {
      const img = document.createElement("img");
      img.src = iconSvg;
      iconWrapper.appendChild(img);
    } else {
      iconWrapper.innerHTML = iconSvg.trim();
    }

    button.appendChild(iconWrapper);
  }

  button.setIcon = (newIconSvg) => {
    if (!iconWrapper) {
      iconWrapper = document.createElement("span");
      if (iconClass) iconWrapper.className = iconClass;
      button.appendChild(iconWrapper);
    }
    iconWrapper.innerHTML = newIconSvg.trim();
  };

  return button;
}

export { createButton };
