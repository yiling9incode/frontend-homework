// const swiper = new Swiper('.swiper', {

//     // 分頁、左右箭頭、滾動條若有使用則必需設定
//     // 分頁
//     pagination: {
//         el: '.swiper-pagination',
//     },
//     // 左右箭頭
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     // 滾動條
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });

const bestSellerSwiper = new Swiper(".best-seller-swiper", {
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 16,
    watchOverflow: true,

    breakpoints: {
        577: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
});

//style swiper
let styleSwiper = null;

const styleMedia = window.matchMedia("(max-width: 768px)");

function toggleStyleSwiper(event = styleMedia) {
  if (event.matches && styleSwiper === null) {
    // 手機版：啟動輪播
    styleSwiper = new Swiper(".style-swiper", {
      loop: true,
      slidesPerView: 1.2,
      spaceBetween: 16,
      watchOverflow: true,
    });
  } else if (!event.matches && styleSwiper !== null) {
    // 桌機版：關閉輪播並清除 Swiper 寫入的樣式
    styleSwiper.destroy(true, true);
    styleSwiper = null;
  }
}

toggleStyleSwiper();

styleMedia.addEventListener("change", toggleStyleSwiper);