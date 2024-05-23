/* eslint-disable react-hooks/exhaustive-deps */
import {ShopContext} from  '../../../Context/ShopContextProvider.jsx'
import { useContext, useEffect, useState } from 'react'
import { CartItem } from './CartItem.jsx'
import '../../../styles/cart.css'
import axios from '../../../api/axios.js'
import LoadingScreen from '../../LoadingPractice/LoadingScreen.jsx'
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
function MidCart({setCartCount}) {
    const {removeFromCart, updateCart, cartFuncs} = useContext(ShopContext)
    const navigate = useNavigate()
    const [cartItem,setcartItem] = useState({products: []})
    const [sumPrice,setSumPrice] = useState(0)
    const [isLoading, setIsLoading] = useState(true)


    
    
  
    useEffect(() => {
        const entries = performance.getEntriesByType("navigation");
        entries.forEach((entry) => {
          if (entry.type === "reload") {
            console.log(`${entry.name} was reloaded!`);
            if (entry.name == window.location.href) {
             setIsLoading(false)
            }
          }
        });

        if (localStorage.length <= 1) {
            navigate('/2tales/loginMain')
        } else   {
            (async () => {
                try {
                    const id = localStorage.getItem('userid');
                    const res = await axios.get(`privateUser/login/:${id}`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                        }
                    });
                    setcartItem({ products: res.data });
                    let sumCount = 0;
                    let sumPrices = 0;
                    res.data.cart.forEach(el => {
                        sumCount += el.count;
                        sumPrices += el.price * el.count;
                    });
                    setSumPrice(sumPrices);
                    setCartCount(sumCount);
                    setIsLoading(false);
                } catch (err) {
                    setIsLoading(false);
                }
            })();
        }
    }, [cartFuncs, removeFromCart, updateCart, sumPrice])
   
      if (isLoading) {
        return (
          <LoadingScreen/>
        )
      }
    return (
        <div className="mainCart">
            <div className='bg'>
            <h1 className='cartHeader'>Your Cart Items</h1>
            <div className="cartDivHeader">
            </div>
            </div>
            <div className='cartItems'>
                <div className="cartItem">
                    <p className='imgMain'>Image</p>
                    <p className='nameMain'>Name</p>
                    <p className='numberMain'>Quantity</p>
                    <p className='priceMain'>Total price</p>
                </div>
                {cartItem.products.cart && cartItem.products.cart.length > 0 && localStorage.getItem('userjwt') ? (
                cartItem.products.cart.map((prod) => (
                    <CartItem key={prod.id} data={prod} />
                ))
            ) : (
                <p className='space'>No items in the cart</p>
            )}
              <div className="totalPrices">
                <p className='amount'>Total: {localStorage.getItem('userjwt') ? sumPrice : '0 ' }RSD</p>
            </div>
            </div>
          
        </div>
    )
}

export default MidCart
