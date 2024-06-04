$(function () {
  /****** mouse emoji ******/
 const emoji = document.querySelector('.logo-emoji');
 $('.logo-emoji');

 let mouseX = 0;
 let mouseY = 0;

 addEventListener('mousemove', (e) => {
  mouseX = e.clientX -10;
  mouseY = e.clientY -10;
})
let emojiX = 0;
let emojiY = 0;

const emojiMov = () => {
  requestAnimationFrame(emojiMov);
  
  emojiX += (mouseX - emojiX) * 0.1;
  emojiY += (mouseY - emojiY) * 0.1;

  emoji.style.transform = `translate(${emojiX}px, ${emojiY}px)`;
}

emojiMov();

/***** product-slideShow ******/
});