const getLocationBtn = document.getElementById('getLocation');
const output = document.getElementById('output');

getLocationBtn.addEventListener('click', () => {
  if (!navigator.geolocation) {
    output.textContent = 'Geolocation is not supported by your browser.';
    return;
  }

  output.textContent = '📡 Locating...';

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      /*output.innerHTML = `
         Latitude: ${latitude.toFixed(5)}<br>
         Longitude: ${longitude.toFixed(5)}
      `;*/
      output.innerHTML += `<br><a href="https://www.google.com/maps?q=${latitude},${longitude}" target="_blank"> Open in Google Maps</a>`;
    },
    (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          output.textContent = ' User denied the request.';
          break;
        case error.POSITION_UNAVAILABLE:
          output.textContent = ' Location information unavailable.';
          break;
        case error.TIMEOUT:
          output.textContent = ' The request timed out.';
          break;
        default:
          output.textContent = ' An unknown error occurred.';
      }
    }
  );
});