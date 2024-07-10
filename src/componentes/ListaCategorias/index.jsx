import './ListaCategorias.css'

const ListaCategorias = (props) =>{

  const{listaCategorias,color,background,border,active} =props;

  const estiloCategorias = {
    color: color,
    backgroundColor: background,
    border: border,
    active:active   
  };  
    return <div className="lista-categorias">
        <label>Categorías</label>
        <select style={estiloCategorias} > 
            {
                listaCategorias.map((categoria,index) => <option key={index}>{categoria.titulo} </option>)
            }
        </select>
    </div>


}

export {ListaCategorias}