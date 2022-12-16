import 'bootstrap/dist/css/bootstrap.min.css';
import Muestra from './components/Muestra';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Muestra />

      </div>

    </div>
  );
}

export default App;
