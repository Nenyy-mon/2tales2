import "./styles/footer.css"
import logo from "./assets/Asset 1.png"
import image from './assets/arrow-up.png'
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Footer() {
    const {t} = useTranslation()
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return (
        <div className="footer">
           
            <div className="upper-footer">
            <NavLink onClick={scrollToTop} to='/2tales/'>
                <img width="80" src={logo} alt="" className="logo-footer" />
                </NavLink>
            </div>
            <div className="down-footer">
                <div className="contact-div">
                <h2 className="contact-head">{t("CONTACT US")}</h2><br/><br/>
                <p className="contact-p">
                {t("PHONE")}: <a  className=" linked" href="tel:+381 612222397">+381 612222<span className="num">3</span>97</a> <br/>
                {t("PHONE")}: <a className=" linked" href="tel:+381 612222497">+381 612222<span className="num">4</span>97</a> <br/>
                {t("EMAIL")}: <a className=" linked" href="mailto:office@2tales.rs">office@<span className="num">2tales</span>.rs</a> <br/>
                {t("FOLLOW US ON:")} <br/><br/>
                <a className="aig"  href="https://www.instagram.com/2tales_spirits/" target="_blank" rel="noreferrer"><img src="./src/assets/instagram.png" alt="Instagram" width="20px" /></a>
                <a className="afa" target="_blank" href="https://www.facebook.com/profile.php?id=100069385623493" rel="noreferrer"><img src="./src/assets/facebook.png" alt="Facebook" width="20px" /></a>
                </p>
                </div>
                <div className="about-div">
                <h2 className="about-head">{t("ABOUT US")}</h2><br/><br/><br/><br/>
                <p className="about-p">{t("2Tales is a small craft distillery with big ideas located in Belgrade.")}</p>
                </div>
                <div className="sndmsg-div">
                <h2 className="sndmsg-head">{t("Send us a message:")}</h2>
                <form className="formFooter" action="">
                    <label className="labelFooter" htmlFor="name">{t("NAME")}<span className="req">*</span><br/>
                        <input className="inputFooter" placeholder="Name" id="name" type="text" required  />
                    </label>
                    <label className="labelFooter" htmlFor="emailFooter">{t("EMAIL")}<span className="req">*</span><br/>
                        <input className="inputFooter" placeholder="Email" id="emailFooter" type="email" required />
                    </label>
                    
                    <label className="labelFooter" htmlFor="message">{t("MESSAGE")}<span className="req">*</span><br/>
                        <textarea className="inputFooter" placeholder="Message" id="message"  cols={22} rows={3} required ></textarea>
                    </label>
                    <button className="btn" type="submit">Send</button>
                </form>
                </div>
            </div>
            <button onClick={ scrollToTop}  className="up"><img src={image} alt="arrowUp" width="30px" className="arrow" /></button>
        </div>
    )
}


export default Footer
