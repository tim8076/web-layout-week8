const phoneMenuList = [
  '音樂',
  '攝影',
  '程式',
  '程式',
  '藝術',
  '人文',
  '行銷',
  '投資理財',
  '心靈成長',
  '職場技能',
  '生活品味',
];

const phoneSecondMenuList = [
  '程式入門',
  '網頁前端',
  '網頁後端',
  '網站架設',
  '資訊安全',
  '程式語言',
  '遊戲開發',
  '資料科學',
  '人工智慧',
  '量化分析',
];

// 手機版選單
const phoneMenu = document.querySelector('[data-phone-menu]');
const phoneHeader = document.querySelector('[data-phone-header]');
const renderPhoneMenu = () => {
  phoneHeader.innerHTML = `
    <h3 class="offcanvas-title title">探索全部</h3>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  `
  let str = '';
  phoneMenuList.forEach(item => {
    str += `
    <li>
      <a href="#second-menu" class="dropdown-item" data-open-menu="2">
        ${item}
        <span class="material-symbols-outlined">chevron_right</span>
      </a>
    </li>`;
  });
  phoneMenu.innerHTML = str;
}

const renderPhoneSecondMenu = () => {
  phoneHeader.innerHTML = `
    <a herf="#">    
      <span class="material-symbols-rounded" data-open-menu="1">chevron_left</span>
    </a>
    <h3 class="offcanvas-title title mx-auto">所有程式</h3>
  `;
  let str = '';
  phoneSecondMenuList.forEach(item => {
    str += `
    <li>
      <a href="#second-menu" class="dropdown-item" data-open-menu="2">
        ${item}
      </a>
    </li>`
  });
  phoneMenu.innerHTML = str;
}

phoneHeader.addEventListener('click', (e) => {
  if (e.target.dataset.openMenu === '1') {
    console.log(1)
    renderPhoneMenu();
  }
})
phoneMenu.addEventListener('click', (e) => {
  if (e.target.dataset.openMenu === '2') {
    renderPhoneSecondMenu();
  }
})


// 桌機版選單
const deskMenu = document.querySelector('[data-desk-menu]');
const deskSecMenu = document.querySelector('[data-desk-sec-menu]');
const renderDeskMenu = () => {
  let str = '';
  phoneMenuList.forEach(item => {
    str += `
    <li>
      <a href="#second-menu" class="dropdown-item">
        ${item}
        <span class="material-symbols-outlined">chevron_right</span>
      </a>
    </li>
    `
  });
  deskMenu.innerHTML = str;
}

const renderDeskSecMenu = () => {
  let str = '';
  phoneSecondMenuList.forEach(item => {
    str += `
    <li>
      <a href="#second-menu" class="dropdown-item">
        ${item}
        <span class="material-symbols-outlined">chevron_right</span>
      </a>
    </li>
    `
  });
  deskSecMenu.innerHTML = str;
}

const init = () => {
  renderDeskMenu();
  renderDeskSecMenu();
  renderPhoneMenu();
}
init();