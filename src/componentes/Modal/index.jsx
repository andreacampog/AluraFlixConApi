import './Modal.css';
import { Formulario } from '../Formulario';

const Modal = ({listaCategorias=[],handleCloseModal})=>{ 

    return (
        <section className='modal-overlay' >
            <div className='modal'>
                <button   button className='close_button' onClick={handleCloseModal} >X</button>            
                <h1>EDITAR CARD</h1>           
                <section>
                    <Formulario 
                    listaCategorias = {listaCategorias}
                    background = '#000000'                    
                    color = '#FFFFFF'
                    active = 'red'
                    border = '#FFFFFF'
                />               
                </section>
            </div>
            
        </section>
    )
}

export {Modal};

