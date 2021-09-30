//
// Developed by Terry C.
// tcwebdeveloper@yahoo.com
// Free use, no permission needed.

let logo = document.querySelectorAll('.logoClickListen');
// For Development purposes only.
// const width1 = document.querySelector('.screenW1');
// const width2 = document.querySelector('.screenW2');
// const width3 = document.querySelector('.screenW3');

// logo[index] creates a new EventListner for each logo.NodeList item.
logo.forEach((el, index) => {
  logo[index] = el;

  // Opens new window on logo click.
  logo[index].addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://ccf-indy.com/', '', '');
  });
});

// For Development purposes only.
// function writeSize() {
//   const clientWidth = document.documentElement.clientWidth;
//   width1.textContent = `DOM Client Width: ${clientWidth} px`;
//   width2.textContent = `Inner Width: ${window.innerWidth} px`;
//   width3.textContent = ` Window OuterWidth ${window.outerWidth} px`;
// }
// window.addEventListener('resize', writeSize);
//
//
// See also: window.onresize;
