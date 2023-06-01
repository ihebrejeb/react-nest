import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`}>
      <div className="flex flex-col justify-center  bg-[#4a2d73] rounded-md shadow-sm hover:scale-105 transform transition-all cursor-pointer">
        <img
          src={project.image}
          alt={project.title}
          className="w-48 h-48 rounded-md rounded-b-none mx-auto"
        />
        <div className="p-4">
          <h5 className="font-bold">{project.title}</h5>
          <p className="text-sm">{project.description}</p>
        </div>
      </div>
    </Link>
  );
}
ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

export default ProjectCard;
