function updateTime() {
  const timeInput = document.getElementById('timeInput');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  timeInput.value = `${hours}:${minutes}:${seconds}`;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initialize the time when the page loads
updateTime();

// Time on panel


// work
console.log(`ready`)
