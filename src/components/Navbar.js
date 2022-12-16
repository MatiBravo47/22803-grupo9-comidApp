import './Navbar.css'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import Formulario from '../Pages/Formulario'
import Muestra from './Muestra'

const Navbar = () => {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/home'>
                        <i class="fa-solid fa-utensils"></i><span className='logo'>ComidApp</span>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to='/home' class="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Formulario' class="nav-link">Formulario</Link>                          </li>
                            <li class="nav-item dropdown">
                                <div class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Buscar
                                </div>
                                <ul class="dropdown-menu">
                                    <li class="dropdown-item" >Libre de gluten</li>
                                    <li class="dropdown-item" >Costo bajo</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><div class="dropdown-item" >Something else here</div></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Busca recetas" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
                <Routes>
                    <Route path="/Formulario" element={<Formulario/>} />
                    <Route path="/home" element={<Muestra/>} />
                </Routes>
        </BrowserRouter>
    )
}
export default Navbar


