import { useEffect, useState } from 'react';
import { getFakeProject } from '../utils/fakeData';
import { Link, useParams } from 'react-router-dom';

function Project() {
  const [project, setProject] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const res = getFakeProject(id);
    setProject(res);
  }, [id]);

  if (!project) return <div>Loading...</div>;
  return (
    <>
      <Link
        to="/"
        className=" me-auto inline-flex items-center rounded-md bg-gray-50 px-2 py-1  font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
      >
        &#10554; <span className="text-xs ms-1">Back</span>
      </Link>
      <h1 className="text-3xl font-bold mb-10">{project.title}</h1>

      <div className="flex w-full gap-4 bg-[#4a2d73] rounded-md shadow-md">
        <img
          src={project.image}
          alt={project.title}
          className="w-96 h-96 rounded-md rounded-e-none"
        />
        <p className="p-4">{project.description}</p>
      </div>
    </>
  );
}

export default Project;
