const openText = document.querySelector('[data-open-text]');
const closeText = document.querySelector('[data-close-text]');
const toggleButton = document.querySelector('[data-toggle-btn]');
const iconArrow = document.querySelector('[data-icon-arow]');

toggleButton.addEventListener('click', (e) => {
  openText.classList.toggle('d-none');
  closeText.classList.toggle('d-none');
  iconArrow.classList.toggle('open');
});

// 側邊欄開時，關閉底部 modal 區塊
const menuButton = document.querySelector('[href="#phoneMenu"]');
const closeButton = document.querySelector('[data-bs-dismiss="offcanvas"]');
const modalButton = document.querySelector('[data-modal-btn]');
menuButton.addEventListener('click', () => {
  modalButton.classList.add('d-none');
});
closeButton.addEventListener('click', () => {
  modalButton.classList.remove('d-none');
})


