const openText = document.querySelector('[data-open-text]');
const closeText = document.querySelector('[data-close-text]');
const toggleButton = document.querySelector('[data-toggle-btn]');
const iconArrow = document.querySelector('[data-icon-arow]');

toggleButton.addEventListener('click', (e) => {
  openText.classList.toggle('d-none');
  closeText.classList.toggle('d-none');
  iconArrow.classList.toggle('open');
})
