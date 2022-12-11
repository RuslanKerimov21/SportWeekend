const swipers = () => {
    const slides = document.getElementById('slider')
    if (slides) {
        const swiper = new Swiper('.swiper', {
            loop: false,
            spaceBetween: 30,
            slidesPerView: 3.5,
            centeredSlides: false,
            direction: 'horizontal',
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
    }
    else {
        console.log('слайдера нет')
    }

}
export default swipers;