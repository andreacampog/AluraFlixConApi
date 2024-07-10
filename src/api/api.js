import axios from 'axios'


//create es un metodo que recibe un ojeto de configuracion, en este caso la URL
export const api = axios.create({
    baseURL:"http://localhost:5000"
})


//funcion asincrona que recibe dos prametros la url y una funcion que actualiza la info
export const buscar = async (url, setData) =>{
    
    const respuesta = await api.get(url)  //en respuesta queda la info que solicitamos
    console.log(respuesta) 
    setData(respuesta.data) //axios pone los datos en la llave data
}
