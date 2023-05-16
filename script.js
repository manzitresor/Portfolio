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
    categorise: ['HTML,CSS,JAVASCRIPT'],
    link: '#',
  },
  {
    name: 'Tonic',
    image: './images/Snapshoot Portfolio (1).svg',
    description: ' A daily selection of privately personalized reads;no accounts or sign-ups required.',
    categorise: ['HTML,CSS,JAVASCRIPT'],
    link: '#',
  },
  {
    name: 'Tonic',
    image: './images/Snapshoot Portfolio (2).svg',
    description: ' A daily selection of privately personalized reads;no accounts or sign-ups required.',
    categorise: ['HTML,CSS,JAVASCRIPT'],
    link: '#',
  },
  {
    name: 'Multi-Post Stories',
    image: './images/Snapshoot Portfolio (3).svg',
    description: ' A daily selection of privately personalized reads;no accounts or sign-ups required.',
    categorise: ['HTML,CSS,JAVASCRIPT'],
    link: '#',
  },
]

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
          ${project.categorise.map((category) => `<li>${category}</li>`).join('')}
        </ul>
        <a href="${project.link}" class="see-project">See Project</a>
      </div>
    </div>
  `;
  projectsSection.innerHTML += projectHTML;
});