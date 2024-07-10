import './Campo.css'

const Campo = (props) => {

    const {titulo, placeholder,color,background,border,active} = props
    
    const estiloCampos = {
        color: color,
        backgroundColor: background,
        border: border,
        active:active   
      };  


    const placeholderModificado = `${placeholder}...`

    return <div className='campo' >
        <label>{titulo}</label>
        <input  style={estiloCampos} placeholder={placeholderModificado}/>
    </div>

    
}

export {Campo}

