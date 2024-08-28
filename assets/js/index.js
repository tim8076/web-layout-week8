// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";
// banner
const swiper = new Swiper('.swiper-banner', {
  modules: [Navigation, Pagination, Autoplay, Grid],
  // Optional parameters
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination-banner',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-banner',
    prevEl: '.swiper-button-prev-banner',
  },
  breakpoints: {
    768: {
      slidesPerView: 1.2,
      spaceBetween: 40,
    },
  },
});

// swiper funds 
const swiperFunds = new Swiper('.swiper-funds', {
  modules: [Pagination, Autoplay, Grid],
  // Optional parameters
  slidesPerView: 1.1,
  spaceBetween: 24,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination-funds',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
    },
    992: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row"
      }
    }
  }
});

// swiper buy
const swiperBuy = new Swiper('.swiper-buy', {
  modules: [Navigation, Pagination, Autoplay, Grid],
  // Optional parameters
  slidesPerView: 1.1,
  loop: true,
  spaceBetween: 24,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next-buy',
    prevEl: '.swiper-button-prev-buy',
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
    },
    992: {
      slidesPerView: 3,
    },
    1320: {
      slidesPerView: 4,
    }
  }
});


// swiper category

// swiper funds 
const swiperCategory = new Swiper('.swiper-category', {
  modules: [Autoplay, Grid],
  // Optional parameters
  slidesPerView: 1.2,
  spaceBetween: 24,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  grid: {
    rows: 2,
    fill: "row"
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
      grid: {
        rows: 4,
        fill: "row"
      }
    }
  }
});

// swiper teacher 

const swiperTeacher = new Swiper('.swiper-teacher', {
  modules: [Autoplay, Grid, Pagination],
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination-teacher',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});