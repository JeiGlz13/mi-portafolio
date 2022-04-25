import { ProjectsActions } from '../types/types';

const initialState = {
  projects: []
}

export const projectsReducer = (state = initialState, action: ProjectsActions) => {
  switch (action.type) {
    case 'load projects':
        return {
          ...state,
          projects: action.payload
        }

  default:
    return state
  }
}
