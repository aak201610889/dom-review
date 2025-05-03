const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const closeBtn = modal.firstElementChild;

btn.addEventListener('click', () => {
  modal.classList.add('show');
  btn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  btn.style.display = 'block';
});
