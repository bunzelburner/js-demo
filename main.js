function goToURLLocation() {
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  const demo = urlParams.get("demo");

  switch (demo) {
    case "2":
      navigateTo("demo2", false);
      break;
    case "3":
      navigateTo("demo3", false);
      break;
    case "4":
      navigateTo("demo4", false);
      break;
    default:
      navigateTo("demo1", false);
  }
}

window.addEventListener("load", () => {
  goToURLLocation();
});

window.addEventListener("resize", () => {
  setMarqueeWidth();
});

window.addEventListener("popstate", () => {
  goToURLLocation();
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

function navigateTo(location, push) {
  if (!["demo1", "demo2", "demo3", "demo4"].includes(location)) return;

  if (push === undefined) push = true;

  const demo1 = document.querySelector(".demo1");
  const demo2 = document.querySelector(".demo2");
  const demo3 = document.querySelector(".demo3");
  const demo4 = document.querySelector(".demo4");
  const demo1Button = document.getElementById("demo1-button");
  const demo2Button = document.getElementById("demo2-button");
  const demo3Button = document.getElementById("demo3-button");
  const demo4Button = document.getElementById("demo4-button");

  if (!demo1 || !demo2 || !demo3 || !demo4 || !demo1Button || !demo2Button || !demo3Button || !demo4Button) return;

  const demo1Active = location === "demo1";
  const demo2Active = location === "demo2";
  const demo3Active = location === "demo3";
  const demo4Active = location === "demo4";

  demo1.style.display = demo1Active ? "block" : "none";
  demo2.style.display = demo2Active ? "block" : "none";
  demo3.style.display = demo3Active ? "block" : "none";
  demo4.style.display = demo4Active ? "block" : "none";

  demo1Button.style.backgroundColor = demo1Active ? "blue" : "white";
  demo1Button.style.color = demo1Active ? "white" : "black";

  demo2Button.style.backgroundColor = demo2Active ? "blue" : "white";
  demo2Button.style.color = demo2Active ? "white" : "black";

  demo3Button.style.backgroundColor = demo3Active ? "blue" : "white";
  demo3Button.style.color = demo3Active ? "white" : "black";

  demo4Button.style.backgroundColor = demo4Active ? "blue" : "white";
  demo4Button.style.color = demo4Active ? "white" : "black";

  if (location === "demo1") {
    updatePictureStats();
    document.title = "Javascript Demo 1";
  } else if (location === "demo2") {
    setMarqueeWidth();
    document.title = "Javascript Demo 2";
  } else if (location === "demo3") {
    items = [...DEFAULT_ITEMS];
    renderItems();
    document.title = "Javascript Demo 3";
  } else if (location === "demo4") {
    renderItems();
    document.title = "Javascript Demo 4";
  }

  if (push) {
    const url = new URL(window.location.href);
    url.searchParams.set("demo", location.replace("demo", ""));
    window.history.pushState(null, "", url.toString());
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
