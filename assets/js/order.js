const openText = document.querySelector('[data-open-text]');
const closeText = document.querySelector('[data-close-text]');
const toggleButton = document.querySelector('[data-toggle-btn]');
const iconArrow = document.querySelector('[data-icon-arow]');

// 手機版 modal 開合
toggleButton.addEventListener('click', (e) => {
  openText.classList.toggle('d-none');
  closeText.classList.toggle('d-none');
  iconArrow.classList.toggle('open');
});

// 手機版側邊欄開時，關閉底部 modal 區塊
const menuButton = document.querySelector('[href="#phoneMenu"]');
const closeButton = document.querySelector('[data-bs-dismiss="offcanvas"]');
const modalButton = document.querySelector('[data-modal-btn]');
menuButton.addEventListener('click', () => {
  modalButton.classList.add('d-none');
});
closeButton.addEventListener('click', () => {
  modalButton.classList.remove('d-none');
});

// 刪除購物車品項
const products = document.querySelectorAll('[data-product]');
const deleteButtons = document.querySelectorAll('[data-delete-btn]');
const cartSection = document.querySelector('[data-product-section]');
const noProductSection = document.querySelector('[data-no-product-section]');
const priceText = document.querySelectorAll('[data-price]');
const checkoutButton = document.querySelectorAll('[data-checkout-btn]');
let cartNums = products.length;
console.log(products)

// 當購物車沒商品時，顯示沒商品圖示區塊
const checkZeroItem = () => {
  if (cartNums === 0) {
    cartSection.classList.add('d-none');
    noProductSection.classList.remove('d-none');
    noProductSection.classList.add('d-flex');
    priceText.forEach(item => item.innerText = 0);
    checkoutButton.forEach(btn => btn.classList.add('disabled'));
  }
}

deleteButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const productNum = e.target.dataset.deleteBtn;
    const product = [...products].find(item => item.dataset.product === productNum);
    product.remove();
    cartNums -= 1;
    checkZeroItem();
  })
});

// 帶入上次結帳資料
const checkoutData = {
  name: 'Jessica Wang',
  email: 'jessicadesigner@gmail.com',
  envoiceType: '電子發票',
  saveType: 'save-in-account',
}
const lastTimeButton = document.querySelector('[data-last-time-btn]');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputInvoiceType = document.querySelector('#invoice-type');
const inputInvoiceGet = document.querySelector('#invoice-get');
const inputInvoiceGetContainer = document.querySelector('[data-input-invoice-get]');
const sectionBarcode = document.querySelector('[data-section-barcode]');
const sectionInvoice = document.querySelector('[data-section-invoice]');

const checkShowArea = () => {

}

inputInvoiceType.addEventListener('change', (e) => {
  const value = e.target.value;
  if (value === '電子發票') {
    inputInvoiceGetContainer.classList.remove('d-none');
    sectionInvoice.classList.add('d-none');
  } else if (value === '統編發票') {
    sectionBarcode.classList.add('d-none');
    inputInvoiceGetContainer.classList.add('d-none');
    sectionInvoice.classList.remove('d-none');
  }
});

inputInvoiceGet.addEventListener('change', (e) => {
  if (e.target.value === 'save-in-phone') {
    sectionBarcode.classList.remove('d-none');
  } else {
    sectionBarcode.classList.add('d-none');
  }
});

lastTimeButton.addEventListener('click', (e) => {
  e.preventDefault();
  inputName.value = checkoutData.name;
  inputEmail.value = checkoutData.email;
  inputInvoiceType.value = checkoutData.envoiceType;
  inputInvoiceGet.value = checkoutData.saveType;
})



