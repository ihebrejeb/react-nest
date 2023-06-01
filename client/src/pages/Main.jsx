import { useEffect, useState } from 'react';
import { generateFakeProjects } from '../utils/fakeData';
import ProjectCard from '../components/ProjectCard';

function Main() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const res = generateFakeProjects(2);
    setProjects(res);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold mb-10">My Projects</h1>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </>
  );
}

export default Main;
