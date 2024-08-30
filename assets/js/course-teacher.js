// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";

const swiperCategory = new Swiper('.swiper-teacher-course', {
  modules: [Autoplay],
  // Optional parameters
  slidesPerView: 1.2,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
    },
    992: {
      slidesPerView: 3,
    },
    1296: {
      slidesPerView: 4,
    },
  }
});