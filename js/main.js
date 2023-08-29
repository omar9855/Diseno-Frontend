document.addEventListener("DOMContentLoaded", () => {
  const scrollToBottomButtom = document.getElementById('btn-ir-arriba');

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollToBottomButtom.style.display = 'block';
    } else {
      scrollToBottomButtom.style.display = 'none';
    }
  })

  scrollToBottomButtom.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
})


const reviewImage = document.querySelector('.game-image');


reviewImage.addEventListener('click', () => {

  const largeImage = document.createElement('img');
  largeImage.src = reviewImage.src;
  largeImage.classList.add('large-image');

  document.body.appendChild(largeImage);

  largeImage.addEventListener('click', () => {

    document.body.removeChild(largeImage);
  });
});
