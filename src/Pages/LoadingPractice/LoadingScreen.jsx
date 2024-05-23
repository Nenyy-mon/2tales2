import blueLogo from '../../assets/bluelogo.png'
import '../../styles/loading.css'
function LoadingScreen() {
    return (
        <div className="mainLoad">
            <img className='loadingLogo' src={blueLogo} alt="" />
            <div className="circleLoad">
                
            </div>
        </div>
    )
}

export default LoadingScreen
