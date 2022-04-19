import { ActividadesScreen } from "../components/screens/ActividadesScreen";
import { HabilidadesScreen } from "../components/screens/HabilidadesScreen";
import { ProyectosScreen } from "../components/screens/ProyectosScreen";
import { ExperienciaScreen } from '../components/screens/ExperienciaScreen';

export const routes = [
    {
        id: 1,
        path: '/experiencia',
        name: 'Experiencia',
        Component: ExperienciaScreen,
    },
    {
        id: 2,
        path: '/academico',
        name: 'Academico',
        Component: ActividadesScreen,
    },
    {
        id: 3,
        path: '/habilidades',
        name: 'Habilidades',
        Component: HabilidadesScreen,
    },
    {
        id: 4,
        path: '/proyectos',
        name: 'Proyectos',
        Component: ProyectosScreen,
    },
    
    
    
]