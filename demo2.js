const COUNTDOWN_SECONDS = 15;

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
