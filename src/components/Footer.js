import logo from '../img/logo.png';
import './Footer.css'
const Footer = () => {
    return(
        
       <div className='footer' >
        <div className='container'>
            <div className='grid'>
            <div className='gridhead' ><h3>INTEGRANTES</h3> <br></br></div>
                <div>
                
                    <a href='logo.png'><img src={logo} alt='logo' ></img></a>
                    <p>Las mejores Recetas</p>
                </div>
                <div>
                <br></br>
                    <ul>
                        <li>Inicio</li>
                        <li>Recetas</li>
                        <li>Faqs</li>
                        <li>Contact</li>
                        
                    </ul>
                </div>
                
                <div>
                    <ul>
                        <li>Matías Nicolas Bravo Nerón</li>
                        <li>Juan David Chaves</li>
                        <li>Daniel Alberto Rocha Bartaburu</li>
                        <li>Facundo G. Miranda</li>
                        <li>Dario Fabian Guardiola</li>
                    </ul>
                </div>
                <div>
                <br></br>
                <ul>
                        <li>Paula de Figueiredo</li>
                        <li>Florencia Ojeda</li>
                        <li>Ramiro Hittaller</li>
                        <li>Braian D'Aleo</li>
                        
                    </ul>
                </div>
            </div>
            <p> Creado con React, SweetAlert, Bootstrap, Firebase  · Maquetado by Webflow</p>
        </div>

       </div>
        
    )
}
export default Footer