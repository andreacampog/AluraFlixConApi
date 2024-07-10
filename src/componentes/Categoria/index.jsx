import React from 'react';
import './Categoria.css'
import { Tarjeta } from '../Tarjeta';


const Categoria = (props) => {
    const {titulo,color,videos=[], handleOpenModal} = props  
    const estiloBoton = {backgroundColor : color}     

    const videosFiltrados = videos.filter(video => video.categoria === titulo);

    return (
        videosFiltrados.length > 0 && (
            <section className='categoria'>
                <div className='categoria__container'>
                    <button className='categoria__button' style={estiloBoton}>{titulo}</button>   
                    <div className='cards__container' >
                        {
                        videosFiltrados.map((video,index) =>                        
                            <Tarjeta 
                            key = {index} 
                            foto= {video.foto} 
                            color = {color} 
                            categoria={titulo}
                            handleOpenModal ={handleOpenModal}  //pasa la funcion para abrir el modal
                            />
                        )}                
                    </div> 
                </div>                            
            </section>     
        )   
    );
}

export {Categoria}