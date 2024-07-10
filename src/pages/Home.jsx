import {Banner} from '../componentes/Banner'
import {Categoria} from '../componentes/Categoria'

 
const Home =({categorias,videos,handleOpenModal}) =>{       
    return (
        <main>       
            <Banner />
            {categorias.map((categoria, index) => (
            <Categoria
            titulo={categoria.titulo}
            key={index}
            color={categoria.color}
            // videos={videos}
            videos ={videos}
            handleOpenModal={handleOpenModal}
            />
        ))}            
        </main>
    )
}

export {Home}