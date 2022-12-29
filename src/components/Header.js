import cheff from '../img/cheff.png';
import './Header.css'
const Header = () => {
    return(
        
       <div className='header' >
        <div className='headcontainer'>
            <div className='info'>
            <h1 class="animate__animated animate__backInLeft">Encuentre todas las recetas que necesite.</h1>
            </div>
            <div className='img'>
            <img className='cheff' src={cheff} alt='cheff' ></img>
            </div>

        </div>

       </div>
        
    )
}
export default Header