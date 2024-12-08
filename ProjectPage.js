// Fetch the project data from projects.json
async function fetchProjects() {
    try {
        const response = await fetch('projects.json');
        if (!response.ok) {
            throw new Error(`Failed to load projects.json: ${response.statusText}`);
        }
        const projects = await response.json();
        return projects;
    } catch (error) {
        console.error(error);
        document.body.innerHTML = "<h1>Error loading project data</h1>";
        return [];
    }
}

// Extract the project name from the current URL
function getProjectName() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("title");
}

// Load project data and populate the page
async function loadProject() {
    const projectName = getProjectName();
    if (!projectName) {
        document.body.innerHTML = "<h1>Project not found</h1>";
        return;
    }

    const projects = await fetchProjects();

    const project = projects.find(proj => proj.title.toLowerCase() === projectName.toLowerCase());
    if (!project) {
        document.body.innerHTML = "<h1>Project not found</h1>";
        return;
    }

    // Populate the page with project data
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-description").textContent = project.longDescription;

    const carouselImage = document.getElementById("carousel-image");
    const images = project.carouselImages;
    let currentImageIndex = 0;

    // Set the initial image
    carouselImage.src = images[currentImageIndex];

    // Event listeners for carousel navigation
    document.getElementById("prev-btn").addEventListener("click", () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        carouselImage.src = images[currentImageIndex];
    });

    document.getElementById("next-btn").addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        carouselImage.src = images[currentImageIndex];
    });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", loadProject);
