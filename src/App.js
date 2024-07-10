import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Header } from './componentes/Header';
import { Footer } from './componentes/Footer';
import { Modal } from './componentes/Modal';
import React, { useState } from 'react';
import { Home } from './pages/Home';
import { NuevoVideo } from './pages/NuevoVideo';



const App = () => {

  const [modalVisible, setModalVisible] = useState(false);

  //Funcion que cambia el estado a visible
  const handleOpenModal = () =>{
    setModalVisible(true);
  };

  //Funcion que cambia el estado a no visible
  const handleCloseModal = () =>{
    setModalVisible(false);
  }; 


  const videos = [
    {      
      foto: './img/image_card1.png',
      categoria:'FRONT END'
    },
    { 
      foto: './img/image_card2.png',
      categoria:'FRONT END'
    },
    { 
      foto: './img/image_card3.png',
      categoria:'FRONT END'
    },
    { 
      foto: './img/image_card4.png',
      categoria:'BACK END'
    },
    { 
      foto: './img/image_card5.png',
      categoria:'BACK END'
    },
    { 
      foto: './img/image_card6.png',
      categoria:'BACK END'
    },
    { 
      foto: './img/image_card7.png',
      categoria:'INNOVACION Y GESTIÓN'
    },
    { 
      foto: './img/image_card8.png',
      categoria:'INNOVACION Y GESTIÓN'
    },
    { 
      foto: './img/image_card9.png',
      categoria:'INNOVACION Y GESTIÓN'
    }
  ]; 

  const categorias = [
    {
      titulo: 'FRONT END',
      color: '#6BD1FF'      
    },
    {
      titulo:'BACK END' ,
      color:'#00C86F'
    },
    {
      titulo:'INNOVACION Y GESTIÓN' ,
      color: '#FFBA05'
    }
  ]; 

  
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route 
          path='/' 
          element= {<Home
            categorias={categorias} 
            videos={videos} 
            handleOpenModal={handleOpenModal}
          />} 
        />
        <Route path='/nuevo-video' element = {<NuevoVideo 
        categorias={categorias}/>} />

      </Routes>       
      {modalVisible && <Modal handleCloseModal={handleCloseModal} listaCategorias = {categorias} />} 
      <Footer />
    </Router>
  );
}


export default App;


/* // return (
//   <>
//    <Header />         
//    <Banner />     
//    {
//     categorias.map((categoria,index) => <Categoria 
//     titulo= {categoria.titulo}
//     key = {index}
//     color ={categoria.color}     
//     videos= {videos}        
//     handleOpenModal={handleOpenModal}
//     />
//     )}      


//     <Footer />
//     {modalVisible && <Modal handleCloseModal={handleCloseModal} listaCategorias = {categorias} />} 
//   </>
// );
// };

// export default App; */