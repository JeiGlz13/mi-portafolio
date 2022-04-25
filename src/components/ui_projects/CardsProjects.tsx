import { useSelector } from 'react-redux';
import { CardProject } from './CardProject';
import { ProjectsInterface } from '../../interfaces/interfaces';
export const CardsProjects = () => {
   const {projects} = useSelector((state: any) => state.projects);

  return (
    <div className="CardsProjects" >
        {
            projects.map((project: ProjectsInterface)  => (
                <CardProject key={project.id} {...project} />
            ))
        }
    </div>
  )
}
