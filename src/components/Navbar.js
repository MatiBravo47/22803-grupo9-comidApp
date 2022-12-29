import './Navbar.css'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import Formulario from '../Pages/Formulario'
import logoani from '../img/logoani.gif';

const Navbar = () => {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ maxHeight: '100px' }} navbarScroll>
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/home'>
                        <img src={logoani} className='logo' alt='logo'></img> <span>ComidApp</span>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
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
                    <Route path="/home" />
                </Routes>
        </BrowserRouter>
    )
}
export default Navbar


