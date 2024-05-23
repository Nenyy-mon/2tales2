/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import '../../styles/profileBg.css'
import { useTranslation } from 'react-i18next'

function BgImage({userLogged}) {
  const {t} = useTranslation()
    return (
        <div className='bg'>
          <h1 className="back">{userLogged}</h1>
          {userLogged=='Profile' ? <h2 className='backSecond'><Link to='/2tales/loginMain'>{t("Login")}</Link>
            /
          <Link to='/2tales/signup' >{t("SIGN UP")}</Link></h2> : ''}
         
         <div className="cartDivHeader">
         
        </div>
        </div>
    )
}

export default BgImage
