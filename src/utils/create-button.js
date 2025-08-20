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
    iconWrapper.innerHTML = iconSvg.trim();
    if (iconClass) iconWrapper.className = iconClass;
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
