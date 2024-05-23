/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import "../../styles/midshop.css"
import '../../styles/shopComp.css'
import Product from "./Product.jsx";
import axios from "../../api/axios.js";
// eslint-disable-next-line react/prop-types
function MidShop({setCartCount}) {
    const [prods, setProds] = useState({products: []})
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
    

return (
    <>
   
    <div className="maine">
               {prods.products.map((product) => <Product setCartCount={setCartCount}  key={product.id} data={product} />)
}
</div>
</>
)
}



export default MidShop
