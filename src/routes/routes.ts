import { ActividadesScreen } from "../components/screens/ActividadesScreen";
import { ContactoScreen } from "../components/screens/ContactoScreen";
import { HabilidadesScreen } from "../components/screens/HabilidadesScreen";
import { ProyectosScreen } from "../components/screens/ProyectosScreen";

export const routes = [
    {
        id: 1,
        path: '/habilidades',
        name: 'Habilidades',
        Component: HabilidadesScreen,
    },
    {
        id: 2,
        path: '/proyectos',
        name: 'Proyectos',
        Component: ProyectosScreen,
    },
    {
        id: 3,
        path: '/actividades',
        name: 'Actividades',
        Component: ActividadesScreen,
    },
    {
        id: 4,
        path: '/Contacto',
        name: 'Contacto',
        Component: ContactoScreen,
    },
    
]