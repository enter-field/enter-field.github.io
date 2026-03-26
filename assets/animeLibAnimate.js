anime.createDraggable('#testElement2', {
    container: [0,0,0,0],
})
anime.animate('#testElement1', {
   translateX: 0,
   rotate: '1turn',
   duration: 1500,
   easing: 'easeInOutSine',
   loop: true
});
anime.animate('#testElement3', {
  translateX: [0,100,0],
  delay: anime.stagger(100),
  direction: 'alternate',
  loop: false,
  easing: 'spring(1,80,10,0)'
})

const clickableElement = document.querySelector('#clickableEventTest');

clickableElement.addEventListener('click', () => {
  anime.animate('#clickableEventTester', {
    translateY: [0,-50,0],
    duration: 500,
    easing: 'easeOutQuad'
  })
})