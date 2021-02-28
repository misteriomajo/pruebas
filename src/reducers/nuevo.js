import {
    AGREGAR_TICKET,
    AGREGAR_TICKET_EXITO,
    AGREGAR_TICKET_ERROR,
    TICKET_EDITAR_EXITO,
    TICKET_EDITAR_ERROR,
    EDITAR_TICKET
} from '../types';


const initialsatate ={
    nuevodato: [],
    error: null,
    loading: false,
    editarticket: false
}

export default function(state = initialsatate, action){
    switch(action.type) {

        case AGREGAR_TICKET:
            return{
                ...state,
                loading: true
            }
            case AGREGAR_TICKET_EXITO:
                return{
                    ...state,
                    loading: false,
                    nuevodato: [...state.nuevodato, action.payload]
                }
                case AGREGAR_TICKET_ERROR:
                    return{
                        ...state,
                        loading: false,
                        error: action.payload
                    }



                    case EDITAR_TICKET:
                        return{
                            ...state,
                            loading: true
                        }
                        case TICKET_EDITAR_EXITO:
                            return{
                                ...state,
                                loading: false,
                                nuevodato: [...state.nuevodato, action.payload]
                            }
                            case TICKET_EDITAR_ERROR:
                                return{
                                    ...state,
                                    loading: false,
                                    error: action.payload
                                }
        default:
            return state;
    }
}