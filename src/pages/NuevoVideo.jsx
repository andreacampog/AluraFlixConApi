import { buscar } from '../api/api'
import '../assets/css/NuevoVideo.css'
import { Formulario } from "../componentes/Formulario"
import React from 'react'

import { useState,useEffect } from 'react'

const NuevoVideo = (props) =>{    

    const {url} = props

    const [categorias,setCategorias] = useState([]);

    useEffect(()=>{
        buscar(url,setCategorias)
        console.log(categorias);
    },[url]);       


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