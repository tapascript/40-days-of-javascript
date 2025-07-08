const toggleBtn = document.getElementById('toggleTheme');
const themeStatus = document.getElementById('themeStatus');


const savedTheme = localStorage.getItem('theme') || 'light';
document.body.className = savedTheme;
themeStatus.textContent = `Current Theme: ${capitalize(savedTheme)}`;

toggleBtn.addEventListener('click', () => {
  const newTheme = document.body.className === 'dark' ? 'light' : 'dark';

  document.body.className = newTheme;
  localStorage.setItem('theme', newTheme);
  themeStatus.textContent = `Current Theme: ${capitalize(newTheme)}`;
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}