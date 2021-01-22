const navBtn = document.querySelector('.menuBtn');
const menuContainer = document.querySelector('.navbar-mobile-js');
navBtn.addEventListener('click', () => {
  navBtn.classList.toggle('active');
  menuContainer.classList.toggle('active');
});

const heroImages = document.querySelector('.hero-images');

if (heroImages) {
  const imageArray = Array.from(
    document.querySelectorAll('.hero-images-slide')
  );
  console.log(imageArray);
  imageArray[0].classList.add('activeImage');
  let counterForImage = 0;
  const imageSlide = (slideArray, classToAdd, classToRemove) => {
    slideArray.forEach((item) => {
      item.classList.remove(`${classToAdd}`);
      item.classList.remove(`${classToRemove}`);
    });

    counterForImage >= slideArray.length - 1
      ? (counterForImage = 0)
      : (counterForImage = counterForImage + 1);
    if (counterForImage === 0) {
      slideArray[counterForImage].classList.add(`${classToAdd}`);
      slideArray[slideArray.length - 1].classList.add(`${classToRemove}`);
    } else {
      slideArray[counterForImage].classList.add(`${classToAdd}`);
      slideArray[counterForImage - 1].classList.add(`${classToRemove}`);
    }
  };

  // setInterval(() => {
  //   imageSlide(imageArray, 'activeImage', 'wasActiveImage');
  // }, 5000);
}
