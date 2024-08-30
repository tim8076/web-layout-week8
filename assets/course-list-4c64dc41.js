import"./main-f1ab3050.js";import{S as a,N as e,A as i,G as t,P as l}from"./grid-4a160750.js";new a(".swiper-course-nav",{modules:[e],slidesPerView:"auto",spaceBetween:8,navigation:{nextEl:".swiper-button-next-nav"}});new a(".swiper-course-card",{modules:[e,i,t],slidesPerView:1.1,loop:!0,spaceBetween:24,autoplay:{delay:2500,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-prev-course",prevEl:".swiper-button-next-course"},breakpoints:{768:{slidesPerView:1.5},992:{slidesPerView:3},1320:{slidesPerView:4}}});new a(".swiper-hot",{modules:[e,l,i],slidesPerView:1.5,spaceBetween:24,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination-hot",clickable:!0},navigation:{nextEl:".swiper-button-next-hot",prevEl:".swiper-button-prev-hot"},breakpoints:{768:{slidesPerView:3.5},992:{slidesPerView:6}}});new a(".swiper-category",{modules:[i,t],slidesPerView:1.2,spaceBetween:24,autoplay:{delay:2500,disableOnInteraction:!1},grid:{rows:2,fill:"row"},breakpoints:{768:{slidesPerView:2},992:{slidesPerView:2,grid:{rows:4,fill:"row"}}}});const d=document.querySelector("[data-course-list-phone]"),o=document.querySelector("[data-course-list-desk]");let r="";for(let s=0;s<10;s++)r+=`
    <li class="cardCourse mb-6">
      <div class="position-relative me-2 flex-shrink-0">
        <img class="cardCourse-img object-fit-cover" src="../assets/images/course-5.png" alt="course-5-img">
        <div class="cardCourse-tag position-absolute bg-alert-10 text-alert py-1 px-2 fw-normal fs-8 rounded-6">
          8 折
        </div>
      </div>
      <div>
        <h3 class="cardCourse-title mb-4">小白也會！從零開始學習 Python 程式設計</h3>
        <div class="cardCourse-price mb-4">
          <div class="avatar">
            <img class="avatar-img object-fit-cover"
              src="../assets/images/avatar-2.png"
              alt="avatar-2-img">
            <h4 class="avatar-title">Kelly Hsu</h4>
          </div>
          <div>
            <p class="discount-price">NT$ 2,480</p>
            <p class="origin-price">NT$ 3,200</p>
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <div class="fs-8 text-gray-80">
            <p class="py-1 px-3">程式開發</p>
            <p>已有 420 位同學加入</p>
          </div>
          <div class="rate">
            <img src="../assets/images/icons/ic_star.svg" alt="icon-star">
            <p class="rate-text">4.0</p>
            <p class="rate-count">(333)</p>
          </div>
        </div>
      </div>
    </li>
  `;d.innerHTML=r;let c="";for(let s=0;s<5;s++)c+=`
    <li class="col-md-6 col-lg-4 col-xl-3">
      <div class="card cardCourseBuy">
        <a href="#" class="stretched-link"></a>
        <div class="position-relative overflow-hidden">
          <img src="../assets/images/course-4.png"
            class="card-img-top"
            alt="course-4-img">
          <div class="position-absolute tag tag-alert fw-semibold">
            限時 8 折 🔥
          </div>
        </div>
        <div class="cardCourseBuy-body">
          <h2 class="cardCourseBuy-title mb-4">創意寫作工坊：從靈感到出版的全過程</h2>
          <div class="d-flex justify-content-between align-items-center">
            <div class="avatar mb-6">
              <img class="avatar-img object-fit-cover"
                src="../assets/images/avatar-2.png"
                alt="avatar-2-img">
              <h3 class="avatar-title">Kelly Hsu</h3>
            </div>
            <div class="cardCourseBuy-price">
              <p class="price">NT$ 2,480</p>
              <p class="discount">NT$ 3,200</p>
            </div>
          </div>
        </div>
        <div class="cardCourseBuy-footer">
          <div>
            <p class="tag tag-gray mb-1 py-1">中文創作</p>
            <p class="text-gray-80 fs-8">已有 420 位同學加入</p>
          </div>
          <div class="rate">
            <img class="rate-star" src="../assets/images/icons/ic_star.svg" alt="icon-star">
            <p class="rate-text">4.0</p>
            <p class="rate-count">(333)</p>
          </div>
        </div>
      </div>
    </li>
    <li class="col-md-6 col-lg-4 col-xl-3">
      <div class="card cardCourseBuy">
        <a href="#" class="stretched-link"></a>
        <div class="position-relative overflow-hidden">
          <img src="../assets/images/course-5.png"
            class="card-img-top"
            alt="course-5-img">
          <div class="position-absolute tag tag-alert fw-semibold">
            限時 8 折 🔥
          </div>
        </div>
        <div class="cardCourseBuy-body">
          <h2 class="cardCourseBuy-title mb-4">小白也會！從零開始學習 Python 程式設計</h2>
          <div class="d-flex justify-content-between align-items-center">
            <div class="avatar mb-6">
              <img class="avatar-img object-fit-cover"
                src="../assets/images/avatar-2.png"
                alt="avatar-2-img">
              <h3 class="avatar-title">Kelly Hsu</h3>
            </div>
            <div class="cardCourseBuy-price">
              <p class="price">NT$ 2,480</p>
              <p class="discount">NT$ 3,200</p>
            </div>
          </div>
        </div>
        <div class="cardCourseBuy-footer">
          <div>
            <p class="tag tag-gray mb-1 py-1">程式開發</p>
            <p class="text-gray-80 fs-8">已有 420 位同學加入</p>
          </div>
          <div class="rate">
            <img class="rate-star" src="../assets/images/icons/ic_star.svg" alt="icon-star">
            <p class="rate-text">4.0</p>
            <p class="rate-count">(333)</p>
          </div>
        </div>
      </div>
    </li>
    <li class="col-md-6 col-lg-4 col-xl-3">
      <div class="card cardCourseBuy">
        <a href="#" class="stretched-link"></a>
        <div class="position-relative overflow-hidden">
          <img src="../assets/images/course-6.png"
            class="card-img-top"
            alt="course-6-img">
        </div>
        <div class="cardCourseBuy-body">
          <h2 class="cardCourseBuy-title mb-4">全面掌握 JavaScript 開發技術</h2>
          <div class="d-flex justify-content-between align-items-center">
            <div class="avatar mb-6">
              <img class="avatar-img object-fit-cover"
                src="../assets/images/avatar-2.png"
                alt="avatar-2-img">
              <h3 class="avatar-title">Kelly Hsu</h3>
            </div>
            <div class="cardCourseBuy-price">
              <p class="price">NT$ 2,480</p>
              <p class="discount">NT$ 3,200</p>
            </div>
          </div>
        </div>
        <div class="cardCourseBuy-footer">
          <div>
            <p class="tag tag-gray mb-1 py-1">程式開發</p>
            <p class="text-gray-80 fs-8">已有 420 位同學加入</p>
          </div>
          <div class="rate">
            <img class="rate-star" src="../assets/images/icons/ic_star.svg" alt="icon-star">
            <p class="rate-text">4.0</p>
            <p class="rate-count">(333)</p>
          </div>
        </div>
      </div>
    </li>
    <li class="col-md-6 col-lg-4 col-xl-3">
      <div class="card cardCourseBuy">
        <a href="#" class="stretched-link"></a>
        <div class="position-relative overflow-hidden">
          <img src="../assets/images/course-7.png"
            class="card-img-top"
            alt="course-7-img">
        </div>
        <div class="cardCourseBuy-body">
          <h2 class="cardCourseBuy-title mb-4">HTML & CSS 網頁設計基礎教程</h2>
          <div class="d-flex justify-content-between align-items-center">
            <div class="avatar mb-6">
              <img class="avatar-img object-fit-cover"
                src="../assets/images/avatar-2.png"
                alt="avatar-2-img">
              <h3 class="avatar-title">Kelly Hsu</h3>
            </div>
            <div class="cardCourseBuy-price">
              <p class="price">NT$ 2,480</p>
              <p class="discount">NT$ 3,200</p>
            </div>
          </div>
        </div>
        <div class="cardCourseBuy-footer">
          <div>
            <p class="tag tag-gray mb-1 py-1">程式開發</p>
            <p class="text-gray-80 fs-8">已有 420 位同學加入</p>
          </div>
          <div class="rate">
            <img class="rate-star" src="../assets/images/icons/ic_star.svg" alt="icon-star">
            <p class="rate-text">4.0</p>
            <p class="rate-count">(333)</p>
          </div>
        </div>
      </div>
    </li>
  `;o.innerHTML=c;
