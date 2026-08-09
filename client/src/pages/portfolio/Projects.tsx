import { useEffect, useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
};

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        return response.json();
      })
      .then((data: Project[]) => {
        setProjects(data);
      })
      .catch((error: Error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <section>
        <h1>My Projects</h1>

        {loading && <p>Loading projects...</p>}

        {error && <p>{error}</p>}

        {!loading &&
          !error &&
          projects.map((project) => (
            <article key={project.id}>
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <h3>Technologies</h3>

              <ul>
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}
      </section>
    </main>
  );
}

export default Projects;