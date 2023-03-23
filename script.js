const dateContainer = document.querySelector('#date-container');

function displayDate() {
  const date = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
  };
  const dateString = date.toLocaleDateString('en-fr', options);
  dateContainer.textContent = `Current date and time: ${dateString}`;
}

displayDate();
setInterval(displayDate, 1000);
