import {Banner} from '../componentes/Banner'
import {Categoria} from '../componentes/Categoria'
import {buscar} from '../api/api'
import { useState, useEffect } from "react"

 
const Home =({url,handleOpenModal}) =>{    

    const [categorias,setCategorias] = useState([]);    

    useEffect(()=> {
        buscar(url,setCategorias)
        .then(()=> console.log(categorias))
        .catch(error => console.error(error))   
    }, [url]);

    return (
        <main> 
            <Banner />
            {
                categorias.length > 0 && categorias.map(categoria=> {              
                    const {id,titulo,color} = categoria;
                    return (
                        <Categoria          
                            key={id}                                             
                            titulo={titulo}                            
                            color={color}                         
                            handleOpenModal={handleOpenModal}                          
                            url={'/videos'}                        
                        />
                    );
                })
            }            
      </main>
    );     
};   
export {Home}