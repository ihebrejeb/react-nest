import { useEffect, useState } from "react"
import { getProjectById } from "../api";

function useProject(id) {
const [project, setProject] = useState(null)
    useEffect(() => {
        getProjectById(id).then(res => setProject(res.data)).catch(err => console.log(err))
    }, [id]);
    
  return {
    project
  }
}

export default useProject