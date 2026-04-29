const GITHUB_USERNAME = "ozaycank";
const BASE_URL = "https://api.github.com";

export async function fetchGithubRepos() {
  const url = `${BASE_URL}/users/${GITHUB_USERNAME}/repos?/repos?sort=updated&per_page=10`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });
    //HTTP Error Handling
    if (!response.ok) {
      throw new Error(
        `GitHub API Hatası: ${response.status} ${response.statusText}`,
      );
    }
    const rawData = await response.json();
    //Data Transformation
    return rawData
      .filter((repo) => !repo.fork)
      .map((repo) => ({
        id: repo.id,
        name: repo.name.replace(/-/g, " "),
        description:
          repo.description || "Bu proje için bir açıklama girilmemiştir.",
        url: repo.url,
        stars: repo.stargazers_count,
        language: repo.language || "Markdown",
        updatedAt: new Date(repo.updated_at).toLocaleDateString(`tr-TR`),
      }));
  } catch (error) {
    console.log("Repo'lar çekilirken bir hata oluştu", error.message);
    return [];
  }
}
