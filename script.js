const openBtn = document.getElementById('menu-btn');
const menuContain = document.querySelector('.menu-container');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const listMenu = document.querySelectorAll('.list-menu');
const emailValidator = document.querySelector('input[name="email"]');

openBtn.addEventListener('click', (event) => {
  event.preventDefault();
  mobileMenu.style.display = 'block';
  menuContain.style.display = 'none';
});

closeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  menuContain.style.display = 'flex';
  mobileMenu.style.display = 'none';
});

listMenu.forEach((n) => {
  n.addEventListener('click', () => {
    menuContain.style.display = 'flex';
    mobileMenu.style.display = 'none';
  });
});

emailValidator.addEventListener('input', function() {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if(!regex.test(this.value)) {
    this.classList.add('invalid');
  } else {
    this.classList.remove('invalid');
  }
})
