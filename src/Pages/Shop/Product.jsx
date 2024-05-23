/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../../styles/midshop.css"
import '../../styles/shopComp.css'
import { useTranslation } from "react-i18next"
import { ShopContext } from "../../Context/ShopContextProvider";
import { useContext, useEffect, useState } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
function Product(props) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    const navigate = useNavigate()
    const {t} = useTranslation()
    const postProductSingle =  (e) => {
        e.preventDefault()
        const data = {
            id,
            name,
            price,
            img
        }
    
    }






  



    const { cartFuncs, cartItems} = useContext(ShopContext)
    const {id, name, price, img} = props.data;
    const cartItemAmount = cartItems[id]
    const userSet = localStorage.getItem('userid') !== null;
    const [count,setCount] = useState(0)
    useEffect(() => {
        (async () => { try {
            const idUser = localStorage.getItem('userid');
            axios.get(`privateUser/login/${idUser}`,{headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
             }})
             .then((res) => {
                
                if (res.data.cart.length == 0) {
                    setCount(0)
                } else {
                    const foundItem = res.data.cart.find(el => el.id === id);
                    if (foundItem) {
                        setCount(Number(foundItem.count));
                    }
                    let cartItems = res.data.cart;
                    let sumCount = 0;
                    cartItems.map( (el) =>  {
                        sumCount += el.count
                        return Number(sumCount)
                    })
                    props.setCartCount(sumCount)
                }
             
             }).catch((err) => {
                console.log(err)
             })
        } catch (err) {
            console.log(err)
        }})()
    },[cartFuncs])
     

    
    return (
         <div key={id} className="mainComp">
              <div  className="picComp">
                  <img    className='bottle' 
                  src={img} alt={name} />
              </div>
              <div className="priceComp"   >
                  <p  className="nameComp">{name}</p>
                  <p   className="pricetagComp">{price},00</p>
              </div>
              <div className='cart'   >
                  <p onClick={() => {
                    if (userSet) {
                       cartFuncs(id)
                    } else {
                        navigate('/2tales/loginMain')
                    }
                    }} className='addCart'>{t("ADD TO CART")} {`-${localStorage.getItem('userjwt') ? count : 0}-`}</p>
              </div>
        
          </div>
    )
}

export default Product
