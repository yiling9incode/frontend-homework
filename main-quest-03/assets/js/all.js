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
    // watchOverflow: true,

    breakpoints: {
        577: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
});