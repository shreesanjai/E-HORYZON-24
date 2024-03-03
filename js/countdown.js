document.addEventListener("DOMContentLoaded", () => {
  const countdown = document.querySelector(".countdown");
  const countdownText = document.querySelector(".countdown-text");

  const interval = setInterval(() => {
    const deadline = new Date(2024, 2, 6, 23, 59, 59);

    const current = new Date();

    const diff = deadline - current;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + "";
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24) + "";
    const minutes = Math.floor((diff / (1000 * 60)) % 60) + "";
    const seconds = Math.floor((diff / 1000) % 60) + "";

    if (diff > 0) {
      countdownText.innerHTML=`<h3>Registration Closes in</h3>`;
      countdown.innerHTML = `
      <div data-content="Days">${
        days.length === 1 ? `0${days}` : days
      }</div>
      <div data-content="Hours">${
        hours.length === 1 ? `0${hours}` : hours
      }</div>
      <div data-content="Minutes">${
        minutes.length === 1 ? `0${minutes}` : minutes
      }</div>
      <div data-content="Seconds">${
        seconds.length === 1 ? `0${seconds}` : seconds
      }</div>
      `;
    } else {
      clearInterval(interval);
      countdownText.innerHTML=``;
      countdown.innerHTML = "<h1>Registeration Closed!!!</h1>";
    }
  }, 1000);
});
