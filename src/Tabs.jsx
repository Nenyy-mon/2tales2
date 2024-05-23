import { useState } from "react"
import "./styles/tabs.css"





function Tabs() {
const [toggleState,setToggleState] = useState(1)

const toggleTab = (index) => {
    setToggleState(index)
    console.log(index)
}
    
   return ( 
   <div className="alls">
        <div className="tabs">
            <button onClick={() => toggleTab(1)} className={toggleState === 1 ? "tab london actived" : "tab london"}>LONDON DRY GIN</button>
            <button onClick={() => toggleTab(2)} className={toggleState === 2 ? "tab pink actived" : "tab pink"}>PINK GIN</button>
            <button onClick={() => toggleTab(3)} className={toggleState ===3 ? "tab ginger actived" : "tab ginger"} >GINGER GIN</button>
            <button onClick={() => toggleTab(4)} className={toggleState ===4 ? "tab coffee actived" : "tab coffee"} >COFFEE GIN</button>
            <button onClick={() => toggleTab(5)} className={toggleState ===5 ? "tab vodka actived" : "tab vodka"}>VODKA</button>
        </div>
        <div className="content">
            <div className={toggleState === 1 ? "tab-content london actived" : "tab-content london "}>
                <p className={toggleState === 1 ? "londonp actived" : "londonp"}>
                Our debutant London dry gin is a perfect combination of 9 different plants and spices. The spotlight in taste is on Juniper berries from the Tara mountain and the root of Angelica, followed by Lavender flowers, lemon and orange skin aromas. <br/><br/>
                The harmonious combination of other spices emphasizes the sensation of freshness and raises the balance of flavors to a higher level.
                Smooth body of gin is a product of exhaustive distillation that also preserves the essential oils, being the key to the uniqueness of the taste of this classic.<br/><br/>
                Apart from being the perfect base for numerous cocktails such as the famous Martini and Gin fizz, many prefer to drink it “pure” with a slice of lime or mixed with tonic.<br/><br/>
                Cheers!
                </p>
            </div>

            <div className={toggleState === 2 ? "tab-content pink actived" : "tab-content pink "}>
                <p className={toggleState === 2 ? "pinkp actived" : "pinkp"}>
                How is our romantically pink gin different from all the others? Well, let’s just say that we have found a way to perfectly combine the freshness of the pomegranate and sweetness of strawberries, with the characteristic base of juniper and citrus. <br/><br/> 
                With the addition of various different herbs, the result is the unique and refreshing harmony of taste.On its own or with tonic, it’s up to you. We guarantee pleasure either way.Oh and let’s be clear, it may be pink but it’s definitely not just for girls.<br/><br/>
                Cheers!
                </p>
            </div>
            <div  className={toggleState === 3 ? "tab-content ginger actived" : "tab-content ginger "}>
                <p className={toggleState === 3 ? "gingerp actived" : "gingerp"}>
                A touch of spice on your tongue, the subtle heat of ginger and a hint of citrus awaken your tastebuds. Allow this elixir to take you on a uniquly sensual journey.
                </p>
            </div>
            <div className={toggleState === 4 ? "tab-content coffee actived" : "tab-content coffee "}>
                <p className={toggleState === 4 ? "coffeep actived" : "coffeep"}>
                If you love espresso and enjoy gin just as much, then this is a double treat for you. 2Tales in cooperation with Java Coffee has prepared a phenomenal union of these two drinks in the form of the Coffee Gin. <br/><br/> 
                Infusion of the high quality coffee grains from Columbia and Ethiopia with a hint of vanilla, standing in a perfect balance with juniper and floral-citrus curtain. Pleasant sweetness and creamy body of this drink will enchant you. <br/><br/> 
                We recommend that you consume this classy drink with ice or mixed with tonic, but you also shouldn’t miss the Coffee Negroni nor Espresso Martini. <br/><br/> 
                Cheers!
                </p>
            </div>
            <div className={toggleState === 5 ? "tab-content vodka actived" : "tab-content vodka "}>
                <p className={toggleState === 5 ? "vodkap actived" : "vodkap"}>
                A challenge that goes a long way from a corn-based alcohol to a perfectly balanced drink favoured by many. <br/><br/>As many as 7 distillations and lying in activated charcoal between each of them is the secret of getting an ultimately pure drink. <br/><br/>
                Subtle grain sweetness, smooth body and texture followed by divine freshness give originality to this handcraft.<br/><br/>
                We recommend that you always cool it well.
                </p>
            </div>
        </div>
   </div>
   )
}
export default Tabs