import './Header.css';
import { Boton } from '../Boton';
import {Link, useLocation} from 'react-router-dom'

const Header = () => {

    const location = useLocation();

    const isNuevoVideoActive = location.pathname === '/nuevo-video';


    return(
        <header  style={{backgroundColor:'black'}}>
            <img className='header__img' src='./img/LogoMain.png' alt='flix'  />  
            <div className='nav__container'>  
                <Link to='/' className='link-button'>
                    <Boton nombre='HOME' 
                    color = {isNuevoVideoActive ?  '#FFFFFF': '#2271d1' }
                    background = '#000000'
                    border='1px solid'
                    boxshadow ='2px 2px 2px'/>  
                </Link>             
                           

                <Link to='/nuevo-video' className='link-button'>
                    <Boton nombre = 'NUEVO VIDEO' 
                    color = {isNuevoVideoActive ?  '#2271d1' : '#FFFFFF'}
                    background = '#000000'
                    border={isNuevoVideoActive ? '1px solid #2271d1' : '1px solid'}
                    boxshadow ='2px 2px 2px'/>
                </Link>    
            </div>
        </header>
    );    

}

export {Header};