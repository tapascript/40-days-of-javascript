const textarea = document.getElementById('messageInput');
const draftNotice = document.getElementById('draftNotice');

const savedDraft = sessionStorage.getItem('draft');
if (savedDraft) {
  textarea.value = savedDraft;
  draftNotice.textContent = 'Draft loaded from sessionStorage';
}

// Save on input
textarea.addEventListener('input', () => {
  sessionStorage.setItem('draft', textarea.value);
  draftNotice.textContent = 'Draft saved!';
});