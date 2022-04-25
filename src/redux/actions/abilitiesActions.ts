import { AbilitiesInterface, KnowledgeInterface } from '../../interfaces/interfaces';
import { AbilitiesActions } from '../types/types';
import { getFirebaseDocs } from '../../helpers/getFirebaseDocs';

export const startReadingAbilities = () => {
    return async (dispatch: any) => {
        const myAbilities = await getFirebaseDocs('myAbilities');
        dispatch(readAbilities(myAbilities));
    }
}

export const startReadingKnowledge = () => {
    return async (dispatch: any) => {
        const myKnowledge = await getFirebaseDocs('myKnowledge');
        const languages = myKnowledge.filter((knowledge: KnowledgeInterface) => knowledge.category === 'language');
        const databases = myKnowledge.filter((knowledge: KnowledgeInterface) => knowledge.category === 'database');
        const frameworks = myKnowledge.filter((knowledge: KnowledgeInterface) => knowledge.category === 'library');
        const ui = myKnowledge.filter((knowledge: KnowledgeInterface) => knowledge.category === 'ui');
        const tools = myKnowledge.filter((knowledge: KnowledgeInterface) => knowledge.category === 'others');

        dispatch(setLanguage(languages));
        dispatch(setDatabase(databases));
        dispatch(setFramework(frameworks));
        dispatch(setUI(ui));
        dispatch(setTools(tools));
    }
}

const readAbilities = (myAbilities: AbilitiesInterface[]):AbilitiesActions => ({
    type: 'load abilities',
    payload: myAbilities
});

const setLanguage = (languages: KnowledgeInterface[]):AbilitiesActions => ({
    type: 'load languages',
    payload: languages
});

const setDatabase = (databases: KnowledgeInterface[]):AbilitiesActions => ({
    type: 'load databases',
    payload: databases
});

const setFramework = (frameworks: KnowledgeInterface[]):AbilitiesActions => ({
    type: 'load frameworks',
    payload: frameworks
});

const setUI = (ui: KnowledgeInterface[]):AbilitiesActions => ({
    type: 'load ui',
    payload: ui
});

const setTools = (tools: KnowledgeInterface[]):AbilitiesActions => ({
    type: 'load tools',
    payload: tools
})