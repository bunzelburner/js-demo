const MOVE_BY = 100;

const COUNTDOWN_SECONDS = 15;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function navigateTo(location) {
  const demo1 = document.querySelector(".demo1");
  const demo2 = document.querySelector(".demo2");
  const demo1Button = document.getElementById("demo1-button");
  const demo2Button = document.getElementById("demo2-button");

  if (!demo1 || !demo2 || !demo1Button || !demo2Button) return;

  if (location === "demo1") {
    demo1.style.display = "block";
    demo2.style.display = "none";

    demo1Button.style.backgroundColor = "blue";
    demo1Button.style.color = "white";

    demo2Button.style.backgroundColor = "white";
    demo2Button.style.color = "black";
    updatePictureStats();

    document.title = "Javascript Demo 1";
  } else {
    demo1.style.display = "none";
    demo2.style.display = "block";

    demo2Button.style.backgroundColor = "blue";
    demo2Button.style.color = "white";

    demo1Button.style.backgroundColor = "white";
    demo1Button.style.color = "black";
    setMarqueeWidth();

    document.title = "Javascript Demo 2";
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

function setMarqueeWidth() {
  const marquee = document.getElementById("marquee");
  const demo2 = document.querySelector(".demo2");
  const cs = getComputedStyle(demo2);

  const width = demo2.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
  const height = demo2.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);

  marquee.style.width = String(width) + "px";
}

function blockingCountDown() {
  const countdownTimer = document.getElementById("countdown-timer-value");
  if (!countdownTimer) return;

  console.log("-------------");
  console.log("Blocking Countdown Starting");

  countdownTimer.textContent = String(COUNTDOWN_SECONDS);

  const end = Date.now() + COUNTDOWN_SECONDS * 1000;
  let lastLogged = null;

  while (Date.now() < end) {
    const remaining = Math.ceil((end - Date.now()) / 1000);
    if (remaining !== lastLogged) {
      console.log("Time left:", remaining, "seconds");
      countdownTimer.textContent = String(remaining);
      lastLogged = remaining;
    }
  }
  console.log("Blocking Countdown done");
  console.log("-------------");
}

function nonBlockingCountdown() {
  const countdownTimer = document.getElementById("countdown-timer-value");
  if (!countdownTimer) return;

  countdownTimer.textContent = String(COUNTDOWN_SECONDS);

  let seconds = COUNTDOWN_SECONDS;

  console.log("-------------");
  console.log("Non-Blocking Countdown Starting");

  console.log("Time left:", seconds, "seconds");

  const interval = setInterval(() => {
    if (--seconds <= 0) {
      clearInterval(interval);
      countdownTimer.textContent = String(0);
      console.log("Non-Blocking Countdown done");
      console.log("-------------");
    } else {
      console.log("Time left:", seconds, "seconds");
      countdownTimer.textContent = String(seconds);
    }
  }, 1000);
}

window.addEventListener("load", () => {
  updatePictureStats();
  setMarqueeWidth();
});

window.addEventListener("resize", () => {
  setMarqueeWidth();
});
