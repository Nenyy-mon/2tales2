import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/scrolling.css'
import { useRef,useEffect } from "react";
import gsap from 'gsap';
import { NavLink, useNavigate } from 'react-router-dom';
import { prices } from '../data/prices';
import axios from '../api/axios';
import { useTranslation } from 'react-i18next';
function Scrolling() {
    const navigate = useNavigate();
    const {t} = useTranslation()
    const contentRef = useRef(null);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = gsap.utils.toArray('.container');
        gsap.to(sections, {
            width: "100vw" * (sections.length -1),
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: '.content',
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                markers: false,
                end: () => `+=${contentRef.current.offsetWidth }`, 
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);
    
    const sendProd = async (e) => {
        e.preventDefault();

        const selectedProduct = prices[e.target.id -1];
        const id = selectedProduct.id;
        const name = selectedProduct.name;
        const img = selectedProduct.img;
        const price = selectedProduct.price;
        const data = {
            id,
            name,
            price,
            img
        }
        const response  = await axios.post('http://localhost:3000/shop/single', JSON.stringify(data),{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
             },  
        }).then((result) => {
            const product = result.data.data;
            scrollToTop()
             navigate('/2tales/shop/singleProd', { state: { "product": product}})
        }).catch((err) => {
            console.log(err, 'grijeska')
            console.log(err.message, 'poruka')
        })
    }



    return (
        <>
         <div className="content" ref={contentRef}>
            <div  className="container london">
                <div onClick={(e) => {
                    sendProd(e)
                    scrollToTop()}}  id="1" className='buyText'></div>
                <p className="pCont lond">
                {t("Our debutant London dry gin is a perfect combination of 9 different plants and spices. The spotlight in taste is on Juniper berries from the Tara mountain and the root of Angelica, followed by Lavender flowers, lemon and orange skin aromas.  The harmonious combination of other spices emphasizes the sensation of freshness and raises the balance of flavors to a higher level. Smooth body of gin is a product of exhaustive distillation that also preserves the essential oils, being the key to the uniqueness of the taste of this classic. Apart from being the perfect base for numerous cocktails such as the famous Martini and Gin fizz, many prefer to drink it 'pure' with a slice of lime or mixed with tonic. Cheers!")}
                </p>
            </div>
            <div className="container pink">
            <div onClick={(e) => {
                    sendProd(e)
                    scrollToTop()}}  id="2" className='buyText'></div>
                <p className="pCont pinky">
                {t("How is our romantically pink gin different from all the others? Well, let’s just say that we have found a way to perfectly combine the freshness of the pomegranate and sweetness of strawberries, with the characteristic base of juniper and citrus.   With the addition of various different herbs, the result is the unique and refreshing harmony of taste.On its own or with tonic, it’s up to you. We guarantee pleasure either way.Oh and let’s be clear, it may be pink but it’s definitely not just for girls. Cheers!")}
                </p>
            </div>

            <div className="container ginger">
            <div onClick={(e) => {
                    sendProd(e)
                    scrollToTop()}}  id="3" className='buyText'></div>
                <p className="pCont gingy">
              {t(" A touch of spice on your tongue, the subtle heat of ginger and a hint of citrus awaken your tastebuds. Allow this elixir to take you on a uniquly sensual journey.")}
                </p>
            </div>

            <div className="container coffee">
            <div onClick={(e) => {
                    sendProd(e)
                    scrollToTop()}}  id="4" className='buyText'></div>
                <p className="pCont">
               {t( " If you love espresso and enjoy gin just as much, then this is a double treat for you. 2Tales in cooperation with Java Coffee has prepared a phenomenal union of these two drinks in the form of the Coffee Gin. Infusion of the high quality coffee grains from Columbia and Ethiopia with a hint of vanilla, standing in a perfect balance with juniper and floral-citrus curtain. Pleasant sweetness and creamy body of this drink will enchant you. We recommend that you consume this classy drink with ice or mixed with tonic, but you also shouldn’t miss the Coffee Negroni nor Espresso Martini. Cheers! ")}</p>
            </div>

            <div className="container vodka">
            <div onClick={(e) => {
                    sendProd(e)
                    scrollToTop()}}  id="5" className='buyText'></div>
                <p className="pCont">
               {t( "A challenge that goes a long way from a corn-based alcohol to a perfectly balanced drink favoured by many. As many as 7 distillations and lying in activated charcoal between each of them is the secret of getting an ultimately pure drink. Subtle grain sweetness, smooth body and texture followed by divine freshness give originality to this handcraft.  We recommend that you always cool it well.")}</p>
            </div>
        </div>
        </>
    )
}

export default Scrolling
