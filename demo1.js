const MOVE_BY = 100;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function movePicture(direction) {
  const picture = document.getElementById("picture1");

  const container = document.querySelector(".demo1-picture-container");
  if (!picture || !container) return;

  const maxLeft = container.clientWidth - picture.offsetWidth;
  const maxTop = container.clientHeight - picture.offsetHeight;

  let left = picture.offsetLeft;
  let top = picture.offsetTop;

  switch (direction) {
    case "left":
      left -= MOVE_BY;
      break;
    case "right":
      left += MOVE_BY;
      break;
    case "up":
      top -= MOVE_BY;
      break;
    case "down":
      top += MOVE_BY;
      break;
    default:
      return;
  }

  picture.style.left = clamp(left, 0, maxLeft) + "px";
  picture.style.top = clamp(top, 0, maxTop) + "px";

  updatePictureStats();
}

function changeBackgroundColor(color) {
  const container = document.querySelector(".demo1-picture-container");

  if (!container) return;

  container.style.backgroundColor = color;
}

function changePictureOpacity(value) {
  const picture = document.getElementById("picture1");

  if (!picture) return;

  picture.style.opacity = value / 100;
}

function changePictureDisplay(value) {
  const picture = document.getElementById("picture1");

  if (!picture) return;

  picture.style.display = value;

  updatePictureStats();
}

function updatePictureStats() {
  const picture = document.getElementById("picture1");
  const left = document.getElementById("picture-left");
  const right = document.getElementById("picture-right");
  const top = document.getElementById("picture-top");
  const bottom = document.getElementById("picture-bottom");
  if (!picture || !left || !right || !top || !bottom) return;

  left.textContent = String(picture.offsetLeft) + "px";
  right.textContent = String(picture.offsetLeft + picture.offsetWidth) + "px";
  bottom.textContent = String(picture.offsetTop + picture.offsetHeight) + "px";
  top.textContent = String(picture.offsetTop) + "px";
}
