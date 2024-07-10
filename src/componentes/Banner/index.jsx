import { Boton } from '../Boton';
import './Banner.css';


const Banner = () =>{
    return(
        <section className='banner' >
            <img className='banner__img'  src="./img/banner-desktop.jpg" alt="banner" />
            <div className='banner__container' >                
                <div className='banner__description'>    
                <Boton nombre='FRONT END' 
                    color= '#FFFFFF'
                    background='#6BD1FF'
                    border='1px solid'
                    boxshadow ='2px 2px 2px'
                />   
                    <h2>Challenge React</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, architecto ratione atque dignissimos nostrum nam maiores fuga eaque rerum, delectus minima quae officiis nulla praesentium earum consectetur amet sint. Dolorum!</p>
                </div>
                <div className='card' >Card con un video</div>
            </div>      
        </section>
    );
}

export {Banner};