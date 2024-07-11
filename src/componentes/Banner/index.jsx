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
                <div className='card' >
                    <img src="https://s3-alpha-sig.figma.com/img/2237/ac5d/6ce7a82bd074f782e0d03ce2eae65ade?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bOuvPl9yE~Io~HWeMBIY5C7kNY8Yc9T8Z9MrvhJolvKrqwJEBx0o67g1PLVuf9oiyR0ZJSJv80BnhUFgLhPunUbuEO0~Wro4AiAJYx71w1~e3oX~jP7H8czm~6Eom7LLlncbHFt9MJRC1W8a~0G6oX8ZwlhAcLMGol7zQmufXjiLN7QV9--iun6~-MD7urw6UacJdx8jY~ifq9BAybN68QgDhHHie7-L4yy8NgCSF1qxFso9zvoAJTCjFNl7CH8ImmaJtAhXwkVym3wScV2g-YWrY0ON8dnvtvhvFrcdB6ShmbZVMD6-JjmnoVJEJLkn3~N2w3gM91L0n4tIWGLyHA__" alt="" />  
                </div>  
                                
            </div>      
        </section>
    );
}

export {Banner};