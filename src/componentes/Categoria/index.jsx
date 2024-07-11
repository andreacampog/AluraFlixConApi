import React from 'react';
import './Categoria.css'
import { Tarjeta } from '../Tarjeta';
import { useState, useEffect } from "react"
import { buscar,eliminarVideo } from '../../api/api';

const Categoria = (props) => {

    const { titulo, color, url, handleOpenModal} = props;   
    const [videos,setVideos] = useState([]);   
    const estiloBoton = {backgroundColor : color}    

    // useEffect(() => {
    //     buscar(url, setVideos)
    //     .then(() => console.log(videos))
    //     .catch(error => console.error('Error fetching videos:', error));
    // }, [url]);


    useEffect(() => {
        buscar(url, (response) => {
            setVideos(Array.isArray(response) ? response : []);
        })
        .catch(error => console.error('Error fetching videos:', error));
    }, [url]);

    

    
    // const handleDelete = async (idVideo) => {
    //     try {
    //         await eliminarVideo(idVideo,setVideos);
    //         console.log(`Video con id ${idVideo} eliminado`);
    //     } catch (error) {
    //         console.error(`Error al eliminar video con id ${idVideo}:`, error);
    //     }
    // };

    const handleDelete = async (idVideo) => {
        try {
            await eliminarVideo(idVideo);
            setVideos(prevVideos => prevVideos.filter(video => video.id !== idVideo));
            console.log(`Video con id ${idVideo} eliminado`);
        } catch (error) {
            console.error(`Error al eliminar video con id ${idVideo}:`, error);
        }
    };

    const videosFiltrados = Array.isArray(videos) ? videos.filter(video => video.categoria === titulo): [];
    
    // const videosFiltrados = videos.filter(video => video.categoria === titulo);
    
    
    return (
        videosFiltrados.length > 0 && (
            <section className='categoria'>
                <div className='categoria__container'>
                    <button className='categoria__button' style={estiloBoton}>{titulo}</button>   
                    <div className='cards__container' >
                        {
                        videosFiltrados.map((video) =>    
                            {         
                            const {foto,categoria,id} =video;       
                            return(
                                <Tarjeta          
                                    key={id}                              
                                    id={id}                    
                                    foto= {foto} 
                                    color = {color} 
                                    categoria={categoria}
                                    handleOpenModal ={handleOpenModal}  //pasa la funcion para abrir el modal                                    
                                    handleDelete ={()=> handleDelete(id)}
                                />
                            )}   
                        )}                
                    </div> 
                </div>                            
            </section>     
        )   
    );
}

export {Categoria}