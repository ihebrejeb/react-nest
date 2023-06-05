import { useEffect, useState } from 'react';
import { getProjects } from '../api';

function useProjects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects()
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  return {
    projects,
  };
}

export default useProjects;
