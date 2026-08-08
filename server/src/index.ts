import express from "express";
import cors from "cors";

const app = express();
const port = 3000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/api/projects", (req, res) => {
  res.json([
    {
      id: 1,
      title: "FuinoDev-Portfolio",
      description: "A full-stack developer portfolio",
      technologies: [
        "React",  
        "Node.js",
        "Express",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "Tailwind CSS",
        "Vite",
        "Framer Motion",
        "React Router",
        "React Query"
      ]
    }
  ]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});