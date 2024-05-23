/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext,  useEffect,  useState } from "react";
import axios from "../api/axios";

export const ShopContext = createContext(null)

  


export default function ShopContextProvider(props) {
const [prods, setProds] = useState({products: []})
const [user,setUser] = useState({dataUser: {}})
// GET ALL PRODUCTS ARRAY FROM BACKEND
useEffect(() => {
    (async() => {
        try {
           const response = await axios.get('/shop',{
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            })
            setProds({products: response.data})
        } catch (err)  {
            console.log(err)
        }
    })()
},[])
//updating on change of products
useEffect(() => {
   console.log("Page loaded");
}, [prods]);



    //GETTING DEFAULT CART AND SETTING IT TO ZERO ON CART ICON
     function getDefaultCart() {
            const products =  prods['products'];
            let cart = {};
            for(let i = 0; i< products.length +1; i++) {
                cart[i] = 0;
            }
            return cart;
            }
    
const [cartItems, setCartItems] = useState(getDefaultCart())
const [name, setName] = useState('')
const [price,setPrice] = useState()
const [img,setImg] = useState('')
const [id, setId] = useState()


async function LoadUser()  {
    try {
        const id = localStorage.getItem('userid');
        axios.get(`privateUser/login/${id}`,{headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
         }})
         .then((res) => {
            setUser({dataUser: res.data})
         }).catch((err) => {
            console.log(err)
         })
    } catch (err) {
        console.log(err)
    }
}
useEffect(() => {
    try {
        LoadUser()
    }
    catch(err) {
        console.log(err)
    }
    
},[])

// eslint-disable-next-line no-unused-vars
function getRedirect() {
    try {

        axios.get('/cart/redirect', {headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }})
        .then((res) => {
            LoadUser()
        })
    } catch (err) {
        console.log(err)
    }
    }


const cartFuncs = async (itemId) => {
    const userId = localStorage.getItem('userid');
    const productData = prods.products[itemId -1];
    const userCart = user.dataUser.cart;
    const exists = userCart.find((el) => el.id === itemId) ? true : false;
    await LoadUser()
    if (!exists) {
        await addToCart(userId, productData)
        await LoadUser()
     } else if (exists) {
         await updateCart(itemId, userId)
         await LoadUser()
     }

}

const updateCart = async (itemId, userId) => { 
    try {
        const productData = prods.products[itemId -1];
        await axios.patch(`/cart/:${userId}`, productData, {headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }})
        .then((res) => {
            LoadUser()
        })
        .catch((err) => {
            console.log(err,'error')
        })
    } catch (err) {
        console.log(err)
    }
   
}



    const addToCart = async (userId, productData) => {
        try {
            await axios.post(`/cart/:${userId}`, productData, {headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
             }})
             .then((res) => {
                LoadUser()
             })
             .catch((err) => {
             })
        } catch(err) {
            console.log(err)
        }
    };
    

    const removeFromCart = (itemId, userId) => {
        try {
            const productData = prods.products[itemId -1];
            axios.patch(`/cart/decrement/:${userId}`,productData , {headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
             }})
             .then((res) => {
                LoadUser()
             })
        } catch (err) {
            console.log(err)
        }
    } 

   
    
    const contextValue = {cartItems, addToCart, removeFromCart,  cartFuncs, updateCart}
    return (
            // eslint-disable-next-line react/prop-types
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
