// Load the JSON data
fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        const projectContainer = document.getElementById('project-container');
        const searchInput = document.getElementById('search');

        function renderProjects(filter = '') {
            projectContainer.innerHTML = ''; // Clear previous results
            const filteredProjects = data.filter(project =>
                project.title.toLowerCase().includes(filter.toLowerCase()) ||
                project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
            );
            filteredProjects.forEach(project => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <div class="card-image">
                        <img src="${project.image}" alt="${project.title}">
                        <div class="overlay">${project.description}</div>
                    </div>
                    <div class="card-info">
                        <h2>${project.title}</h2>
                        <a href="${project.link}" target="_blank">View Project</a>
                    </div>
                `;
                projectContainer.appendChild(card);
            });
        }

        renderProjects(); // Initial render

        searchInput.addEventListener('input', () => {
            renderProjects(searchInput.value);
        });
    })
    .catch(error => console.error('Error loading projects:', error));






const slides = document.querySelector('.carousel-slides');
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

// Function to update carousel position
function updateCarousel(index) {
    const offset = -index * 100; // Move the carousel based on the index
    slides.style.transform = `translateX(${offset}%)`;
}

// Click event listener for left/right gradients
document.querySelector('.carousel-gradient-left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Wrap around
    updateCarousel(currentIndex);
});

document.querySelector('.carousel-gradient-right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Wrap around
    updateCarousel(currentIndex);
});