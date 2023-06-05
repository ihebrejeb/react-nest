import { Link, useParams } from 'react-router-dom';
import CreateTaskModal from '../components/CreateTaskModal';
import useProject from '../hooks/useProject';
import useTasks from '../hooks/useTasks';

function Project() {
  const { id } = useParams();
  const { project } = useProject(id);
  const { tasks, addTask } = useTasks(id);

  if (!project) return <div>Loading...</div>;
  return (
    <>
      <Link
        to="/"
        className=" me-auto inline-flex items-center rounded-md bg-gray-50 px-2 py-1  font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
      >
        &#10554; <span className="text-xs ms-1">Back</span>
      </Link>
      <CreateTaskModal addTask={addTask}/>
      <div className="flex w-full gap-4 bg-[#4a2d73] rounded-md shadow-md mb-10">
        <img
          src={project.image}
          alt={project.title}
          className="w-24 h-24 rounded-md rounded-e-none"
        />
        <div className="p-4">
          <h1 className="text-xl font-bold ">{project.title}</h1>
          <p>{project.description}</p>
        </div>
      </div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex w-full gap-4 bg-[#4a2d73] rounded-md shadow-md mb-3"
        >
          <div className="p-4">
            <h1 className="text-xl font-bold ">{task.title}</h1>
            <p>{task.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Project;
