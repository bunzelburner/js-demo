const MOVE_BY = 100;

function getBorders(element) {
  const style = window.getComputedStyle(element);

  return {
    left: Number((style.borderLeftWidth ?? "0px").replace("px", "")),
    right: Number((style.borderLeftWidth ?? "0px").replace("px", "")),
    top: Number((style.borderLeftWidth ?? "0px").replace("px", "")),
    left: Number((style.borderLeftWidth ?? "0px").replace("px", "")),
  };
}

function getOffset(element) {
  const rect = element.getBoundingClientRect();

  const borders = getBorders(element);

  return {
    left: rect.left + borders.left,
    top: rect.top + borders.top,
  };
}

function move(direction) {
  if (!["left", "right", "up", "down"].includes(direction)) return;

  const picture = document.getElementById("picture1");
  const container = document.getElementsByClassName("demo1-picture-container")[0];

  if (!picture || !container) return;

  const containerOffset = getOffset(container);

  const containerRect = container.getBoundingClientRect();
  const pictureRect = picture.getBoundingClientRect();

  switch (direction) {
    case "right": {
      const newLeft = pictureRect.left + MOVE_BY;
      const newRight = newLeft + pictureRect.width;
      if (newRight > containerRect.right) {
        picture.style.left =
          String(containerRect.right - pictureRect.width - containerRect.left - containerBorders.left - containerBorders.right) + "px";
      } else {
        picture.style.left = String(newLeft) + "px";
      }
      break;
    }
    case "left": {
      const newLeft = pictureRect.left - MOVE_BY;
      console.log(pictureRect.left, newLeft);
      if (newLeft < containerRect.left) {
        console.log("HERE");
        picture.style.left = "0px";
      } else {
        picture.style.left = String(newLeft) + "px";
      }
      break;
    }
    case "top": {
      break;
    }
    case "bottom": {
      break;
    }
  }
}
