
import React, {Suspense, lazy} from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

const Muestra = lazy(()=>import('./components/Muestra'));


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <Suspense fallback={<h1>Cargando...</h1>}>
      <Muestra/>
      </Suspense>
      <Footer />
    </div>
  );
}


export default App;
