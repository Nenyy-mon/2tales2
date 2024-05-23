import {ShopContext} from  '../../../Context/ShopContextProvider'
import { useContext, useEffect } from 'react'

/* eslint-disable react/prop-types */
export const CartItem = (props) => {
    // eslint-disable-next-line no-unused-vars
    const userId = localStorage.getItem('userid')
    const {id, name, price, img, count} = props.data;
    const {removeFromCart, updateCart} = useContext(ShopContext)

    if (count < 1) {
        return;
    } else {


    return <div key={id} className="cartItem">
        <img className="img" src={img} alt='' />
        <div className="description">
            <p><b>{name}</b></p>
        </div>
        <div className="countHandler">
            <button onClick={() => removeFromCart(id, userId)}> - </button>
            <p className='count'>{count}</p>
            <button onClick={() => updateCart(id, userId)}> + </button>
        </div>
        <p className="price">
            {price*count},00 RSD
        </p>
    </div>
    }
}
