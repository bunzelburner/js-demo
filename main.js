window.addEventListener("load", () => {
  updatePictureStats();
  setMarqueeWidth();
  renderItems();
});

window.addEventListener("resize", () => {
  setMarqueeWidth();
});

document.getElementById("new-item")?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addItem();
});

document.body.addEventListener("keydown", (event) => {
  const demo1 = document.querySelector(".demo1");

  if (!demo1 || demo1.style.display === "none") return;

  switch (event.key) {
    case "ArrowDown": {
      movePicture("down");
      break;
    }
    case "ArrowUp": {
      movePicture("up");
      break;
    }
    case "ArrowLeft": {
      movePicture("left");
      break;
    }
    case "ArrowRight": {
      movePicture("right");
      break;
    }
  }
});

function navigateTo(location) {
  const demo1 = document.querySelector(".demo1");
  const demo2 = document.querySelector(".demo2");
  const demo3 = document.querySelector(".demo3");
  const demo1Button = document.getElementById("demo1-button");
  const demo2Button = document.getElementById("demo2-button");
  const demo3Button = document.getElementById("demo3-button");

  if (!demo1 || !demo2 || !demo3 || !demo1Button || !demo2Button || !demo3Button) return;

  if (location === "demo1") {
    demo1.style.display = "block";
    demo2.style.display = "none";
    demo3.style.display = "none";

    demo1Button.style.backgroundColor = "blue";
    demo1Button.style.color = "white";

    demo2Button.style.backgroundColor = "white";
    demo2Button.style.color = "black";

    demo3Button.style.backgroundColor = "white";
    demo3Button.style.color = "black";
    updatePictureStats();

    document.title = "Javascript Demo 1";
  } else if (location === "demo2") {
    demo1.style.display = "none";
    demo2.style.display = "block";
    demo3.style.display = "none";

    demo1Button.style.backgroundColor = "white";
    demo1Button.style.color = "black";

    demo2Button.style.backgroundColor = "blue";
    demo2Button.style.color = "white";

    demo3Button.style.backgroundColor = "white";
    demo3Button.style.color = "black";
    setMarqueeWidth();

    document.title = "Javascript Demo 2";
  } else {
    items = [...DEFAULT_ITEMS];
    demo1.style.display = "none";
    demo2.style.display = "none";
    demo3.style.display = "block";

    demo1Button.style.backgroundColor = "white";
    demo1Button.style.color = "black";

    demo2Button.style.backgroundColor = "white";
    demo2Button.style.color = "black";

    demo3Button.style.backgroundColor = "blue";
    demo3Button.style.color = "white";
    renderItems();

    document.title = "Javascript Demo 3";
  }
}

async function toggleFullscreen() {
  const enterFullscreen = document.getElementById("enter-fullscreen");
  const exitFullscreen = document.getElementById("exit-fullscreen");

  if (!enterFullscreen || !exitFullscreen) return;

  if (!document.fullscreenElement) {
    await document.documentElement.requestFullscreen();
    enterFullscreen.style.display = "none";
    exitFullscreen.style.display = "block";
  } else {
    await document.exitFullscreen();
    enterFullscreen.style.display = "block";
    exitFullscreen.style.display = "none";
  }
}
