import { getFirebaseDocs } from '../../helpers/getFirebaseDocs';
import { ProjectsInterface } from '../../interfaces/interfaces';
import { ProjectsActions } from '../types/types';
export const startLoadingProjects = () => {
    return async (dispatch: any) => {
        const projects = await getFirebaseDocs('myProjects');
        dispatch(loadProjects(projects))
    }
}

const loadProjects = (projects: ProjectsInterface[]):ProjectsActions => ({
    type: 'load projects',
    payload: projects
})