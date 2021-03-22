import './Home.css';
import hero from './img/amazon-prime-video-hero.jpg';
import leanstartup from './img/the-lean-startup.jpg';
import candles from './img/candles.jpg';
import casiowatch from './img/casio-watch.jpg';
import firetvstick from './img/fire-tv-stick.jpg';
import nintendo from './img/nintendo-switch.jpg';
import controllerpro from './img/switch-controller-pro.jpg';
import Product from '../Product/';

function Home() {
    return (
        <div className="home">
           <div className="home__container">
               <img className="home__image" src={hero} alt="" />
           </div>

           <div className="home__row">
               <Product id="127381738214" title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price={29.99} image={leanstartup} rating={5}/>
               <Product id="127381738215" title='Sage Scented Candle, Natural Soy Jar Candles Gift' price={18.99} image={candles} rating={3}/>
           </div>
           <div className="home__row">
               <Product id="127381738213" title='Casual Watch Casio MQ24' price={21.95} image={casiowatch} rating={4}/>
               <Product id="127381738123" title='Fire TV Stick 4K with Alexa Voice Remote' price={49.99} image={firetvstick} rating={5}/>
               <Product id="127381738412" title='Nintendo Switch with Neon Blue and Neon Red Joy‑Con' price={299.99} image={nintendo} rating={4}/>
           </div>
           <div className="home__row">
               <Product id="127381738489" title='Nintendo Switch Pro Controller' price={60.00} image={controllerpro} rating={5}/>
           </div>
        </div>
    )
}

export default Home;
