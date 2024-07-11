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
};


export const agregarVideo = async (nuevoVideo, setData) => {
    try {
        const respuesta = await api.post('http://localhost:5000/videos', nuevoVideo);
        console.log('Video agregado:', respuesta.data); //  imprimir la respuesta 
        setData(respuesta.data); // Actualizar los datos después de agregar el video
    } catch (error) {
        console.error('Error al agregar el video:', error);
        throw error; // manejar el error según necesidades
    }
};

export const eliminarVideo = async (idVideo, setData) => {
  try {
      const respuesta = await api.delete(`/videos/${idVideo}`);
      console.log('Video eliminado:', respuesta.data); // Puedes imprimir la respuesta si deseas
    //   setData(respuesta.data); // Actualiza los datos después de eliminar el video
    setData(prevData => prevData.filter(video => video.id !== idVideo)); // Actualiza los datos después de eliminar el video
  } catch (error) {
      console.error('Error al eliminar el video:', error);
      throw error; // Puedes manejar el error según tus necesidades
  }
};