import './Footer.css'
import {Boton} from '../Boton';

const Footer = (props) => {         
    return (
        <footer>
            <img  className='logo_footer' src="./img/LogoMain.png" alt="logo" />   
            
            <div className='menu_mobile' >
                <Boton  
                    icono = './img/home.png'          
                    nombre='HOME' 
                    color='#2271d1'
                    background = '#000000'/>    

                <img  className='add_icon' src="./img/NuevoVideo.png" alt="add-icon" />

            </div>
                           
        </footer>

    );
}

export {Footer} 