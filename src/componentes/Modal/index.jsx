import './Modal.css';
import { Formulario } from '../Formulario';

const Modal = (props)=>{ 

    const {listaCategorias,handleCloseModal} = props


    return (
        <section className='modal-overlay' >
            <div className='modal'>
                <button   button className='close_button' onClick={handleCloseModal} >X</button>            
                <h1>EDITAR CARD</h1>           
                <section>
                    <Formulario listaCategorias = {listaCategorias}/>
                </section>
            </div>
            
        </section>
    )
}

export {Modal};

