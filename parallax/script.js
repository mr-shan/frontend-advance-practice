window.addEventListener('scroll', () => {
  const hill1 = document.querySelector('#hill1');
  const hill2 = document.querySelector('#hill2');
  const hill3 = document.querySelector('#hill3');
  const hill4 = document.querySelector('#hill4');
  const hill5 = document.querySelector('#hill5');
  const leaf = document.querySelector('#leaf');
  const plant = document.querySelector('#plant');
  const tree = document.querySelector('#tree');
  const header = document.querySelector('#parallax-header');

  const scrollPos = window.scrollY;

  header.style.marginTop = scrollPos * 0.5 + 'px';

  leaf.style.top = scrollPos * -1.1 + 'px';
  leaf.style.left = scrollPos * 1.1 + 'px';

  hill1.style.top = scrollPos * 0.2 + 'px';

  if (scrollPos < 310) hill2.style.top = scrollPos * -0.5 + 'px';

  if (scrollPos < 280) hill3.style.top = scrollPos * -0.2 + 'px';

  hill4.style.left = scrollPos * -1.1 + 'px';
  hill5.style.left = scrollPos * 1.1 + 'px';
});
