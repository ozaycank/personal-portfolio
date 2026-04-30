//Yetenekler
export function renderSkills(skills, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!skills || skills.length === 0) {
    container.innerHTML = "<p>Yetenekler yüklenemedi.</p>";
    return;
  }

  const html = skills
    .map(
      (skill) => `
        <div class="card skill-card">
            <h3 class="skill__title">${skill.name}</h3>
            <div class="skill__progress-bg">
                <div class="skill__progress-fill" style="width: ${skill.level};"></div>
            </div>
        </div>
    `,
    )
    .join("");
  // 'width' değeri dinamik veriden geldiği için inline kalması mecburi.

  container.innerHTML = html;
}

//Deneyimler
export function renderExperience(experiences, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!experiences || experiences.length === 0) {
    container.innerHTML = "<p>Deneyim verisi bulunamadı.</p>";
    return;
  }

  const html = experiences
    .map(
      (exp) => `
        <div class="card experience-card">
            <h3 class="experience__role">${exp.role}</h3>
            <h4 class="experience__company">${exp.company} | <small>${exp.duration}</small></h4>
            <p class="experience__desc">${exp.description}</p>
            <div class="experience__tech-list">
                ${exp.technologies.map((tech) => `<span class="experience__tech-item">${tech}</span>`).join("")}
            </div>
        </div>
    `,
    )
    .join("");

  container.innerHTML = html;
}

//Eğitimler
export function renderEducation(education, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!education || education.length === 0) {
    container.innerHTML = "<p>Eğitim verisi bulunamadı.</p>";
    return;
  }

  const html = education
    .map(
      (edu) => `
        <div class="card education-card" style="margin-bottom: 1.5rem; border-left: 4px solid var(--color-primary);">
            <h3 class="education__degree" style="color: var(--color-primary-dark);">${edu.degree}</h3>
            <h4 class="education__institution" style="color: var(--color-text-muted); margin-bottom: 0.5rem;">
                ${edu.institution} | <small>${edu.duration}</small>
            </h4>
            <p class="education__desc">${edu.description}</p>
        </div>
    `,
    )
    .join("");

  container.innerHTML = html;
}

//Github Repos
export function renderProjects(projects, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!projects || projects.length === 0) {
    container.innerHTML = "<p>Şu an gösterilecek proje bulunamadı.</p>";
    return;
  }

  const html = projects
    .map(
      (repo) => `
        <div class="card project-card">
            <div class="project__header">
                <h3 class="project__title">${repo.name}</h3>
                <p class="project__desc">${repo.description}</p>
            </div>
            <div class="project__footer">
                <span class="project__lang">${repo.language}</span>
                <div class="project__actions">
                    <span class="project__stars">⭐ ${repo.stars}</span>
                    <a href="${repo.url}" target="_blank" class="btn btn--outline btn--sm">İncele</a>
                </div>
            </div>
        </div>
    `,
    )
    .join("");

  container.innerHTML = html;
}
