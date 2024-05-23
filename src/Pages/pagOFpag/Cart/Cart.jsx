import { useState } from "react"
import Footer from "../../../Footer"
import NavShop from "../../Shop/NavShop"
import MidCart from "./MidCart"

function Cart() {
    const [cartCount, setCartCount] = useState(0)


    return (
        <>
        <NavShop cartCount={cartCount}/>
        <MidCart setCartCount={setCartCount}/>
        <Footer/>
        </>
    )
}

export default Cart
