import './Tarjeta.css'
import { Boton } from '../Boton';

const Tarjeta = (props) => {
    
    const {foto,color, handleOpenModal} = props;
    const estiloBorde = {color:color}

    return( 
        <div className='tarjeta__container' style={estiloBorde}>
            <img  className='tarjeta__foto' src={foto} alt={foto} />
            <div className='tarjeta__actions' style={estiloBorde} >   
                <Boton icono = '.\img\delete.png'
                nombre = 'Borrar' 
                color = '#FFFFFF'
                background = '#000000'
                border='none'
                boxshadow ='2px 2px 2px'/>   
                
                <Boton icono= '.\img\edit.png'
                nombre = 'Editar'             
                color = '#FFFFFF'
                background = '#000000'
                border = 'none'
                boxshadow ='2px 2px 2px'
                onClick ={handleOpenModal} />  
            </div>
        </div>   
    );
}

export{Tarjeta} 