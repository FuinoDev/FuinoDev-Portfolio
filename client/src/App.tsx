import { useEffect, useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
};

function App() {
  const [project, setProject] = useState<Project[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/projects")
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
      });
  }, []);

  return (
    <div>
      <h1>My Portfolio</h1>

      {project.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>

          <ul>
            {item.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;