import 'bootstrap/dist/css/bootstrap.min.css';
import Muestra from './components/Muestra';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className='container'>
          <div className='row'>
            <Muestra/> 
          </div>
           
        </div>
             
    </div>
  );
}

export default App;
