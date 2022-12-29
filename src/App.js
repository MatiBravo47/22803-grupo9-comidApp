
import React, {Suspense, lazy} from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';


/*USO DE LAZY LOADING PARA NOTIFICAR AL USUARIO QUE AGUARDE LA CARGA*/
const Muestra = lazy(()=>import('./components/Muestra'));


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Header />
      {/*Encapsulo entre Suspense la carga del Lazy Loading*/}
      <Suspense fallback={<h1>Cargando...</h1>}>
      <Muestra/>
      </Suspense>
      <Footer />
    </div>
  );
}


export default App;
