import React from 'react';
import './Formulario_contacto.css';
import Swal from 'sweetalert2';
import { useForm, ValidationError } from '@formspree/react';

//con opción de TYPE  //tipos de popups: error, success, warning, info, question
const showAlert = () => {
    Swal.fire('Mensaje enviado correctamente','te responderemos en 24 horas!');
    }


function ContactForm() {
    const [state, handleSubmit] = useForm("xgebwegv");
    if (state.succeeded) {
        return;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label class="mt-3" htmlFor="email" width="500px">
                Correo electrónico
            </label>
            <br></br>
            <br></br>
            <input class="form-label"
                id="email"
                type="email"
                name="email"
                width="90rem"
            required/>
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <br></br>
            <label class="textarea mt-3" htmlFor="email" width="500px" placeholder="Required example textarea">
                
                Comentario
            </label>
            <br></br>
            <br></br>
            <textarea class="form-label"
                id="message"
                name="message"
            required/>
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <br></br>

            <button onClick={showAlert} class="btn btn-primary mb-3" type="submit" disabled={state.submitting}> 
            Enviar 
            
            </button>
            
        </form>
    );
}
function Formulario() {
    return (
        <ContactForm />
    );
}
export default Formulario ;