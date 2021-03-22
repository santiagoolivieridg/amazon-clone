import './Checkout.css';
import Subtotal from '../Subtotal/';
import CheckoutProduct from '../CheckoutProduct/';
import { useStateValue } from '../../StateProvider';
import amazonAd from './img/amazon-ad.png';

function Checkout() {
    const [{basket}] = useStateValue();
    
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src={amazonAd}/> 

                <div>
                <h2 className="checkout__title">Your Shopping Basket</h2>

                {basket.map(item => (
                    <CheckoutProduct 
                    id={item.id} 
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating} />
                ))}
                
                </div>
            </div> 

            <div className="checkout__right">
                <Subtotal />
            </div>
           
        </div>
    )
}

export default Checkout;
