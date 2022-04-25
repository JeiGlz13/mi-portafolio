import { AbilitiesInterface, KnowledgeInterface, ProjectsInterface } from "../../interfaces/interfaces";

export type AbilitiesActions =
    | {type: 'load abilities', payload: AbilitiesInterface[]}
    | {type: 'load languages', payload: KnowledgeInterface[]}
    | {type: 'load databases', payload: KnowledgeInterface[]}
    | {type: 'load frameworks', payload: KnowledgeInterface[]}
    | {type: 'load ui', payload: KnowledgeInterface[]}
    | {type: 'load tools', payload: KnowledgeInterface[]}

export type ProjectsActions = 
    | {type: 'load projects', payload: ProjectsInterface[]}