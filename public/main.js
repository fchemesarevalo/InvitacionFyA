const headerHeight = document.querySelector(".main-header")?.offsetHeight || 0;

/* Smooth scroll respetando la altura del header fijo */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") {
      return;
    }

    const target = document.querySelector(href);
    if (!target) {
      return;
    }

    event.preventDefault();

    const rect = target.getBoundingClientRect();
    const offset = window.scrollY + rect.top - headerHeight + 1;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  });
});

/* Countdown al 22 de agosto de 2026, 20:00 hora local */
const targetDate = new Date(2026, 7, 22, 20, 0, 0);

const daysEl = document.getElementById("count-days");
const hoursEl = document.getElementById("count-hours");
const minutesEl = document.getElementById("count-minutes");
const secondsEl = document.getElementById("count-seconds");

function updateCountdown() {
  const now = new Date();
  const diffMs = targetDate.getTime() - now.getTime();

  if (diffMs <= 0) {
    daysEl.textContent = "0";
    hoursEl.textContent = "0";
    minutesEl.textContent = "0";
    secondsEl.textContent = "0";
    return;
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = String(days);
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

