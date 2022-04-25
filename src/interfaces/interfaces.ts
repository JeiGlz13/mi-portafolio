export interface AbilitiesInterface{
    id: string;
    habilidad: string;
    descripción: string;
    icono: string;
}

export interface KnowledgeInterface{
    id: string;
    name: string;
    category: string;
    image: string;
    percent: number;
}

export interface ProjectsInterface{
    id: string;
    name: string;
    descripcion: string;
    github: string;
    image: string;
    url: string;
    tech: TechType[];
}

type TechType = {
    name: string;
    img: string;
}