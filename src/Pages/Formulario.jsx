import React from 'react'

import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("xgebwegv");
    if (state.succeeded) {
        return <p>Te responderemos en 24 horas!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email" width="90rem">
                Correo electrónico
            </label>
            <br></br>
            <br></br>
            <input
                id="email"
                type="email"
                name="email"
                width="90rem"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <br></br>

            <textarea
                id="message"
                name="message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <br></br>

            <button type="submit" disabled={state.submitting}>
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