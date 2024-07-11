import './Formulario.css'
import { Campo } from '../Campo';
import { ListaCategorias } from '../ListaCategorias';
import { Boton } from '../Boton';
import { useState } from 'react';


const Formulario = (props)=>{

  const {listaCategorias, background, color, border, active, onSave } = props;

  const [formData,setFormData] = useState({
      titulo:'',
      imagen:'',
      categoria:'',
      video:'',
      descripcion:'',
  });

  const handleChange = (e) => {
    setFormData({
    ...formData,
    [e.target.name]: e.target.value,
     });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      onSave(formData);
    };

    
    return <section className='formulario'>     
        <form onSubmit={handleSubmit} >                 
            <Campo titulo='Título' 
            name='titulo'
            value='{formData.titulo}'
            onChange ={handleChange}
            placeholder=' ingresa el titulo' 
            color={color} 
            background={background} 
            border={border} 
            active={active} 
            />

            <ListaCategorias
            listaCategorias={listaCategorias}
            name='categoria' 
            value={formData.categoria} 
            onChange={handleChange} 
            color={color} 
            background={background} 
            border={border} 
            active={active} />
           
           <Campo titulo='Imagen' name='imagen' value={formData.imagen} onChange={handleChange} placeholder=' ingresa el link de la imagen' color={color} background={background} border={border} active={active} />

           <Campo titulo='Video' name='video' value={formData.video} onChange={handleChange} placeholder=' ingresa el link del video' color={color} background={background} border={border} active={active} />

           <Campo titulo='Descripción' name='descripcion' value={formData.descripcion} onChange={handleChange} placeholder=' ingresa la descripción' color={color} background={background} border={border} active={active} />
            
            <div className='botones'>
                <Boton 
                nombre='GUARDAR'
                color= '#2271d1'
                background ='black'
                border='1px solid'
                boxshadow ='2px 2px 2px'
                type ='submit'
                />

                <Boton 
                nombre='LIMPIAR'               
                background ='#03122f'
                color='#FFFFFF'
                border='1px solid'
                boxshadow ='2px 2px 2px'
                onClick={() => setFormData({ titulo: '', categoria: '', imagen: '', video: '', descripcion: '' })}
                type='button'
                />               
            </div>     
        </form>
    </section>
}

export{Formulario};
