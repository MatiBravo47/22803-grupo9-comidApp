
import { Route, Routes } from 'react-router-dom'

import React from 'react'

function Pages() {                        //creación de rutas para la web. Simula los href //
    return (
        <Routes >
            <Route path="/Formulario_contacto" element={<Formulario_contacto />} />

        </Routes>
    )
}

export default Pages