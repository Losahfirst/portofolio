// Add your public projects here!
const projects = [
  {
    name: "coursEranove",
    description: "Python project for course management and analysis.",
    url: "https://github.com/Losahfirst/coursEranove"
  },
  {
    name: "scrapingImageCollector",
    description: "A tool for collecting images from the web using web scraping techniques.",
    url: "https://github.com/Losahfirst/scrapingImageCollector"
  },
  {
    name: "projetpythonFirst",
    description: "Jupyter Notebook project exploring Python basics and data analysis.",
    url: "https://github.com/Losahfirst/projetpythonFirst"
  },
  {
    name: "gestion_budget",
    description: "A simple budget management application written in Python.",
    url: "https://github.com/Losahfirst/gestion_budget"
  }
  // Add more projects as needed
];

function createProjectCard(project) {
  return `
    <div class="project-card">
      <h3 class="project-title">${project.name}</h3>
      <p class="project-desc">${project.description}</p>
      <a class="project-link" href="${project.url}" target="_blank">View on GitHub</a>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("project-cards");
  container.innerHTML = projects.map(createProjectCard).join("");
});