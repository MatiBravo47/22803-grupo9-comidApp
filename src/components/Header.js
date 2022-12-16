import cheff from '../img/cheff.png';
import './Header.css'
const Header = () => {
    return(
        
       <div className='header' >
        <div className='headcontainer'>
            <div className='info'>
            <h1>Encuentre todas las recetas que necesite.</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
            
            </div>
            <div className='img'>
            <img className='cheff' src={cheff} alt='cheff' ></img>
            </div>

        </div>

       </div>
        
    )
}
export default Header