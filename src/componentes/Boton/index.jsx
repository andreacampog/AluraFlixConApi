import './Boton.css';

const Boton = (props) => {

    // const {nombre, color, background, icono, border, boxshadow} = props    

    // const estiloSombra={boxShadow: boxshadow}
    // const estiloTexto ={color: color};   
    // const estiloFondo ={background: background};    
    // const estiloBorde ={border:border} 
    
    
    // const estiloBoton = {...estiloTexto,...estiloFondo,...estiloBorde,...estiloSombra}
    
    //Mejor forma de construir los estilos:


    const { nombre, color, background, icono, border, boxShadow, onClick } = props;

    const estiloBoton = {
      color: color,
      background: background,
      border: border,
      boxShadow: boxShadow
    };

    return(   
        <button className='boton' style={estiloBoton} onClick={onClick} >
            {/* imagen solo se renderiza si icono no es undefined. */}
           {icono && <img className='icono' src={icono} alt="icono" />}
           {nombre}
        </button>
    );
}

export {Boton}