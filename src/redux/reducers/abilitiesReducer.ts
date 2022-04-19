import { database, framework, lenguajes, tools, ui } from "../../assets/Iconos"
import { AbilitiesActions } from "../types/types"

const initialState = {
  abilities: [],
  languages: {
    name: 'Lenguajes',
    icono: lenguajes,
    language: []
  },
  databases: {
    name: 'Bases de datos',
    icono: database,
    database: []
  },
  frameworks: {
    name: 'Frameworks y librerías',
    icono: framework,
    framework: []
  },
  ui: {
    name: 'UI / UX',
    icono: ui,
    ui: []
  },
  tools: {
    name: 'Otras herramientas',
    icono: tools,
    tool: []
  }
}

export const abilitiesReducer = (state = initialState, action: AbilitiesActions) => {
  switch (action.type) {

  case 'load abilities':
    return { ...state,
    abilities: action.payload }

  case 'load languages':
    return { ...state,
      languages: {
        ...state.languages,
        language: action.payload
      }
    }

  case 'load databases':
    return { ...state,
      databases: {
        ...state.databases,
        database: action.payload
      }
    }

  case 'load frameworks':
    return {...state,
      frameworks: {
        ...state.frameworks,
        framework: action.payload
      }
    }

  case 'load ui':
    return {...state,
      ui: {
        ...state.ui,
        ui: action.payload
      }
    }

  case 'load tools':
    return {...state,
      tools: {
        ...state.tools,
        tool: action.payload
      }
    }

  default:
    return state
  }
}
