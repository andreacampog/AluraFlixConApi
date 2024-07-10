import '../assets/css/NuevoVideo.css'
import { Formulario } from "../componentes/Formulario"
import React from 'react'


const NuevoVideo = (props) =>{    

    const {categorias} = props;

    console.log(categorias);

    return(
        <main className='principal' >
                <div className="encabezado" >
                    <h1>NUEVO VIDEO</h1>
                    <h2>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h2>
                </div>
                <h1>Editar Tarjeta</h1>

                <Formulario                     
                    listaCategorias ={categorias}                  
                    background = '#000000'                    
                    color = '#FFFFFF'
                    active = 'red'
                    border = '#FFFFFF'
                />
        </main>   
    )             
}

export {NuevoVideo};