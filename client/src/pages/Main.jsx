import ProjectCard from '../components/ProjectCard';
import useProjects from '../hooks/useProjects';

function Main() {
  const { projects } = useProjects();

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
