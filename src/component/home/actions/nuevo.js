import {
    AGREGAR_TICKET,
    AGREGAR_TICKET_EXITO,
    AGREGAR_TICKET_ERROR,
} from '../../../types';
// AXIOS
import clienteAxios from '../../../config/axios';
// Alertas


// Crear nuevo TICKET
var token = localStorage.getItem('jwtToken');

// const config = {
//     headers: { Authorization: `${token}` }
// };

export function crearNuevoTicket (Ticket){
    console.log(Ticket)
    let formData = new FormData();
        formData.append('correo', Ticket.correo);
        formData.append('contraseña', Ticket.contraseña);

        console.log(Ticket.correo)
        console.log(Ticket.contraseña)
    return async (dispatch) =>{
        dispatch ( agregarTicket() );

        try {
            //insertar en api
            console.log(formData)
            const repuesta = await clienteAxios.post('/nuevodato', formData,
            {    
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': 'https://api.argoxx.com',
                'Access-Control-Allow-Credentials': 'true',
            }
            
             );
             
             console.log(repuesta.data);
            dispatch( agregarTicketexito(Ticket));
            console.log(Ticket)
            // Alerta
           
        } catch (error) {
            console.log(error)
            dispatch (agregarTicketerror(true));
        }
    }
}



const agregarTicket = () =>({
    type: AGREGAR_TICKET
});

// GUARDADO EN BD
const agregarTicketexito = Emisor =>({
    type: AGREGAR_TICKET_EXITO,
    payload: Emisor
});

// ERROR
const agregarTicketerror = estado =>({
    type: AGREGAR_TICKET_ERROR,
    payload: estado
});
