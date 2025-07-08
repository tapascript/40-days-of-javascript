const notifyBtn = document.getElementById('notifyBtn');
const statusMsg = document.getElementById('statusMsg');

notifyBtn.addEventListener('click', async () => {
  if (!('Notification' in window)) {
    statusMsg.textContent = 'Notifications not supported in this browser.';
    return;
  }

  const permission = await Notification.requestPermission();

  if (permission === 'granted') {
    new Notification('Hello from TapasScript!', {
      body: 'This is your notification demo!'
    });
    statusMsg.textContent = '✅ Notification sent!';
  } else if (permission === 'denied') {
    statusMsg.textContent = '❌ Notification permission denied.';
  } else {
    statusMsg.textContent = 'Notification permission not decided.';
  }
});