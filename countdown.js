function updateCountdown() {
  const targetDate = new Date("2023-10-27T04:00:00Z"); // Midnight in UTC
  const currentDate = new Date();
  const timeRemaining = targetDate - currentDate;

  if (timeRemaining <= 0) {
    document.getElementById("countdownText").textContent = "Countdown expired!";
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const seconds = Math.floor((timeRemaining / 1000) % 60);

    const countdownText = `${days}d:${hours}h:${minutes}m:${seconds}s`;
    document.getElementById("countdownText").textContent = countdownText;
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);
