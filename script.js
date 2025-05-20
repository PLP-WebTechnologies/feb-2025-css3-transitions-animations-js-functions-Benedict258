// Apply saved theme from localStorage on page load
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    document.getElementById('themeSelect').value = savedTheme;
    document.getElementById('savedThemeInfo').textContent = `Loaded: ${savedTheme} mode`;
  }
};

// Handle theme selection and store in localStorage
document.getElementById('themeSelect').addEventListener('change', function () {
  const selectedTheme = this.value;
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(selectedTheme);
  localStorage.setItem('theme', selectedTheme);
  document.getElementById('savedThemeInfo').textContent = `Saved: ${selectedTheme} mode`;
});

// Trigger animation on button click
document.getElementById('animateBtn').addEventListener('click', () => {
  const box = document.getElementById('box');
  box.classList.remove('bounce'); // Reset
  void box.offsetWidth; // Reflow
  box.classList.add('bounce');
});
