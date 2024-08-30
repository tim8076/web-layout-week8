import data from './data.js';

const courseContainer = document.querySelector('[data-course-list-container]');
const courseData = data.courseChapterData;

const renderCourse = () => {
  let str = '';
  courseData.forEach((item, index) => {
    const { list } = item;
    str += `
      <div class="accordion mb-4" id="accordian-course">
        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button d-flex justify-content-between ${ index === 0 ? '' : 'collapsed'}"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-${index}"
              aria-expanded="true"
              aria-controls="collapseOne">
              <span class="w-24p h-24p bg-gray-80 text-light d-flex justify-content-center align-items-center rounded-1 me-2">
                ${index + 1}
              </span>
              ${item.title.content}
              <p class="fs-8 position-absolute top-50 end-65p translate-middle-y
                d-none d-lg-block">
                ${item.title.chapterNum}
                <span class="d-inline-block mx-2 w-6p h-6p bg-gray-60 rounded-circle"></span>
                ${item.title.time}
              </p>
            </button>
          </h3>
          <div id="collapse-${index}" class="accordion-collapse collapse ${index === 0 ? 'show': ''}"
            data-bs-parent="#accordian-course">
            <div class="accordion-body">
              <ul class="list-unstyled m-0">
                <li class="text-gray-80">
                  <a href="#" class="d-flex justify-content-between align-items-center px-6 py-4
                    bg-primary-10-hover">
                    <div class="d-flex align-items-center">
                      <img src="../assets/images/icons/ic_video.svg"
                        alt="video-icon"
                        class="w-24p h-24p me-3">
                      <p>${list[0].name}</p>
                    </div>
                    <div class="d-flex align-items-center ms-4">
                      <div class="py-1 px-2 bg-primary text-light rounded-2 fs-9 me-4">
                        試看單元
                      </div>
                      <p class="fs-7">${list[0].progress}</p>
                    </div>
                  </a>
                </li>
                <li class="text-gray-80">
                  <a href="#" class="d-flex justify-content-between align-items-center px-6 py-4
                    bg-primary-10-hover">
                    <div class="d-flex align-items-center">
                      <img src="../assets/images/icons/ic_video.svg"
                        alt="video-icon"
                        class="w-24p h-24p me-3">
                      <p>${list[1].name}</p>
                    </div>
                    <div class="d-flex align-items-center ms-4">
                      <p class="fs-7">${list[0].progress}</p>
                    </div>
                  </a>
                </li>
                <li class="text-gray-80">
                  <a href="#" class="d-flex justify-content-between align-items-center px-6 py-4
                    bg-primary-10-hover">
                    <div class="d-flex align-items-center">
                      <img src="../assets/images/icons/ic_video.svg"
                        alt="video-icon"
                        class="w-24p h-24p me-3">
                      <p>${list[2].name}</p>
                    </div>
                    <div class="d-flex align-items-center ms-4">
                      <p class="fs-7">${list[0].progress}</p>
                    </div>
                  </a>
                </li>
                <li class="text-gray-80">
                  <a href="#" class="d-flex justify-content-between align-items-center px-6 py-4
                    bg-primary-10-hover">
                    <div class="d-flex">
                      <img src="../assets/images/icons/ic_video.svg"
                        alt="video-icon"
                        class="w-24p h-24p me-3">
                      <p>${list[3].name}</p>
                    </div>
                    <div class="d-flex align-items-center ms-4">
                      <p class="fs-7">${list[0].progress}</p>
                    </div>
                  </a>
                </li>
                <li class="text-gray-80">
                  <a href="#" class="d-flex justify-content-between align-items-center px-6 py-4
                    bg-primary-10-hover">
                    <div class="d-flex align-items-center">
                      <img src="../assets/images/icons/ic_video.svg"
                        alt="video-icon"
                        class="w-24p h-24p me-3">
                      <p>${list[4].name}</p>
                    </div>
                    <div class="d-flex align-items-center ms-4">
                      <p class="fs-7">${list[0].progress}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  courseContainer.innerHTML = str;
}

renderCourse();