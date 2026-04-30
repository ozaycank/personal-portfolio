//Dependency injections
import { fetchGithubRepos } from "./api.js";
import { educationData, experienceData, skillsData } from "./data.js";
import {
  renderSkills,
  renderExperience,
  renderProjects,
  renderEducation,
} from "./ui.js";

//StartApp
async function initApp() {
  console.log("Portfolyo başlatılıyor...");

  //Statik verileri anında render et
  renderSkills(skillsData, "skills-container");
  renderExperience(experienceData, "experience-container");
  renderEducation(educationData, "education-container");

  // Dinamik verileri (GitHub Repoları) çek
  const projects = await fetchGithubRepos();

  //Gelen projeleri ekrana bas
  renderProjects(projects, "projects-container");
}

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});
