const a=["音樂","攝影","程式","程式","藝術","人文","行銷","投資理財","心靈成長","職場技能","生活品味"],c=["程式入門","網頁前端","網頁後端","網站架設","資訊安全","程式語言","遊戲開發","資料科學","人工智慧","量化分析"],t=document.querySelector("[data-phone-menu]"),o=document.querySelector("[data-phone-header]"),s=document.querySelectorAll("[data-login-button]"),l=document.querySelectorAll("[data-login-section]"),r=()=>{o.innerHTML=`
    <h3 class="offcanvas-title title">探索全部</h3>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  `;let e="";a.forEach(n=>{e+=`
    <li>
      <a href="#second-menu" class="dropdown-item" data-open-menu="2">
        ${n}
        <span class="material-symbols-outlined">chevron_right</span>
      </a>
    </li>`}),t.innerHTML=e},i=()=>{o.innerHTML=`
    <a herf="#">    
      <span class="material-symbols-rounded" data-open-menu="1">chevron_left</span>
    </a>
    <h3 class="offcanvas-title title mx-auto">所有程式</h3>
  `;let e="";c.forEach((n,f)=>{e+=`
    <li>
      <a href="course-list.html" class="dropdown-item" data-open-menu="2">
        ${n}
      </a>
    </li>`}),t.innerHTML=e};s.forEach(e=>{e.addEventListener("click",()=>{s.forEach(n=>{n.classList.toggle("active")}),l.forEach(n=>{n.classList.toggle("d-none")})})});o.addEventListener("click",e=>{e.target.dataset.openMenu==="1"&&r()});t.addEventListener("click",e=>{e.target.dataset.openMenu==="2"&&i()});const d=document.querySelector("[data-desk-menu]"),u=document.querySelector("[data-desk-sec-menu]"),h=()=>{let e="";a.forEach(n=>{e+=`
    <li>
      <a href="#second-menu" class="dropdown-item">
        ${n}
        <span class="material-symbols-outlined">chevron_right</span>
      </a>
    </li>
    `}),d.innerHTML=e},m=()=>{let e="";c.forEach(n=>{e+=`
    <li>
      <a href="#second-menu" class="dropdown-item">
        ${n}
        <span class="material-symbols-outlined">chevron_right</span>
      </a>
    </li>
    `}),u.innerHTML=e},p=()=>{h(),m(),r()};p();
