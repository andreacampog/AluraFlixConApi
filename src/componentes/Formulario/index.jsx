import './Formulario.css'
import { Campo } from '../Campo';
import { ListaCategorias } from '../ListaCategorias';
import { Boton } from '../Boton';


const Formulario = (props)=>{
    const {listaCategorias,background, color,border,active} = props;
    
    return <section className='formulario'>
     
        <form action="" >     
            <Campo titulo='Título' placeholder=' ingresa el titulo' color={color} background={background} border={border} active={active} />
            <ListaCategorias listaCategorias= {listaCategorias} color={color} background={background} border={border} active={active} />               
           
            <Campo titulo ='Imagen' placeholder=' ingresa el link de la imagen' color={color} background={background} border={border} active={active}  />
            <Campo titulo ='Video' placeholder=' ingresa el link del video' color={color} background={background} border={border} active={active}  />
            <Campo titulo ='Descripción'  placeholder=' ingresa la descripción' color={color} background={background} border={border} active={active}  />
            
            <div className='botones'>
                <Boton 
                nombre='GUARDAR'
                color= '#2271d1'
                background ='black'
                border='1px solid'
                boxshadow ='2px 2px 2px'/>

                <Boton 
                nombre='LIMPIAR'               
                background ='#03122f'
                color='#FFFFFF'
                border='1px solid'
                boxshadow ='2px 2px 2px'/>                
            </div>     
        </form>
    </section>


}

export{Formulario};
