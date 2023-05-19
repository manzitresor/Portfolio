const openBtn = document.getElementById('menu-btn');
const menuContain = document.querySelector('.menu-container');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const listMenu = document.querySelectorAll('.list-menu');
// Humberg button when clicked
openBtn.addEventListener('click', (event) => {
  event.preventDefault();
  mobileMenu.style.display = 'block';
  menuContain.style.display = 'none';
});
// closing button when clicked
closeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  menuContain.style.display = 'flex';
  mobileMenu.style.display = 'none';
});
// direct to the clicked section
listMenu.forEach((button) => {
  button.addEventListener('click', () => {
    menuContain.style.display = 'flex';
    mobileMenu.style.display = 'none';
  });
});
// Project cards data/object
const projects = [
  {
    name: 'Tonic',
    image: './images/Snapshoot Portfolio.svg',
    description: ' A daily selection of privately personalized reads;no accounts or sign-ups required.',
    categorise: ['HTML', 'CSS', 'JAVASCRIPT'],
    link: '#',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
    seeLive: '#',
    seeSource: '#',
  },
  {
    name: 'Tonic',
    image: './images/Snapshoot Portfolio (1).svg',
    description: ' A daily selection of privately personalized reads;no accounts or sign-ups required.',
    categorise: ['HTML', 'CSS', 'JAVASCRIPT'],
    link: '#',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
    seeLive: '#',
    seeSource: '#',
  },
  {
    name: 'Tonic',
    image: './images/Snapshoot Portfolio (2).svg',
    description: ' A daily selection of privately personalized reads;no accounts or sign-ups required.',
    categorise: ['HTML', 'CSS', 'JAVASCRIPT'],
    link: '#',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
    seeLive: '#',
    seeSource: '#',
  },
  {
    name: 'Multi-Post Stories',
    image: './images/Snapshoot Portfolio (3).svg',
    description: ' A daily selection of privately personalized reads;no accounts or sign-ups required.',
    categorise: ['HTML', 'CSS', 'JAVASCRIPT'],
    link: '#',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    seeLive: '#',
    seeSource: '#',
  },
];

const projectsSection = document.querySelector('.projects-container');

projects.forEach((project, index) => {
  const projectHTML = `
    <div class="project-${index + 1}">
      <img src="${project.image}" alt="card${index + 1}-image" class="card${index + 1}-image">
      <div class="card-${index + 1}-content">
        <h2 class="ton">${project.name}</h2>
        <div class="canopy">
          <h3>canopy</h3>
          <span>
            <img src="./images/Counter.png">
            back end dev
          </span>
          <span>
            <img src="./images/Counter.png">
            2015
          </span>
        </div>
        <p class="bio">${project.description}</p>
        <ul class="categories">
          ${project.categorise.map((category) => `<li class='lis'>${category}</li>`).join('')}
        </ul>
        <a href="${project.link}" class="see-project">See Project</a>
      </div>
    </div>
  `;
  projectsSection.innerHTML += projectHTML;
});

const seeProjectButtons = document.querySelectorAll('.see-project');
const popupContainer = document.getElementById('popup-container');

seeProjectButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const project = projects[index];
    const containerHTML = `
    <div class="popup-content">
    <h2 id="popup-title">${project.name}<li class="close-button" id="close-button">&times;</li></h2>
    <div class="canopy">
            <h3>canopy</h3>
            <span>
              <img src="./images/Counter.png">
              back end dev
            </span>
            <span>
              <img src="./images/Counter.png">
              2015
            </span>
          </div>
          <img src="${project.image}" alt="card${index + 1}-image" class="popup-image">  
          <div class="card-content">  
          <p class="biography">${project.details}</p>
          <div class="contact-container">
          <ul class="categories" id="cate">
          ${project.categorise.map((category) => `<li class='lis'>${category}</li>`).join('')}
        </ul>
        <hr class="contact-line">
        <div class="see-container">
        <a href="https://github.com/manzitresor/Portfolio" id="popup-link" class="see-live" target="_blank">
        <span>seeLive</span>
        <img src="./images/Icon.png" class="see-image">
        </a>
        <a href="#" id="popup-link" class="see-live">
        <span>seeSource</span>
        <img src="./images/github.png" class="see-image">
        </a>
        </div>
        </div>
        </div>
        </div>
    `;
    popupContainer.innerHTML += containerHTML;
    popupContainer.style.display = 'block';
    // Add closing popup button
    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', () => {
      popupContainer.style.display = 'none';
      popupContainer.innerHTML = '';
    });
  });
});

const form = document.querySelector('.contact-form');
const email = document.querySelector('.email');
const errorMsg = document.querySelector('.error');

form.addEventListener('submit', (event) => {
  const emailValue = email.value;
  const emailchecker = emailValue.replace(/[^a-zA-Z]/g, '').split('');
  for (let counter = 0; counter < emailchecker.length; counter += 1) {
    if (emailchecker[counter] === emailchecker[counter].toUpperCase()) {
      errorMsg.innerText = 'Invalid,Email should be in Lowercase';
      event.preventDefault();
    }
  }
});